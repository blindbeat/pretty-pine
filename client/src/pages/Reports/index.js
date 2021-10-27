import { Container } from "@mui/material";
import { Route, Switch, useRouteMatch } from "react-router";
import CreateReport from "./CreateReport";
import ReportList from "./ReportList";

export default function Reports() {

  const { path } = useRouteMatch()
  console.log(path);

  return (
    <Container>
      <Switch>
        <Route exact path={`${path}/create`} >
          <CreateReport homePath={path} />
        </Route>
        <Route path='/'>
          <ReportList homePath={path} />
        </Route>
      </Switch>
    </Container>
  )
}