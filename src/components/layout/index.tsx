import React from 'react';
import Navbar from 'components/layout/navbar';
import Footer from 'components/layout/footer';

type Props = {
  isAuthorized: boolean;
  children: React.ReactNode;
};

export default function Layout(props: Props): JSX.Element {
  return (
    <div>
      <Navbar isAuthorized={props.isAuthorized} />
      <div className="p-8">{props.children}</div>
      <Footer />
    </div>
  );
}
