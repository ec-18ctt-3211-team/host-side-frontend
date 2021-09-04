import { Layout, Pagination, DivPx, Loading } from 'components/common';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { SITE_PAGES } from 'constants/pages.const';
import { IOrder, OrderStatusLabels } from 'interfaces/order.interface';
import * as fetcher from 'utils/fetcher.utils';
import { ENDPOINT_URL } from 'constants/api.const';

const items_per_pages = 8;

export default function ListOfRequest(): JSX.Element {
  const history = useHistory();
  const [orders, setOrders] = useState<IOrder[]>();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [maxPage, setMaxPage] = useState<number>(1);
  const [loading, setLoading] = useState(false);

  async function fetchOrders() {
    const host_id = localStorage.getItem('userID');
    if (host_id === null) {
      history.push('/');
      return;
    }
    try {
      setLoading(true);
      const response = await fetcher.GET(
        ENDPOINT_URL.GET.getAllOrders(
          host_id,
          items_per_pages,
          currentPage + 1,
        ),
      );
      if (response.data.valid) {
        setOrders(response.data.orders);
        setMaxPage(
          Math.max(Math.ceil(response.data.total / items_per_pages), 1),
        );
      }
    } catch (error) {
      alert('Unexpected error, please try again!');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  async function updateOrder(status: string, orderID: string, index: number) {
    if (!orders) return;
    try {
      setLoading(true);
      const response = await fetcher.PUT(
        ENDPOINT_URL.PUT.updateOrderStatus + `/${orderID}`,
        { status },
      );
      if (response.data.valid) {
        const newOrders = orders.slice();
        newOrders[index] = response.data.updatedOrder;
        setOrders(newOrders.slice());
      }
    } catch (error) {
      alert('Unexpected error, please try again!');
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
          return (
            <tr
              key={item._id}
              className={[
                'text-sm',
                (index > 0 && index % items_per_pages === 0) ||
                index === orders.length - 1
                  ? ''
                  : 'border-b-2 border-brown-500',
              ].join(' ')}
            >
              <td className="border-r-2 border-brown-500 py-4">
                <Link to={SITE_PAGES.VIEW_AN_ORDER.path + `/${item._id}`}>
                  <div className="italic hover:text-brown-400 hover:underline">
                    {item._id}
                  </div>
                </Link>
              </td>
              <td className="border-r-2 border-brown-500 py-4">
                {item.customer_name}
              </td>
              <td className="border-r-2 border-brown-500 py-4">
                <Link to={SITE_PAGES.MANAGE_ROOMS.path + `/${item.room_id}`}>
                  <div className="italic hover:text-brown-400 hover:underline">
                    {item.room_id}
                  </div>
                </Link>
              </td>
              <td
                className={[
                  'py-4 select-none',
                  OrderStatusLabels[item.status].color,
                ].join(' ')}
              >
                <select
                  name="status"
                  id="status"
                  className="outline-none"
                  onChange={(e) => updateOrder(e.target.value, item._id, index)}
                  value={item.status}
                  disabled={item.status !== 'pending'}
                >
                  <option value="pending">Pending</option>
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
            <thead>
              <tr className="border-b-2 border-brown-500 uppercase bg-brown-100">
                <th className="border-r-2 border-brown-500 py-6">Order ID</th>
                <th className="border-r-2 border-brown-500 py-6">Customer</th>
                <th className="border-r-2 border-brown-500 py-6">Room ID</th>
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
