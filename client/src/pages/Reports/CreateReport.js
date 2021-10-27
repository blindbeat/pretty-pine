import { useState } from 'react';
import { Paper, TextField, Grid, Stack, Button } from '@mui/material'
import { LocalizationProvider, DatePicker } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDateFns'
import MuiPhoneNumber from 'material-ui-phone-number';
import createReport from 'api/report.api';
import { Link } from 'react-router-dom';

export default function CreateReport({ homePath }) {
  const [form, setForm] = useState({
    name: '',
    surname: '',
    middlename: '',
    birthday: null,
    mobile: null,
    work: '',
    info: ''
  })

  function handleEventChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value })
  }

  function handleBirthdayChange(date) {
    try {
      date = date.toISOString()
    } catch (error) {
      date = null
    }
    setForm({ ...form, birthday: date })
  }

  function handleMobileChange(mobile) {
    setForm({ ...form, mobile: mobile })
  }

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData()
    for (const entry in form) {
      if (form[entry] === '' || form[entry] === null) continue
      formData.append(entry, form[entry])
    }
    createReport(formData)
  }

  return (
    <>
      <Stack direction='row' justifyContent='left' sx={{
        mt: 2,
        mb: 2
      }}>
        <Button variant='contained' label='create' color='error' component={Link} to={`${homePath}`}>Cancel</Button>
      </Stack>
      <Paper sx={{ padding: '20px' }}>
        <Grid container component='form' onSubmit={handleSubmit} spacing={2}>
          <Grid item sm={12} md={4}>
            <TextField
              value={form.name}
              onChange={handleEventChange}
              label='name'
              name='name'
              variant="standard"
              fullWidth
              required
            />
          </Grid>
          <Grid item sm={12} md={4}>
            <TextField
              value={form.surname}
              onChange={handleEventChange}
              label='surname'
              name='surname'
              variant="standard"
              fullWidth
              required
            />
          </Grid>
          <Grid item sm={12} md={4}>
            <TextField
              value={form.middlename}
              onChange={handleEventChange}
              label='middle name'
              name='middlename'
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item sm={12} md={4}>
            <LocalizationProvider dateAdapter={DateAdapter}>
              <DatePicker
                label="birthday"
                value={form.birthday}
                onChange={handleBirthdayChange}
                inputFormat='dd/mm/yyyy'
                renderInput={(params) => <TextField fullWidth variant='standard' {...params} />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item sm={12} md={8}>
            <MuiPhoneNumber
              value={form.mobile}
              onChange={handleMobileChange}
              name='mobile'
              defaultCountry={'ua'}
              fullWidth margin='normal'
            />
          </Grid>
          <Grid item sm={12}>
            <TextField
              label='Work'
              value={form.work}
              onChange={handleEventChange}
              name='work'
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item sm={12}>
            <TextField
              label='Description'
              value={form.info}
              onChange={handleEventChange}
              name='info'
              fullWidth
              multiline
              rows={12}
            />
          </Grid>
          <Grid item xs={12}>
            <Stack direction='row' justifyContent='space-between'>
              <Button label='cancel' color='error'>Cancel</Button>
              <Button label='create' color='success' type='submit'>Create</Button>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}