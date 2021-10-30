import { useState } from 'react';
import { Paper, TextField, Grid, Stack, Button } from '@mui/material'
import { LocalizationProvider, DatePicker } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDateFns'
import MuiPhoneNumber from 'material-ui-phone-number';

export default function ReportForm({ handleSubmit, initialForm, requestPending }) {

  const [form, setForm] = useState(initialForm)

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

  return (
    <Paper sx={{ p: 2 }}>
      <Grid container component='form' onSubmit={e => handleSubmit(e, form)} spacing={2}>
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
            <Button label='create' color='success' type='submit' disabled={requestPending}>Create</Button>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  )
}