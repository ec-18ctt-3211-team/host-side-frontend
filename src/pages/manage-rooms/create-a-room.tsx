import { Layout, Input, InputNumber, Loading, Button } from 'components/common';
import { Icon, editSolid } from 'utils/icon.utils';
import { useState } from 'react';
import { GET } from 'utils/fetcher.utils';
import { ENDPOINT_URL } from 'constants/api.const';
import { IRoomDetail } from 'interfaces/room.interface';
import { UploadImage } from 'components/section/manage-rooms';

const defaultRoom: IRoomDetail = {
  _id: '',
  host_id: localStorage.getItem('userID') ?? '',
  title: '',
  thumnail: '',
  max_guest: 0,
  address: { number: '', street: '', ward: '', district: '', city: '' },
  description: '',
  normal_price: 0,
  weekend_price: 0,
  created_at: '',
  deleted_at: null,
};

export default function CreateARoom(): JSX.Element {
  const [roomDetails, setRoomDetails] = useState<IRoomDetail>(defaultRoom);

  async function createRoom() {
    const payload = new FormData();
    payload.append('img_0', '');
  }

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
            <div className="h-1/6 p-2">
              <Button onClick={() => createRoom()}>Create</Button>
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
