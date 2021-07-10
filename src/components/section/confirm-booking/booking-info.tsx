import { useState, useEffect } from 'react';
import { DivPx, InputGuests } from 'components/common';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { IBookingInfo } from 'interfaces/booking.interface';

interface Props {
  bookingDetail: IBookingInfo;
  setBookingDetail: (detail: IBookingInfo) => void;
}

export default function BookingInfo(props: Props): JSX.Element {
  const [totalAdults, setTotalAdults] = useState<number>(
    props.bookingDetail.totalAdults,
  );
  const [totalKids, setTotalKids] = useState<number>(
    props.bookingDetail.totalKids,
  );
  const [dayStart, setStart] = useState<Date>(props.bookingDetail.fromDate);
  const [dayEnd, setEnd] = useState<Date>(props.bookingDetail.toDate);

  useEffect(() => {
    props.setBookingDetail({
      totalAdults: totalAdults,
      totalKids: totalKids,
      fromDate: dayStart,
      toDate: dayEnd,
    });
  }, [totalAdults, totalKids, dayStart, dayEnd]);

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
      <div className="flex h-1/5 w-full justify-between items-center">
        <div>from:</div>
        <div className="w-1/3">
          <DatePickerComponent
            placeholder="Enter start date"
            value={dayStart}
            format="dd/MM/yyyy"
            min={new Date()}
            onChange={(date: any) => setStart(date.value)}
          />
        </div>
        <div>to:</div>
        <div className="w-1/3">
          <DatePickerComponent
            placeholder="Enter end date"
            value={dayEnd}
            format="dd/MM/yyyy"
            min={dayStart}
            onChange={(date: any) => setEnd(date.value)}
          />
        </div>
      </div>
    </div>
  );
}
