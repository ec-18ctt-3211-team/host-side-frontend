import { useEffect, useState } from 'react';
import { Layout, Loading, Pagination } from 'components/common';
import { RoomCard } from 'components/section/manage-rooms';
import * as fetcher from 'utils/fetcher.utils';
import { ENDPOINT_URL } from 'constants/api.const';
import { IRoomDetail } from 'interfaces/room.interface';
import { useHistory } from 'react-router';
import { SITE_PAGES } from 'constants/pages.const';

const LIMIT = 10;

export default function ListOfRooms(): JSX.Element {
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState(0);
  const [rooms, setRooms] = useState<IRoomDetail[]>();
  const [maxPages, setMaxPages] = useState<number>(1);

  async function fetchRooms() {
    try {
      const host_id = localStorage.getItem('userID');
      if (host_id === null) {
        history.push('/');
        return;
      }
      const response = await fetcher.GET(
        ENDPOINT_URL.GET.getAllRooms(host_id, LIMIT, currentPage + 1) +
          `?limit=${LIMIT}&page=${currentPage + 1}`,
      );
      setRooms(response.data.rooms);
      setMaxPages(Math.max(Math.ceil(response.data.total / LIMIT), 1));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchRooms();
  }, [currentPage]);

  return (
    <Layout>
      {rooms ? (
        <div className="h-full w-full p-4 bg-white flex flex-col justify-center items-center rounded-lg">
          <div className="flex w-full justify-end h-12 p-1">
            <button
              className={[
                'bg-brown-50 text-brown-600 font-semibold text-sm p-2 outline-none rounded-md',
                'hover:shadow hover:bg-brown-600 hover:text-white',
              ].join(' ')}
              onClick={() =>
                history.push(SITE_PAGES.VIEW_A_ROOM.path + '/create')
              }
            >
              Create Room
            </button>
          </div>
          <div className="flex flex-wrap w-full">
            {rooms.map((room, index) => (
              <RoomCard detail={room} key={index} />
            ))}
          </div>
          <div className="mt-auto">
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              maxPage={maxPages}
            />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </Layout>
  );
}
