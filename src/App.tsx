import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SITE_PAGES } from 'constants/pages.const';
import { Pages } from 'pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Pages.Blank />
        </Route>
        <Route path={SITE_PAGES.HOST_INFORMATION.path}>
          <Pages.HostInformation />
        </Route>
        <Route exact path={SITE_PAGES.MANAGE_ROOMS.path}>
          <Pages.ListOfRooms />
        </Route>
        <Route path={SITE_PAGES.VIEW_A_ROOM.path}>
          <Pages.ViewARoom />
        </Route>
        <Route exact path={SITE_PAGES.BOOKING_REQUEST.path}>
          <Pages.ListOfRequest />
        </Route>
        <Route path={SITE_PAGES.VIEW_AN_ORDER.path}>
          <Pages.ViewAnOrder />
        </Route>
        <Route path="*">
          <div>ERROR!!!</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
