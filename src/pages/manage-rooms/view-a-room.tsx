import { Layout, Input, InputNumber, Loading, Button } from 'components/common';
import { Icon, editSolid, binSolid } from 'utils/icon.utils';
import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { GET } from 'utils/fetcher.utils';
import { ENDPOINT_URL } from 'constants/api.const';
import { IRoomDetail } from 'interfaces/room.interface';
import { UploadImage } from 'components/section/manage-rooms';
import { SITE_PAGES } from 'constants/pages.const';

export default function ViewARoom(): JSX.Element {
  const location = useLocation();
  const history = useHistory();
  const [roomDetails, setRoomDetails] = useState<IRoomDetail>();

  async function fetchRoom() {
    const path = location.pathname.split('/');
    const roomID = path[path.length - 1];
    try {
      const response = await GET(ENDPOINT_URL.GET.getRoomByID(roomID));
      if (response.data.valid) {
        setRoomDetails(response.data.room);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function updateRoom() {
    const payload = new FormData();
    payload.append('img_0', '');
  }

  async function deleteRoom() {
    history.push(SITE_PAGES.MANAGE_ROOMS.path);
  }

  useEffect(() => {
    fetchRoom();
  }, []);

  return (
    <Layout>
      {roomDetails ? (
        <div className="flex h-full w-full">
          <div className="h-full w-2/5 p-4 bg-white flex flex-col rounded-lg">
            <div className="my-4 mx-2">
              <Input
                border="line"
                type="text"
                icon={{ icon: <Icon icon={editSolid} />, position: 'right' }}
                value={roomDetails?.title}
                onChange={(e) =>
                  setRoomDetails({ ...roomDetails, title: e.target.value })
                }
              />
            </div>
            <div className="px-4 py-2">
              <InputNumber
                label="bedroom(s)"
                value={roomDetails.max_guest}
                setValue={(max_guest) =>
                  setRoomDetails({ ...roomDetails, max_guest })
                }
              />
            </div>
            <div className="px-4 py-2">
              <InputNumber
                label="per night"
                value={roomDetails.normal_price}
                setValue={(normal_price) =>
                  setRoomDetails({ ...roomDetails, normal_price })
                }
              />
            </div>
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
              className="h-full w-full outline-none border rounded p-2 my-4"
            />
            <div className="h-1/6 flex">
              <div className="p-2 w-2/3">
                <Button onClick={() => updateRoom()}>Update</Button>
              </div>
              <div className="p-2 w-1/3">
                <Button onClick={() => deleteRoom()}>
                  <Icon icon={binSolid} />
                </Button>
              </div>
            </div>
          </div>
          <div className="h-full w-full ml-4 p-4 bg-white flex rounded-lg flex-wrap">
            <div className="w-1/2 h-1/2 p-2">
              <UploadImage
                image={roomDetails.photos ? roomDetails.photos[0] : null}
                setImage={(image) => {
                  if (!roomDetails.photos) return;
                  const newPhotos = roomDetails.photos.slice();
                  newPhotos[0] = image;
                  setRoomDetails({
                    ...roomDetails,
                    photos: newPhotos.slice(),
                  });
                }}
              />
            </div>
            <div className="w-1/2 h-1/2 p-2">
              <UploadImage
                image={roomDetails.photos ? roomDetails.photos[1] : null}
                setImage={(image) => {
                  if (!roomDetails.photos) return;
                  const newPhotos = roomDetails.photos.slice();
                  newPhotos[1] = image;
                  setRoomDetails({
                    ...roomDetails,
                    photos: newPhotos.slice(),
                  });
                }}
              />
            </div>
            <div className="w-1/2 h-1/2 p-2">
              <UploadImage
                image={roomDetails.photos ? roomDetails.photos[3] : null}
                setImage={(image) => {
                  if (!roomDetails.photos) return;
                  const newPhotos = roomDetails.photos.slice();
                  newPhotos[2] = image;
                  setRoomDetails({
                    ...roomDetails,
                    photos: newPhotos.slice(),
                  });
                }}
              />
            </div>
            <div className="w-1/2 h-1/2 p-2">
              <UploadImage
                image={roomDetails.photos ? roomDetails.photos[4] : null}
                setImage={(image) => {
                  if (!roomDetails.photos) return;
                  const newPhotos = roomDetails.photos.slice();
                  newPhotos[3] = image;
                  setRoomDetails({
                    ...roomDetails,
                    photos: newPhotos.slice(),
                  });
                }}
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
