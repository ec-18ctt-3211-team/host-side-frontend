import { RoomDetail } from 'interfaces/room-card.interface';

interface Props {
  detail: RoomDetail;
}

export const RoomCard = (props: Props): JSX.Element => {
  return (
    <div className="h-60 w-52 mx-2 my-4 text-sm bg-gray-200 rounded-xl flex flex-col hover:shadow-lg">
      <div className="mt-auto p-3 bg-white rounded-b-xl">
        <div className="font-bold py-1">{props.detail.room_name}</div>
        <div className="text-xs italic">
          {props.detail.room_type} - {props.detail.total_bedrooms} bedrooms
        </div>
        <div className="text-right py-1">${props.detail.price} per night</div>
      </div>
    </div>
  );
};
