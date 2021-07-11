import { Layout, Button } from 'components/common';
import 'styles/success-booking.css';

interface Props {
  isAuthorized: boolean;
  setAuthorized: (isAuthorized: boolean) => void;
}

export default function SuccessBooking(props: Props): JSX.Element {
  return (
    <Layout isAuthorized={props.isAuthorized}
      setAuthorized={props.setAuthorized}
      allowSearch>
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className='text-success text-4xl font-bold py-4'>BOOKING SUCCESSFUL</h1>
        <p className='text-lg pb-8'>THANK YOU FOR USING OUR SERVICE</p>
        <div className="success-button">
          <Button children='BACK TO MAIN' className="py-1 text-xl font-bold w-full"></Button>
        </div>
      </div>
    </Layout>
  );
}