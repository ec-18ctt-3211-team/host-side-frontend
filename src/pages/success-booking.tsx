import { Layout } from 'components/common';
import 'styles/success-booking.css';
import { Button } from 'components/common';

interface Props {
  isAuthorized: boolean;
  setAuthorized: (isAuthorized: boolean) => void;
}

export default function SuccessBooking(props: Props): JSX.Element {
  return (
    <Layout isAuthorized={props.isAuthorized}
      setAuthorized={props.setAuthorized}
      allowSearch>
      <div className="w-full flex flex-col items-center justify-center success-screen">
        <h1>BOOKING SUCCESSFUL</h1>
        <p>THANK YOU FOR USING OUR SERVICE</p>
        <div className="success-button">
          <Button children='BACK TO MAIN' className="py-1 text-xl font-bold w-full"></Button>
        </div>
      </div>
    </Layout>
  );
}