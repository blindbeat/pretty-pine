import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Avatar, Button, CircularProgress, Paper, Stack, styled, Typography } from "@mui/material";
import { deleteReport, fetchReport } from "api/report.api";

const StyledPaper = styled(Paper)({
  padding: '12px'
})

export default function Report({ homePath }) {
  const history = useHistory()
  const { id } = useParams()
  const [report, setReport] = useState({
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        const data = await fetchReport(id)
        setReport(data)
      }
      catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [id])

  async function deleteHandle() {
    try {
      deleteReport(id)
      history.push(homePath)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Button variant='contained' label='create' onClick={history.goBack} sx={{
        mt: 2,
        mb: 2
      }}>back</Button>

      {error && <h1>Some error occured</h1>}
      {loading && (error === null) && <CircularProgress sx={{ margin: 'auto', display: 'block' }} />}
      {!loading && (error === null) && <Stack spacing={2}>
        <StyledPaper>
          <Stack direction='row' spacing={3}>
            <Avatar sx={{
              width: 76,
              height: 76
            }} />
            <Typography variant='h5' component='h5'>
              {report.name} {report.surname} {report.middlename}
            </Typography>
          </Stack>
        </StyledPaper>
        {report.work && <StyledPaper>
          <Typography variant='h5' component='h5'>Work</Typography>
          <Typography variant='p' component='p'>
            Company: {report.work}
          </Typography>
        </StyledPaper>}
        {(report.mobile || report.birthday) && <StyledPaper>
          <Typography variant='h5' component='h5'>Personal information</Typography>
          {report.mobile && <Typography variant='p' component='p'>
            Mobile: {report.mobile}
          </Typography>}
          {report.birthday && <Typography variant='p' component='p'>
            birthday: {report.birthday}
          </Typography>}
        </StyledPaper>}
        <StyledPaper>
          <Typography variant='h5' component='h5'>Additional information</Typography>
          <Typography variant='p' component='p'>
            {report.info}
          </Typography>
        </StyledPaper>
        <Stack direction='row' justifyContent='space-between' spacing={3}>
          <Button variant='contained' label='create' color='error' onClick={deleteHandle}>Delete</Button>
          <Button variant='contained' label='create' onClick={history.goBack}>Edit</Button>
        </Stack>
      </Stack>}
    </>
  )
}