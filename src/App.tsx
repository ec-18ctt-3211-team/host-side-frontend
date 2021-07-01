import React, { useState } from 'react';
import Main from 'pages/main';
import ListOfRooms from 'pages/list-of-rooms';

function App() {
  const [isAuthorized, setAuthorized] = useState(true);
  return (
    <React.Fragment>
      {/* <Main isAuthorized={isAuthorized} setAuthorized={setAuthorized} /> */}
      <ListOfRooms isAuthorized={isAuthorized} setAuthorized={setAuthorized} />
    </React.Fragment>
  );
}

export default App;
