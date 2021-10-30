import { useState } from 'react';
import { Button } from '@mui/material'
import { postReport } from 'api/report.api';
import { Link, useHistory } from 'react-router-dom';
import ReportForm from './components/ReportForm';

export default function UpdateReport({ homePath }) {
  const history = useHistory()

  const [requestPending, setRequestPending] = useState(false)

  async function handleSubmit(event, form) {
    event.preventDefault()
    try {
      await postReport(form)
      history.push(homePath)
    } catch (error) {
      console.error(error);
      setRequestPending(false)
    }
  }

  return (
    <>
      <Button variant='contained' label='create' color='error' component={Link} to={`${homePath}`} sx={{
        mt: 2,
        mb: 2
      }}>Cancel</Button>
      <ReportForm
        handleSubmit={handleSubmit}
        initialForm={{
          name: '',
          surname: '',
          middlename: '',
          birthday: null,
          mobile: null,
          work: '',
          info: ''
        }}
        requestPending={requestPending}
      />
    </>
  )
}