import { useState } from 'react';
import { Layout, Pagination } from 'components/common';
import { Filterbar, RoomCard } from 'components/section/list_of_rooms';
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
      <Filterbar location="Ho Chi Minh city" total_result={1234} />
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
