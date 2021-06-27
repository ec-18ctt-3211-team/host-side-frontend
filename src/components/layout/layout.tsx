import React from 'react';
import Navbar from 'components/navbar/navbar';

type Props = {
  isAuthorize: boolean;
  children: React.ReactNode;
};

export default function Layout(props: Props): JSX.Element {
  return (
    <div>
      <Navbar isAuthorize={props.isAuthorize} />
      <div className="p-8">{props.children}</div>
    </div>
  );
}
