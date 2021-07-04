import FilterBar from 'components/list_of_rooms/filterbar';
import Layout from 'components/layout';
import { RoomCard } from 'components/list_of_rooms/room-card';
import { RoomDetail } from 'interfaces/room-card.interface';
import { Pagination } from 'components/list_of_rooms/pagination';
import { useState } from 'react';
import { SITE_PAGES } from 'constants/pages.const';

interface Props {
  isAuthorized: boolean;
  setAuthorized: (isAuthorized: boolean) => void;
}

const data: RoomDetail[] = [
  {
    room_name: 'LUXURY HOMESTAY',
    room_type: 'Homestay',
    total_bedrooms: '2',
    price: 100,
    src: '/images/homestays/homestay1.jpg',
  },
  {
    room_name: 'LUXURY HOMESTAY',
    room_type: 'Homestay',
    total_bedrooms: '2',
    price: 100,
    src: '/images/homestays/homestay1.jpg',
  },
  {
    room_name: 'LUXURY HOMESTAY',
    room_type: 'Homestay',
    total_bedrooms: '2',
    price: 100,
    src: '/images/homestays/homestay1.jpg',
  },
  {
    room_name: 'LUXURY HOMESTAY',
    room_type: 'Homestay',
    total_bedrooms: '2',
    price: 100,
    src: '/images/homestays/homestay1.jpg',
  },
  {
    room_name: 'LUXURY HOMESTAY',
    room_type: 'Homestay',
    total_bedrooms: '2',
    price: 100,
    src: '/images/homestays/homestay1.jpg',
  },
  {
    room_name: 'LUXURY HOMESTAY',
    room_type: 'Homestay',
    total_bedrooms: '2',
    price: 100,
    src: '/images/homestays/homestay1.jpg',
  },
  {
    room_name: 'LUXURY HOMESTAY',
    room_type: 'Homestay',
    total_bedrooms: '2',
    price: 100,
    src: '/images/homestays/homestay1.jpg',
  },
  {
    room_name: 'LUXURY HOMESTAY',
    room_type: 'Homestay',
    total_bedrooms: '2',
    price: 100,
    src: '/images/homestays/homestay1.jpg',
  },
  {
    room_name: 'LUXURY HOMESTAY',
    room_type: 'Homestay',
    total_bedrooms: '2',
    price: 100,
    src: '/images/homestays/homestay1.jpg',
  },
  {
    room_name: 'LUXURY HOMESTAY',
    room_type: 'Homestay',
    total_bedrooms: '2',
    price: 100,
    src: '/images/homestays/homestay1.jpg',
  },
  {
    room_name: 'LUXURY HOMESTAY',
    room_type: 'Homestay',
    total_bedrooms: '2',
    price: 100,
    src: '/images/homestays/homestay1.jpg',
  },
  {
    room_name: 'LUXURY HOMESTAY',
    room_type: 'Homestay',
    total_bedrooms: '2',
    price: 100,
    src: '/images/homestays/homestay1.jpg',
  },
  {
    room_name: 'LUXURY HOMESTAY',
    room_type: 'Homestay',
    total_bedrooms: '2',
    price: 100,
    src: '/images/homestays/homestay1.jpg',
  },
  {
    room_name: 'LUXURY HOMESTAY',
    room_type: 'Homestay',
    total_bedrooms: '2',
    price: 100,
    src: '/images/homestays/homestay1.jpg',
  },
  {
    room_name: 'LUXURY HOMESTAY',
    room_type: 'Homestay',
    total_bedrooms: '2',
    price: 100,
    src: '/images/homestays/homestay1.jpg',
  },
  {
    room_name: 'LUXURY HOMESTAY',
    room_type: 'Homestay',
    total_bedrooms: '2',
    price: 100,
    src: '/images/homestays/homestay1.jpg',
  },
  {
    room_name: 'LUXURY HOMESTAY',
    room_type: 'Homestay',
    total_bedrooms: '2',
    price: 100,
    src: '/images/homestays/homestay1.jpg',
  },
  {
    room_name: 'LUXURY HOMESTAY',
    room_type: 'Homestay',
    total_bedrooms: '2',
    price: 100,
    src: '/images/homestays/homestay1.jpg',
  },
  {
    room_name: 'LUXURY HOMESTAY',
    room_type: 'Homestay',
    total_bedrooms: '2',
    price: 100,
    src: '/images/homestays/homestay1.jpg',
  },
  {
    room_name: 'LUXURY HOMESTAY',
    room_type: 'Homestay',
    total_bedrooms: '2',
    price: 100,
    src: '/images/homestays/homestay1.jpg',
  },
];

export default function ListOfRooms(props: Props): JSX.Element {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <Layout
      isAuthorized={props.isAuthorized}
      setAuthorized={props.setAuthorized}
    >
      <FilterBar location="Ho Chi Minh city" total_result={1234} />
      <div className="flex flex-wrap w-full justify-evenly">
        {data.map((room, index) => {
          return <RoomCard detail={room} key={index} />;
        })}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        maxPage={16}
      />
    </Layout>
  );
}
