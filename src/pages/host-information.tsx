import { Layout } from 'components/common';

interface Props {
  isAuthorized: boolean;
  setAuthorized: (isAuthorized: boolean) => void;
}

export default function HostInfomation(props: Props): JSX.Element {
  return (
    <Layout
      isAuthorized={props.isAuthorized}
      setAuthorized={props.setAuthorized}
    >
      <div>Hello</div>
    </Layout>
  );
}
