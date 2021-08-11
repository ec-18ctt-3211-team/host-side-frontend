import { useEffect, useState } from 'react';
import { Layout, Loading, Pagination } from 'components/common';
import { RoomCard } from 'components/section/manage-rooms';
import * as fetcher from 'utils/fetcher.utils';
import { ENDPOINT_URL } from 'constants/api.const';
import { IRoomDetail } from 'interfaces/room.interface';
import { useLocation } from 'react-router-dom';

const LIMIT = 10;

export default function ListOfRooms(): JSX.Element {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(0);
  const [rooms, setRooms] = useState<IRoomDetail[]>();
  const [maxPages, setMaxPages] = useState<number>(1);

  async function fetchRooms(host_id: string) {
    try {
      const response = await fetcher.GET(
        ENDPOINT_URL.GET.getAllRooms(host_id) +
          `?limit=${LIMIT}&page=${currentPage + 1}`,
      );
      setRooms(response.data.rooms);
      setMaxPages(Math.ceil(response.data.total / LIMIT));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const host_id = localStorage.getItem('userID');
    if (host_id === null) {
      const path = location.pathname.split('/');
      localStorage.setItem('userID', path[1]);
      fetchRooms(path[1]);
    } else fetchRooms(host_id);
  }, [currentPage, localStorage]);

  return (
    <Layout>
      {rooms ? (
        <div className="h-full w-full p-4 bg-white flex flex-col justify-center items-center rounded-lg">
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
