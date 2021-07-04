import { SITE_PAGES } from 'constants/pages.const';
import { RoomDetail } from 'interfaces/room-card.interface';
import { Link } from 'react-router-dom';

interface Props {
  detail: RoomDetail;
}

export const RoomCard = (props: Props): JSX.Element => {
  return (
    <Link
      to={SITE_PAGES.VIEW_A_PLACE.path}
      className="h-60 w-52 mx-2 my-4 text-sm bg-gray-200 rounded-xl flex flex-col hover:shadow-lg relative"
    >
      <img
        src={props.detail.src}
        className={[
          'h-full w-full rounded-xl shadow bg-brown-200 object-cover',
          props.detail.href
            ? 'opacity-80 hover:shadow-2xl hover:opacity-100'
            : 'opacity-90',
        ].join(' ')}
      />
      <div className="w-full p-3 bg-white rounded-b-xl absolute bottom-0">
        <div className="font-bold py-1">{props.detail.room_name}</div>
        <div className="text-xs italic">
          {props.detail.room_type} - {props.detail.total_bedrooms} bedrooms
        </div>
        <div className="text-right py-1">${props.detail.price} per night</div>
      </div>
    </Link>
  );
};
