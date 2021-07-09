import { useState } from 'react';
import Layout from 'components/layout';
import BookingTable from 'components/user-profile/booking-table';
import UserInfo from 'components/user-profile/user-info';
import DivPx from 'components/divpx';

interface Props {
  isAuthorized: boolean;
  setAuthorized: (isAuthorized: boolean) => void;
}

export default function UserProfile(props: Props): JSX.Element {
  const [userInfo, setUserInfo] = useState({
    userID: '1234567',
    username: 'nhily',
    phone_number: '0123456789',
    email: 'nhily@gmail.com',
  });
  return (
    <Layout
      isAuthorized={props.isAuthorized}
      setAuthorized={props.setAuthorized}
    >
      <div className="-m-8 p-8 bg-gray-200 w-screen h-screen flex justify-between">
        <UserInfo userProfile={userInfo} />
        <DivPx size={48} />
        <BookingTable
          booking_history={[
            { orderID: '#1', roomID: '123', order_status: 'Waiting' },
            { orderID: '#1', roomID: '123', order_status: 'Waiting' },
            { orderID: '#1', roomID: '123', order_status: 'Waiting' },
            { orderID: '#1', roomID: '123', order_status: 'Waiting' },
            { orderID: '#1', roomID: '123', order_status: 'Waiting' },
            { orderID: '#1', roomID: '123', order_status: 'Waiting' },
          ]}
        />
      </div>
    </Layout>
  );
}
