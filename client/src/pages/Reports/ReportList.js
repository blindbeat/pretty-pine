import { useState, useEffect } from "react";
import { Button, Stack } from "@mui/material";
import { fetchReports } from "api/report.api";
import { Link } from "react-router-dom";
import ReportItem from "./components/ReportItem";

export default function ReportList({ homePath }) {

  const [reports, setReports] = useState([])

  useEffect(() => {
    async function fetchData() {
      const data = await fetchReports()
      setReports(data)
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
      {reports.map(report => {
        return <ReportItem homePath={homePath} {...report} />
      })}
    </>
  )
}