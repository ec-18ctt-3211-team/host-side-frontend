import { Layout, SelectOption, Pagination, DivPx } from 'components/common';
import { useState } from 'react';
import { IOrderInfo } from 'interfaces/booking.interface';
import { Link } from 'react-router-dom';
import { SITE_PAGES } from 'constants/pages.const';

interface Props {
  isAuthorized: boolean;
  setAuthorized: (isAuthorized: boolean) => void;
}

const items_per_pages = 7;

const ORDER: IOrderInfo = {
  orderID: '',
  customerInfo: {
    customerID: '1234567',
    customer_name: 'ly ngoc nhi',
    phone_number: '0123456789',
    email: 'nhily123@gmail.com',
    payment_method: 'paypal',
  },
  bookingInfo: {
    totalAdults: 1,
    totalKids: 0,
    fromDate: new Date(),
    toDate: new Date(),
  },
  roomID: '11111',
  action: 'waiting',
};

const renderOrders = () => {
  const orders = [];
  for (let i = 0; i < items_per_pages; i++) {
    orders.push({ ...ORDER, orderID: i.toString() });
  }
  return orders;
};

export default function ListOfRequest(props: Props): JSX.Element {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [maxPage, setMaxPage] = useState<number>(10);
  const [render, setRender] = useState(renderTable());

  function renderTable() {
    const orders = renderOrders();
    return (
      <tbody className="text-center">
        {orders.map((item, index) => {
          if (index > items_per_pages - 1) return;
          const [action, setAction] = useState(item.action);
          const [show, setShow] = useState(false);
          return (
            <tr
              key={item.orderID}
              className={
                (index > 0 && index % (items_per_pages - 1) === 0) ||
                index === orders.length - 1
                  ? ''
                  : 'border-b'
              }
            >
              <td className="border-r py-4">
                <Link to={SITE_PAGES.BOOKING_REQUEST.path + `/${item.orderID}`}>
                  {item.orderID}
                </Link>
              </td>
              <td className="border-r py-4">
                {item.customerInfo.customer_name}
              </td>
              <td className="border-r py-4">
                <Link to={SITE_PAGES.MANAGE_ROOMS.path + `/${item.roomID}`}>
                  {item.roomID}
                </Link>
              </td>
              <td className="py-4 select-none">{action}</td>
            </tr>
          );
        })}
      </tbody>
    );
  }

  return (
    <Layout
      isAuthorized={props.isAuthorized}
      setAuthorized={props.setAuthorized}
    >
      <div className="h-full w-full p-4 bg-white flex flex-col justify-center items-center rounded-lg">
        <table className="table-auto w-full">
          <thead>
            <tr className="border-b uppercase">
              <th className="border-r py-6">ID</th>
              <th className="border-r py-6">Customer Information</th>
              <th className="border-r py-6">Room ID</th>
              <th className="py-6">ACTION</th>
            </tr>
          </thead>
          {render}
        </table>
        <DivPx size={12} />
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          maxPage={maxPage}
        />
      </div>
    </Layout>
  );
}
