import FilterBar from 'components/filterbar';
import Layout from 'components/layout';

interface Props {
  isAuthorized: boolean;
  setAuthorized: (isAuthorized: boolean) => void;
}

export default function ListOfRooms(props: Props): JSX.Element {
  return (
    <Layout
      isAuthorized={props.isAuthorized}
      setAuthorized={props.setAuthorized}
    >
      <FilterBar location="Ho Chi Minh city" total_result={1234} />
    </Layout>
  );
}
