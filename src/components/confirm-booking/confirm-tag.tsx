import { ICustomerInfo, IBookingInfo } from 'interfaces/booking.interface';
import { IRoomDetail } from 'interfaces/room.interface';
import { getDateString } from 'utils/datetime.util';

interface Props {
  customer: ICustomerInfo;
  bookingDetail: IBookingInfo;
  room: IRoomDetail;
}

export default function ConfirmTag(props: Props): JSX.Element {
  return (
    <div className="h-[500px] w-[400px] flex flex-col items-center justify-evenly p-8 rounded-xl shadow-lg">
      <div className="font-bold text-xl uppercase">{props.room.room_name}</div>
      <div className="lowercase italic">
        {props.room.room_type} - {props.room.total_bedrooms} bedrooms
      </div>
      <div className="flex justify-evenly w-full">
        <strong>Customer: </strong> {props.customer.customer_name}
      </div>
      <div className="flex justify-between w-full">
        <div>
          <strong>From:</strong> {getDateString(props.bookingDetail.fromDate)}
        </div>
        <div>
          <strong>To:</strong> {getDateString(props.bookingDetail.toDate)}
        </div>
      </div>
      <div className="flex justify-evenly w-3/5">
        <strong>Guests:</strong>
        <div>
          <div>{props.bookingDetail.totalAdults} Adulst</div>
          <div>{props.bookingDetail.totalKids} Kids</div>
        </div>
      </div>
      <div className="flex justify-evenly w-3/5">
        <strong>Total:</strong> <div>${100}</div>
      </div>
      <div className="flex justify-evenly w-full">
        <strong>Payment method:</strong>
        <div className="uppercase">{props.customer.payment_method}</div>
      </div>
      <button className="w-2/5 bg-brown-500 p-3 rounded-lg text-white">
        Confirm
      </button>
    </div>
  );
}
