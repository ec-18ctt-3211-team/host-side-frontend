import { ICustomerInfo } from 'interfaces/booking.interface';

interface Props {
  customerInfo: ICustomerInfo;
}

export default function CustomerInfo(props: Props): JSX.Element {
  return (
    <div className="font-medium uppercase">
      <div className="py-3 font-bold text-lg text-brown">
        Customer information
      </div>
      <div className="p-4 flex">
        <div className="pb-2 w-full">Customer name: </div>
        <div className="border-b-2 w-full text-right">
          {props.customerInfo.customer_name}
        </div>
      </div>
      <div className="p-4 flex">
        <div className="pb-2 w-full">Phone number: </div>
        <div className="border-b-2 w-full text-right">
          {props.customerInfo.phone_number}
        </div>
      </div>
      <div className="p-4 flex">
        <div className="pb-2 w-full">Email: </div>
        <div className="border-b-2 w-full text-right">
          {props.customerInfo.email}
        </div>
      </div>
      <div className="p-4 flex">
        <div className="pb-2 w-full">Payment Method: </div>
        <div className="border-b-2 w-full text-right">
          {props.customerInfo.payment_method}
        </div>
      </div>
    </div>
  );
}
