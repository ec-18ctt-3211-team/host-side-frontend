import { useState } from 'react';
import Layout from 'components/common/layout';
import BookingTable from 'components/section/user-profile/booking-table';
import UserInfo from 'components/section/user-profile/user-info';
import DivPx from 'components/common/divpx';

interface Props {
  isAuthorized: boolean;
  setAuthorized: (isAuthorized: boolean) => void;
}

export const OrderStatus = {
  waiting: { label: 'Waiting', color: 'text-gray-400' },
  accepted: { label: 'Accepted', color: 'text-success' },
  done: { label: 'Done', color: 'text-brown-400' },
  denied: { label: 'Denied', color: 'text-error' },
};

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
            { orderID: '#1', roomID: '123', order_status: OrderStatus.waiting },
            { orderID: '#1', roomID: '123', order_status: OrderStatus.waiting },
            {
              orderID: '#1',
              roomID: '123',
              order_status: OrderStatus.accepted,
            },
            { orderID: '#1', roomID: '123', order_status: OrderStatus.denied },
            { orderID: '#1', roomID: '123', order_status: OrderStatus.done },
            { orderID: '#1', roomID: '123', order_status: OrderStatus.denied },
            {
              orderID: '#1',
              roomID: '123',
              order_status: OrderStatus.accepted,
            },
          ]}
        />
      </div>
    </Layout>
  );
}
