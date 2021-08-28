import MePage from "./Me/me";
import { Switch, Route, useRouteMatch } from "react-router-dom";

export default function UserPageRouter() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/me`}>
        <MePage />
      </Route>
    </Switch>
  );
}
