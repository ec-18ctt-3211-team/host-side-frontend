import DivPx from 'components/common/divpx';
import Input from 'components/common/input/input';
import { getDateString, formatDateString } from 'utils/datetime.util';
import { IBookingInfo } from 'interfaces/booking.interface';

interface Props {
  totalAdults: number;
  totalKids?: number;
  fromDate: Date;
  toDate: Date;
  bookingDetail: IBookingInfo;
  setBookingDetail: (detail: IBookingInfo) => void;
}

export default function BookingInfo(props: Props): JSX.Element {
  return (
    <div className="font-medium uppercase">
      <div className="font-bold py-3 text-lg">booking information</div>
      <div className="p-4">number of guests</div>
      <div className="p-4 flex justify-between flex-wrap">
        <Input
          border="line"
          type="text"
          value={props.totalAdults}
          label={{ value: 'adults', position: 'right' }}
          onChange={(e) =>
            props.setBookingDetail({
              ...props.bookingDetail,
              totalAdults: parseInt(e.target.value),
            })
          }
        />
        <Input
          border="line"
          type="text"
          value={props.totalKids || 0}
          label={{ value: 'kids', position: 'right' }}
          onChange={(e) =>
            props.setBookingDetail({
              ...props.bookingDetail,
              totalKids: parseInt(e.target.value),
            })
          }
        />
      </div>
      <DivPx size={28} />
      <div className="px-3 flex justify-between flex-wrap">
        <Input
          border="line"
          type="text"
          value={getDateString(props.fromDate)}
          label={{ value: 'from', position: 'left' }}
          onChange={(e) =>
            props.setBookingDetail({
              ...props.bookingDetail,
              fromDate: formatDateString(e.target.value),
            })
          }
        />
        <Input
          border="line"
          type="text"
          value={getDateString(props.toDate)}
          label={{ value: 'To', position: 'left' }}
          onChange={(e) =>
            props.setBookingDetail({
              ...props.bookingDetail,
              toDate: formatDateString(e.target.value),
            })
          }
        />
      </div>
    </div>
  );
}
