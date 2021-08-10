import { Layout } from 'components/common';
import { getDateString } from 'utils/datetime.utils';

const ORDER = {
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

export default function ViewAnOrder(): JSX.Element {
  return (
    <Layout>
      <div className="h-full w-full p-8 bg-white flex rounded-lg">
        <div className="w-1/2 px-12">
          <div className="uppercase font-bold text-xl">
            customer information
          </div>
          <div className="uppercase font-bold text-base p-4">
            customer name:
          </div>
          <div className="px-8 border-b uppercase text-center">
            {ORDER.customerInfo.customer_name}
          </div>
          <div className="uppercase font-bold text-base p-4">phone number:</div>
          <div className="px-8 border-b text-center">
            {ORDER.customerInfo.phone_number}
          </div>
          <div className="uppercase font-bold text-base p-4">email:</div>
          <div className="px-8 border-b text-center">
            {ORDER.customerInfo.email}
          </div>
          <div className="uppercase font-bold text-base p-4">
            payment method:
          </div>
          <div className="px-8 border-b uppercase text-center">
            {ORDER.customerInfo.payment_method}
          </div>
        </div>
        <div className="w-1/2 px-12">
          <div className="uppercase font-bold text-xl">booking information</div>
          <div className="uppercase font-bold text-base px-4 pt-4 pb-2">
            number of guest:
          </div>
          <div className="flex p-4">
            <div className="px-8 border-b">{ORDER.bookingInfo.totalAdults}</div>
            <div className="px-4 uppercase">adult(s)</div>
            <div className="px-8 border-b">{ORDER.bookingInfo.totalKids}</div>
            <div className="px-4 uppercase">kid(s)</div>
          </div>
          <div className="flex p-4">
            <div className="pr-4 uppercase font-bold">from</div>
            <div className="px-4 border-b">
              {getDateString(ORDER.bookingInfo.fromDate)}
            </div>
            <div className="px-4 uppercase font-bold">to</div>
            <div className="px-4 border-b">
              {getDateString(ORDER.bookingInfo.toDate)}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
