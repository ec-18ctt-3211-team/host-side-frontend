import React, { useState } from 'react';
import Main from 'pages/main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListOfRooms from 'pages/list-of-rooms';
import { SITE_PAGES } from 'constants/pages.const';
import Viewaplace from 'pages/view-a-place';

function App() {
  const [isAuthorized, setAuthorized] = useState(true);
  return (
    <Router>
      <Switch>
        <Route exact path={SITE_PAGES.MAIN.path}>
          <Main isAuthorized={isAuthorized} setAuthorized={setAuthorized} />
        </Route>
        <Route path={SITE_PAGES.LIST_OF_ROOMS.path}>
          <ListOfRooms
            isAuthorized={isAuthorized}
            setAuthorized={setAuthorized}
          />
        </Route>
        <Route path={SITE_PAGES.VIEW_A_PLACE.path}>
          <Viewaplace />
        </Route>
        <Route path="*">
          <div>ERROR!!!</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
