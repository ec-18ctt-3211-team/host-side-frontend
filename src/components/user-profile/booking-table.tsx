import { useState } from 'react';
import { Pagination } from 'components/pagination';
import { IBookingTable } from 'interfaces/user.interface';

interface Props {
  booking_history: IBookingTable[];
}

export default function BookingTable(props: Props) {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [maxPage, setMaxPage] = useState<number>(10);
  return (
    <div className="bg-white rounded-xl shadow-lg w-full flex flex-col items-center p-6">
      <div className="uppercase font-bold text-brown text-xl">
        Booking history
      </div>
      <div className="flex border-b w-full justify-between uppercase">
        <div className="border-r">id</div>
        <div className="border-r">information</div>
        <div className="">status</div>
      </div>
      {props.booking_history.map((item) => {
        return (
          <div className="flex border-b w-full justify-between">
            <div className="border-r">{item.orderID}</div>
            <div className="border-r">{item.roomID}</div>
            <div className="">{item.order_status}</div>
          </div>
        );
      })}
      <div className="mt-auto">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          maxPage={maxPage}
        />
      </div>
    </div>
  );
}
