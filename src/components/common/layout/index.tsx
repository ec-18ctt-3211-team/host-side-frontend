import React from 'react';
import Navbar from 'components/common/layout/navbar';
import Footer from 'components/common/layout/footer';

type Props = {
  isAuthorized: boolean;
  setAuthorized: (isAuthorized: boolean) => void;
  children: React.ReactNode;
  allowSearch?: boolean;
};

export default function Layout(props: Props): JSX.Element {
  return (
    <div className="min-h-full flex flex-col">
      <Navbar
        isAuthorized={props.isAuthorized}
        setAuthorized={props.setAuthorized}
        allowSearch={props.allowSearch}
      />
      <div className="p-8">{props.children}</div>
      <Footer />
    </div>
  );
}
