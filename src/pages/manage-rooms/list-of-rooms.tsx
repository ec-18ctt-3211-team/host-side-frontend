import { useState } from 'react';
import { DivPx, Layout, Pagination } from 'components/common';
import { RoomCard } from 'components/section/manage-rooms';
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
    >
      <div className="h-full w-full bg-white flex flex-col justify-center items-center rounded-lg">
        <div className="flex flex-wrap w-full justify-center">
          {ROOMS_DATA.map((room, index) => {
            return (
              <RoomCard
                detail={{ ...room, path: SITE_PAGES.VIEW_A_ROOM.path }}
                key={index}
              />
            );
          })}
        </div>
        <div className="py-2">
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            maxPage={16}
          />
        </div>
      </div>
    </Layout>
  );
}
