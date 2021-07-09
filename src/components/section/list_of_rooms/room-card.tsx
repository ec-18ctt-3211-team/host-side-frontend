import { IRoomDetail } from 'interfaces/room.interface';
import { Link } from 'react-router-dom';

interface Props {
  detail: IRoomDetail;
}

const RoomCard = (props: Props): JSX.Element => {
  return (
    <Link
      to={props.detail.path || '*'}
      className="w-52 h-60 mx-2 my-4 text-sm bg-gray-200 rounded-xl flex flex-col hover:shadow-lg relative"
    >
      <img
        src={props.detail.imageSrc[0].src}
        className={[
          'h-full w-full rounded-xl shadow bg-brown-200 object-cover',
          props.detail.path
            ? 'opacity-80 hover:shadow-2xl hover:opacity-100'
            : 'opacity-90',
        ].join(' ')}
      />
      <div className="w-full p-3 bg-white rounded-b-xl absolute bottom-0">
        <div className="font-bold py-1 text-center">
          {props.detail.room_name}
        </div>
        <div className="text-xs italic">
          {props.detail.room_type} - {props.detail.total_bedrooms} bedrooms
        </div>
        <div className="text-right py-1">${props.detail.price} per night</div>
      </div>
    </Link>
  );
};

export default RoomCard;
