import {
  ImageSlider,
  Layout,
  Input,
  SelectOption,
  InputNumber,
  DivPx,
  Loading,
} from 'components/common';
import { ROOMS } from 'constants/images.const';
import { Icon, edit1Solid } from 'utils/icon.utils';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GET } from 'utils/fetcher.utils';
import { ENDPOINT_URL } from 'constants/api.const';
import { IRoomDetail } from 'interfaces/room.interface';

export default function ViewARoom(): JSX.Element {
  const location = useLocation();
  const [roomDetails, setRoomDetails] = useState<IRoomDetail>();

  async function fetchRoom() {
    const path = location.pathname.split('/');
    const roomID = path[path.length - 1];
    const response = await GET(ENDPOINT_URL.GET.getRoomsByID(roomID));
    setRoomDetails(response.data.room);
  }

  useEffect(() => {
    fetchRoom();
  }, []);

  return (
    <Layout>
      {roomDetails ? (
        <div className="h-full w-full p-4 bg-white flex flex-col justify-center items-center rounded-lg">
          <ImageSlider limit={3} images={ROOMS} />
          <div className="w-1/3 py-6">
            <Input
              border="line"
              type="text"
              icon={{ icon: <Icon icon={edit1Solid} />, position: 'right' }}
              value={roomDetails?.title}
              onChange={(e) =>
                setRoomDetails({ ...roomDetails, title: e.target.value })
              }
            />
          </div>
          <div className="flex w-full justify-between">
            <div className="pl-10">
              <InputNumber
                label="bedroom(s)"
                value={roomDetails.max_guest}
                setValue={(max_guest) =>
                  setRoomDetails({ ...roomDetails, max_guest })
                }
              />
              <DivPx size={18} />
              <InputNumber
                label="per night"
                value={roomDetails.normal_price}
                setValue={(normal_price) =>
                  setRoomDetails({ ...roomDetails, normal_price })
                }
              />
            </div>
            <div className="w-3/5">
              <textarea
                name="des"
                id="des"
                value={roomDetails.description}
                onChange={(e) =>
                  setRoomDetails({
                    ...roomDetails,
                    description: e.target.value,
                  })
                }
                className="h-full w-full outline-none border rounded p-2"
              />
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </Layout>
  );
}
