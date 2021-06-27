import React, { useState } from 'react';
import Layout from 'components/layout';

export default function Main(): JSX.Element {
  const [isAuthorized, setAuthorize] = useState(true);
  return (
    <Layout isAuthorized={isAuthorized}>
      <div></div>
    </Layout>
  );
}
