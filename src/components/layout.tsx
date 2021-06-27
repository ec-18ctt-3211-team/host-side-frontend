import React from 'react';
import Navbar from 'components/navbar';

type Props = {
  isAuthorized: boolean;
  children: React.ReactNode;
};

export default function Layout(props: Props): JSX.Element {
  return (
    <div>
      <Navbar isAuthorized={props.isAuthorized} />
      <div className="p-8">{props.children}</div>
    </div>
  );
}
