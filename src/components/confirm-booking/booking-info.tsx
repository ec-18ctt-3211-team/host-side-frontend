import DivPx from 'components/divpx';
import Input from 'components/input/input';

interface Props {
  totalAdults: number;
  totalKids?: number;
  fromDate: Date;
  toDate: Date;
}

export default function BookingInfo(props: Props): JSX.Element {
  return (
    <div className="font-medium uppercase">
      <div className="font-bold py-3 text-lg">booking information</div>
      <div className="p-4">number of guests</div>
      <div className="p-4 flex justify-between flex-wrap sm:flex-nowrap">
        <Input
          border="line"
          type="number"
          value={props.totalAdults}
          label={{ value: 'adults', position: 'right' }}
        />
        <Input
          border="line"
          type="number"
          value={props.totalKids || 0}
          label={{ value: 'kids', position: 'right' }}
        />
      </div>
      <DivPx size={28} />
      <div className="px-3 flex justify-between flex-wrap sm:flex-nowrap">
        <Input
          border="line"
          type="text"
          label={{ value: 'from', position: 'left' }}
        />
        <Input
          border="line"
          type="text"
          label={{ value: 'To', position: 'left' }}
        />
      </div>
    </div>
  );
}
