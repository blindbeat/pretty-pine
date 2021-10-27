import { Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export default function ReportList({ homePath }) {
  return (
    <Stack direction='row' justifyContent='right' sx={{
      mt: 2,
      mb: 2
    }}>
      <Button variant='contained' label='create' component={Link} to={`${homePath}/create`}>Create Report</Button>
    </Stack>
  )
}