import DivPx from 'components/divpx';
import Input from 'components/input/input';
import { ICustomerInfo } from 'interfaces/booking.interface';

interface Props {
  customer_name?: string;
  phone_number?: string;
  email?: string;
  payment_method?: string;
  customerInfo: ICustomerInfo;
  setCustomerInfo: (detail: ICustomerInfo) => void;
}

export default function CustomerInfo(props: Props): JSX.Element {
  return (
    <div className="font-medium uppercase">
      <div className="py-4 font-bold text-lg">Customer information</div>
      <div className="p-4 w-10/12">
        <Input
          border="line"
          type="text"
          value={props.customer_name}
          label={{ value: 'customer name', position: 'top' }}
          onChange={(e) =>
            props.setCustomerInfo({
              ...props.customerInfo,
              customer_name: e.target.value,
            })
          }
        />
        <DivPx size={28} />
        <div className="w-3/4">
          <Input
            border="line"
            type="text"
            value={props.phone_number}
            label={{ value: 'phone number', position: 'top' }}
            onChange={(e) =>
              props.setCustomerInfo({
                ...props.customerInfo,
                phone_number: e.target.value,
              })
            }
          />
        </div>
        <DivPx size={28} />
        <Input
          border="line"
          type="text"
          value={props.email}
          label={{ value: 'email', position: 'top' }}
          onChange={(e) =>
            props.setCustomerInfo({
              ...props.customerInfo,
              email: e.target.value,
            })
          }
        />
        <DivPx size={28} />
        <Input
          border="line"
          type="text"
          value={props.payment_method}
          label={{ value: 'payment method', position: 'top' }}
          onChange={(e) =>
            props.setCustomerInfo({
              ...props.customerInfo,
              payment_method: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
}
