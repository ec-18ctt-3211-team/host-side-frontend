import { SITE_PAGES } from 'constants/pages.const';
import { IRoomDetail } from 'interfaces/room.interface';
import { Link } from 'react-router-dom';

interface Props {
  detail: IRoomDetail;
}

export default function RoomDetail(props: Props): JSX.Element {
  return (
    <div className="w-full px-8 py-2">
      <h1 className="font-bold text-center text-4xl py-2">
        {props.detail.room_name}
      </h1>
      <div className="flex justify-end underline py-2 select-none">
        <Link
          to={SITE_PAGES.ROOMS_OF_HOST.path}
          className="hover:text-brown-600 hover:italic"
        >
          by {props.detail.host}
        </Link>
      </div>
      <div className="py-2 italic">
        {props.detail.room_type} - {props.detail.total_bedrooms} bedrooms
      </div>
      <div className="py-2 font-semibold">${props.detail.price} per night</div>
      <div className="py-4">{props.detail.description}</div>
    </div>
  );
}
