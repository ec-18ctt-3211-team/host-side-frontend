import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SITE_PAGES } from 'constants/pages.const';
import { Pages } from 'pages';

function App() {
  const [isAuthorized, setAuthorized] = useState(true);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Pages.HostInformation
            isAuthorized={isAuthorized}
            setAuthorized={setAuthorized}
          />
        </Route>
        <Route path={SITE_PAGES.HOST_INFORMATION.path}>
          <Pages.HostInformation
            isAuthorized={isAuthorized}
            setAuthorized={setAuthorized}
          />
        </Route>
        <Route exact path={SITE_PAGES.MANAGE_ROOMS.path}>
          <Pages.ListOfRooms
            isAuthorized={isAuthorized}
            setAuthorized={setAuthorized}
          />
        </Route>
        <Route exact path={SITE_PAGES.VIEW_A_ROOM.path}>
          <Pages.ViewARoom
            isAuthorized={isAuthorized}
            setAuthorized={setAuthorized}
          />
        </Route>
        <Route path="*">
          <div>ERROR!!!</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
