import Layout from 'components/layout';
import BookingInfo from 'components/confirm-booking/booking-info';
import CustomerInfo from 'components/confirm-booking/customer-info';

interface Props {
  isAuthorized: boolean;
  setAuthorized: (isAuthorized: boolean) => void;
}

export default function ConfirmBooking(props: Props): JSX.Element {
  return (
    <Layout
      isAuthorized={props.isAuthorized}
      setAuthorized={props.setAuthorized}
    >
      <div className="flex w-full">
        {/* edit data */}
        <div className="w-1/3 flex flex-col">
          <BookingInfo
            totalAdults={2}
            fromDate={new Date('21/03/2021')}
            toDate={new Date('12/04/2021')}
          />
          <div className="mt-auto pt-12">
            <CustomerInfo customer_name="nhily" />
          </div>
        </div>

        {/* confirm data */}
      </div>
    </Layout>
  );
}
