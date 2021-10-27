import { useState } from 'react';
import { Container, Paper, TextField, Grid, Stack, Button } from '@mui/material'
import { LocalizationProvider, DatePicker } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDateFns'
import MuiPhoneNumber from 'material-ui-phone-number';
import createReport from 'api/report.api';

export default function Report() {
  const [form, setForm] = useState({
    name: '',
    surname: '',
    middlename: '',
    birthday: null,
    work: '',
    description: ''
  })

  function handleChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value })
  }

  function handleBirthdayChange(date) {
    setForm({ ...form, birthday: date })
  }

  function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(event.target)
    createReport(form)
  }

  return (
    <Container>
      <Paper sx={{ padding: '20px' }}>
        <Grid container component='form' onSubmit={handleSubmit} spacing={2}>
          <Grid item sm={12} md={4}>
            <TextField
              value={form.name}
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
            <MuiPhoneNumber defaultCountry={'ua'} fullWidth margin='normal' />
          </Grid>
          <Grid item sm={12}>
            <TextField
              label='Work'
              value={form.work}
              onChange={handleChange}
              name='work'
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item sm={12}>
            <TextField
              label='Description'
              value={form.description}
              onChange={handleChange}
              name='description'
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
    </Container>
  )
}