import { ButtonComponent } from 'components/input-text/InputText';
import { SITE_PAGES } from 'constants/pages.const';
import { useEffect, useState } from 'react';
import 'styles/view-a-place.css';
import { formatDateString, getDateString } from 'utils/datetime.util';
import { Link } from 'react-router-dom';

interface Props {
  price: number;
}

export default function BookDialogue(props: Props): JSX.Element {
  const [total, setTotal] = useState(props.price);
  const [dayStart, setStart] = useState(new Date());
  const [dayEnd, setEnd] = useState(new Date());

  useEffect(() => {
    const start = dayStart.getTime();
    const end = dayEnd.getTime();
    console.log('date', start + ' ' + end);
  }, [dayStart, dayEnd]);

  return (
    <div className="dialogue p-4">
      <div className="inner-dialogue">
        <span id="price">${total} / night</span>
        <div className="inline-mul-input">
          <label htmlFor="dayStart"> from </label>
          <input
            type="date"
            placeholder="from"
            className="input-text"
            id="dayStart"
            onChange={(e) => setStart(formatDateString(e.target.value))}
          />
          <label htmlFor="dayEnd"> to </label>
          <input
            type="date"
            placeholder="to"
            className="input-text"
            id="dayEnd"
            onChange={(e) => setEnd(formatDateString(e.target.value))}
          />
        </div>
        <input
          type="number"
          min={1}
          placeholder="1 guest"
          className="input-text"
        ></input>
        <Link to={SITE_PAGES.CONFIRM_BOOKING.path} className="center-btn">
          <ButtonComponent label="Book Now"></ButtonComponent>
        </Link>
      </div>
    </div>
  );
}
