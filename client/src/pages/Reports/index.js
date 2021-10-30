import { Container } from "@mui/material";
import { Route, Switch, useRouteMatch } from "react-router";
import CreateReport from "./CreateReport";
import Report from "./Report";
import ReportList from "./ReportList";
import UpdateReport from "./UpdateReport";

export default function Reports() {

  const { path } = useRouteMatch()

  return (
    <Container>
      <Switch>
        <Route exact path={`${path}/create`} >
          <CreateReport homePath={path} />
        </Route>
        <Route exact path={`${path}/:id/edit`}>
          <UpdateReport homePath={path} />
        </Route>
        <Route exact path={`${path}/:id`}>
          <Report homePath={path} />
        </Route>
        <Route path='/'>
          <ReportList homePath={path} />
        </Route>
      </Switch>
    </Container>
  )
}