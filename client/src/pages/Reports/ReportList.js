import { useState, useEffect } from "react";
import { Button, Stack, CircularProgress } from "@mui/material";
import { fetchManyReports } from "api/report.api";
import { Link } from "react-router-dom";
import ReportItem from "./components/ReportItem";

export default function ReportList({ homePath }) {

  const [reports, setReports] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const data = await fetchManyReports()
        setReports(data)
      } catch (error) {
        console.error(error);
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <Stack direction='row' justifyContent='right' sx={{
        mt: 2,
        mb: 2
      }}>
        <Button variant='contained' label='create' component={Link} to={`${homePath}/create`}>Create Report</Button>
      </Stack>
      {loading && <CircularProgress sx={{ margin: 'auto', display: 'block' }} />}
      {!loading && reports.map(report => {
        return <ReportItem homePath={homePath} {...report} />
      })}
    </>
  )
}