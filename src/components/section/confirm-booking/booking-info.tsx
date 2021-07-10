import { useState } from 'react';
import { DivPx, Input, InputGuests } from 'components/common';
import { getDateString, formatDateString } from 'utils/datetime.utils';
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
  const [totalAdults, setTotalAdults] = useState<number>(1);
  const [totalKids, setTotalKids] = useState<number>(0);
  return (
    <div className="font-medium uppercase">
      <div className="font-bold py-3 text-lg">booking information</div>
      <div className="p-4">number of guests:</div>
      <InputGuests
        totalAdults={totalAdults}
        setTotalAdults={setTotalAdults}
        totalKids={totalKids}
        setTotalKids={setTotalKids}
      />
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
