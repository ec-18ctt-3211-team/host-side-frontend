import { SITE_PAGES } from 'constants/pages.const';
import { useEffect, useState } from 'react';
import { getDateString } from 'utils/datetime.utils';
import { Link } from 'react-router-dom';
import { Button, Input, InputGuests } from 'components/common';

interface Props {
  price: number;
}

export default function Dialogue(props: Props): JSX.Element {
  const [total, setTotal] = useState(props.price);
  const [dayStart, setStart] = useState(new Date());
  const [dayEnd, setEnd] = useState(new Date());
  const [totalAdults, setTotalAdults] = useState<number>(1);
  const [totalKids, setTotalKids] = useState<number>(0);

  useEffect(() => {
    const start = dayStart.getTime();
    const end = dayEnd.getTime();
    console.log('date', start + ' ' + end);
  }, [dayStart, dayEnd]);

  return (
    <div className="border rounded-md w-full h-[350px] flex flex-col justify-between items-center px-8 py-10">
      <div className="w-full">${props.price} / night</div>
      <div className="flex h-1/5 w-full justify-between items-center">
        <div>from:</div>
        <div className="w-1/3 h-full">
          <Input
            border="full"
            type="text"
            placeholder={getDateString(dayStart)}
          />
        </div>
        <div>to:</div>
        <div className="w-1/3 h-full">
          <Input
            border="full"
            type="text"
            placeholder={getDateString(dayEnd)}
          />
        </div>
      </div>
      <div className="flex h-1/5 w-full items-center">
        <div className="pr-3">guests:</div>
        <InputGuests
          totalAdults={totalAdults}
          setTotalAdults={setTotalAdults}
          totalKids={totalKids}
          setTotalKids={setTotalKids}
        />
      </div>
      <Link to={SITE_PAGES.CONFIRM_BOOKING.path} className="w-2/3 h-1/5">
        <Button>Book now</Button>
      </Link>
    </div>
  );
}
