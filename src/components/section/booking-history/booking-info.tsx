import { DivPx } from 'components/common';
import { getDateString } from 'utils/datetime.utils';
import { IBookingInfo } from 'interfaces/booking.interface';

interface Props {
  bookingDetail: IBookingInfo;
}

export default function BookingInfo(props: Props): JSX.Element {
  return (
    <div className="font-medium uppercase">
      <div className="font-bold py-3 text-lg text-brown">
        booking information
      </div>
      <div className="p-4 flex flex-wrap justify-between">
        <div>number of guests: </div>
        <div>
          <div>{props.bookingDetail.totalAdults} Adults</div>
          <DivPx size={12} />
          <div>{props.bookingDetail.totalKids} Kids</div>
        </div>
      </div>
      <div className="p-4 flex justify-around flex-wrap">
        <div>from {getDateString(props.bookingDetail.fromDate)}</div>
        <div>to {getDateString(props.bookingDetail.toDate)}</div>
      </div>
    </div>
  );
}
