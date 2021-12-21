import { useState, useEffect } from "react";
import { Button, Stack, CircularProgress } from "@mui/material";
import { fetchManyReports } from "api/report.api";
import { Link } from "react-router-dom";
import ReportListItem from "./components/ReportListItem";

export default function ReportList({ homePath }) {

  const [reports, setReports] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        // throw new Error()
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
      {error && <h1>Some error occured</h1>}
      {loading && (error === null) && <CircularProgress sx={{ margin: 'auto', display: 'block' }} />}
      {!loading && (error === null) && reports.map(report => {
        return <ReportListItem key={report._id} homePath={homePath} {...report} />
      })}
    </>
  )
}