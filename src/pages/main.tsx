import React, { useState } from 'react';
import Layout from 'components/layout/layout';

export default function Main(): JSX.Element {
  const [isAuthorize, setAuthorize] = useState(true);
  return (
    <Layout isAuthorize={isAuthorize}>
      <div></div>
    </Layout>
  );
}
