import { useEffect, useState } from 'react';
import { Layout, Loading, Pagination } from 'components/common';
import { RoomCard } from 'components/section/manage-rooms';
import { SITE_PAGES } from 'constants/pages.const';
import * as fetcher from 'utils/fetcher.utils';
import { ENDPOINT_URL } from 'constants/api.const';
import { IRoomDetail } from 'interfaces/room.interface';
import { Link } from 'react-router-dom';

const LIMIT = 10;

export default function ListOfRooms(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(0);
  const [rooms, setRooms] = useState<IRoomDetail[]>();
  const [maxPages, setMaxPages] = useState<number>(1);

  async function fetchRooms() {
    try {
      const response = await fetcher.GET(
        ENDPOINT_URL.GET.getAllRooms +
          `?limit=${LIMIT}&page=${currentPage + 1}`,
      );
      setRooms(response.data.rooms);
      setMaxPages(Math.ceil(response.data.total / LIMIT));
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
