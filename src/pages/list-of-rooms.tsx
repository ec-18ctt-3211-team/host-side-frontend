import FilterBar from 'components/list_of_rooms/filterbar';
import Layout from 'components/layout';
import { RoomCard } from 'components/list_of_rooms/room-card';
import { Pagination } from 'components/pagination';
import { useState } from 'react';
import { ROOMS_DATA } from 'constants/rooms-data.const';
import { SITE_PAGES } from 'constants/pages.const';

interface Props {
  isAuthorized: boolean;
  setAuthorized: (isAuthorized: boolean) => void;
}

export default function ListOfRooms(props: Props): JSX.Element {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <Layout
      isAuthorized={props.isAuthorized}
      setAuthorized={props.setAuthorized}
      allowSearch
    >
      <FilterBar location="Ho Chi Minh city" total_result={1234} />
      <div className="flex flex-wrap w-full px-6">
        {ROOMS_DATA.map((room, index) => {
          return (
            <RoomCard
              detail={{ ...room, path: SITE_PAGES.VIEW_A_PLACE.path }}
              key={index}
            />
          );
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
