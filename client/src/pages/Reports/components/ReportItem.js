import { Link, Paper, Typography } from "@mui/material";

export default function ReportItem({ homePath, name, surname, middlename, birthday, mobile, work, info, _id }) {

  return (
    <Paper
      elevation={2}
      sx={{
        border: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        mt: 2,
        mb: 2,
        p: 2
      }}>
      <Typography variant='h5' component={Link} underline='none' href={`${homePath}/${_id}`}>{name} {surname}</Typography>{work && <Typography component='span'> - {work}</Typography>}
      {info && <Typography sx={{
        display: '-webkit-box',
        overflow: 'hidden',
        WebkitLineClamp: '4',
        WebkitBoxOrient: 'vertical'
      }}>{info}</Typography>}
    </Paper>
  )
}