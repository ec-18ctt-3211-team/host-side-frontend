import React, { useState } from 'react';
import Layout from 'components/common/layout';
import BookingInfo from 'components/section/confirm-booking/booking-info';
import CustomerInfo from 'components/section/confirm-booking/customer-info';
import ConfirmTag from 'components/section/confirm-booking/confirm-tag';
import { ROOMS_DATA } from 'constants/rooms-data.const';
import { ICustomerInfo, IBookingInfo } from 'interfaces/booking.interface';

interface Props {
  isAuthorized: boolean;
  setAuthorized: (isAuthorized: boolean) => void;
}

export default function ConfirmBooking(props: Props): JSX.Element {
  const [bookingDetail, setBookingDetail] = useState<IBookingInfo>({
    totalAdults: 0,
    totalKids: 0,
    fromDate: new Date(),
    toDate: new Date(),
  });
  const [customerInfo, setCustomerInfo] = useState<ICustomerInfo>({
    customer_name: 'nhily',
    phone_number: '0123456789',
    email: '123@gmail.com',
    payment_method: 'paypal',
  });

  return (
    <Layout
      isAuthorized={props.isAuthorized}
      setAuthorized={props.setAuthorized}
    >
      <div className="flex justify-between w-full">
        {/* edit data */}
        <div className="w-1/3 flex flex-col">
          <BookingInfo
            totalAdults={2}
            fromDate={new Date()}
            toDate={new Date()}
            bookingDetail={bookingDetail}
            setBookingDetail={setBookingDetail}
          />
          <div className="mt-auto pt-12">
            <CustomerInfo
              customer_name="nhily"
              customerInfo={customerInfo}
              setCustomerInfo={setCustomerInfo}
            />
          </div>
        </div>

        {/* confirm data */}
        <ConfirmTag
          bookingDetail={bookingDetail}
          customer={customerInfo}
          room={ROOMS_DATA[0]}
        />
      </div>
    </Layout>
  );
}
