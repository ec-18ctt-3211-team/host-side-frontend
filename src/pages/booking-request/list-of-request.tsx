import { Layout, Pagination, DivPx, Loading } from 'components/common';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE_PAGES } from 'constants/pages.const';
import { IOrder, OrderStatusLabels } from 'interfaces/order.interface';
import * as fetcher from 'utils/fetcher.utils';
import { ENDPOINT_URL } from 'constants/api.const';

const items_per_pages = 8;

export default function ListOfRequest(): JSX.Element {
  const [orders, setOrders] = useState<IOrder[]>();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [maxPage, setMaxPage] = useState<number>(1);
  const [loading, setLoading] = useState(false);

  async function fetchOrders() {
    try {
      const host_id = localStorage.getItem('userID');
      if(host_id === null) return;
      
      const response = await fetcher.GET(ENDPOINT_URL.GET.getAllOrders(host_id));
      setOrders(response.data.orders);
      setMaxPage(Math.ceil(response.data.orders.length / items_per_pages));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  async function updateOrder(status: string, orderID: string, index: number) {
    if (!orders) return;
    setLoading(true);
    try {
      const response = await fetcher.PUT(
        ENDPOINT_URL.PUT.updateOrderStatus + `/${orderID}`,
        { status },
      );
      const newOrders = orders.slice();
      newOrders[index] = response.data.updatedOrder;
      setOrders(newOrders.slice());
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function renderTable() {
    if (!orders) return;
    return (
      <tbody className="text-center">
        {orders.map((item, index) => {
          if (
            index < currentPage * items_per_pages + 1 ||
            index > currentPage * items_per_pages + items_per_pages
          )
            return;
          return (
            <tr
              key={item._id}
              className={[
                'text-sm',
                (index > 0 && index % items_per_pages === 0) ||
                index === orders.length - 1
                  ? ''
                  : 'border-b',
              ].join(' ')}
            >
              <td className="border-r py-4 w-4/12">
                {/* <Link to={SITE_PAGES.BOOKING_REQUEST.path + `/${item._id}`}>
                  <div className="hover:text-brown-400 hover:font-bold">
                    {item._id}
                  </div>
                </Link> */}
                <div>{item._id}</div>
              </td>
              <td className="border-r py-4 w-2/12">{item.customer_name}</td>
              <td className="border-r py-4 w-4/12">
                <Link to={SITE_PAGES.MANAGE_ROOMS.path + `/${item.room_id}`}>
                  <div className="hover:text-brown-400 hover:font-bold">
                    {item.room_id}
                  </div>
                </Link>
              </td>
              <td
                className={[
                  'py-4 select-none w-2/12',
                  OrderStatusLabels[item.status].color,
                ].join(' ')}
              >
                <select
                  name="status"
                  id="status"
                  className="outline-none"
                  onChange={(e) => updateOrder(e.target.value, item._id, index)}
                  value={item.status}
                >
                  {item.status === 'pending' && (
                    <option value="pending">Pending</option>
                  )}
                  <option value="accepted">Accepted</option>
                  <option value="rejected">Rejected</option>
                </select>
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  }

  return (
    <Layout>
      {!loading && orders ? (
        <div className="h-full w-full p-4 bg-white flex flex-col items-center rounded-lg">
          <table className="table-auto w-full">
            <thead className="bg-brown-50">
              <tr className="border-b uppercase">
                <th className="border-r py-4">Order ID</th>
                <th className="border-r py-4">Customer</th>
                <th className="border-r py-4">Room ID</th>
                <th className="py-6">ACTION</th>
              </tr>
            </thead>
            {renderTable()}
          </table>
          <DivPx size={12} />
          <div className="mt-auto">
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              maxPage={maxPage}
            />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </Layout>
  );
}
