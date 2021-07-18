import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SITE_PAGES } from 'constants/pages.const';
import { Pages } from 'pages';

function App() {
  const [isAuthorized, setAuthorized] = useState(true);

  return (
    <Router>
      <Switch>
        <Route exact path={SITE_PAGES.HOST_INFORMATION.path}>
          <Pages.HostInformation
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
