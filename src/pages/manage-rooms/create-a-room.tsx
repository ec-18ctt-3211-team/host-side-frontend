import { Layout, Input, InputNumber, Loading, Button } from 'components/common';
import { Icon, Solid } from 'utils/icon.utils';
import { useState } from 'react';
import { POST } from 'utils/fetcher.utils';
import { ENDPOINT_URL } from 'constants/api.const';
import { IRoomDetail } from 'interfaces/room.interface';
import { UploadImage } from 'components/section/manage-rooms';
import { IImage } from 'interfaces/image.interface';
import { useHistory } from 'react-router';
import { SITE_PAGES } from 'constants/pages.const';
import { CITIES } from 'constants/cities.const';

const defaultRoom: IRoomDetail = {
  host_id: '',
  title: '',
  max_guest: 0,
  address: {
    number: '',
    street: '',
    ward: '',
    district: '',
    city: 'Ho Chi Minh',
  },
  description: '',
  normal_price: 0,
  weekend_price: 0,
};

export default function CreateARoom(): JSX.Element {
  const history = useHistory();
  const [roomDetails, setRoomDetails] = useState<IRoomDetail>(defaultRoom);
  const [loading, setLoading] = useState(false);

  async function createRoom() {
    const hostID = localStorage.getItem('userID');
    if (
      roomDetails.description === '' ||
      roomDetails.normal_price <= 0 ||
      roomDetails.weekend_price <= 0 ||
      roomDetails.max_guest <= 0 ||
      roomDetails.title === '' ||
      roomDetails.address.number === '' ||
      roomDetails.address.street === '' ||
      roomDetails.address.ward === '' ||
      roomDetails.address.district === '' ||
      roomDetails.address.city === '' ||
      !roomDetails.photos ||
      roomDetails.photos.length !== 4 ||
      !hostID
    ) {
      alert('All fields must be fill');
      return;
    }
    try {
      setLoading(true);
      const response = await POST(ENDPOINT_URL.POST.createRoom, {
        ...roomDetails,
        host_id: hostID,
        address: {
          ...roomDetails.address,
          city: roomDetails.address.city.replaceAll(' ', '_'),
        },
      });
      if (response.status === 204) history.push(SITE_PAGES.MANAGE_ROOMS.path);
    } catch (error) {
      alert('Unexpected error, please try again!');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout>
      {roomDetails && !loading ? (
        <div className="flex h-full w-full">
          <div className="h-full w-2/5 p-4 bg-white flex flex-col rounded-lg">
            <div className="my-4 mx-2">
              <Input
                border="line"
                type="text"
                icon={{ icon: <Icon icon={Solid.edit} />, position: 'right' }}
                value={roomDetails?.title}
                onChange={(e) =>
                  setRoomDetails({ ...roomDetails, title: e.target.value })
                }
              />
            </div>
            <div className="px-4 py-2">
              <InputNumber
                label="guest(s)"
                value={roomDetails.max_guest}
                setValue={(max_guest) =>
                  setRoomDetails({ ...roomDetails, max_guest })
                }
              />
            </div>
            <div className="px-4 py-2 flex items-center">
              <div className="w-2/3">Normal price:</div>
              <input
                type="number"
                className="outline-none border rounded w-1/3 p-1"
                onChange={(e) => {
                  setRoomDetails({
                    ...roomDetails,
                    normal_price: parseInt(e.target.value),
                  });
                }}
              />
            </div>
            <div className="px-4 py-2 flex items-center">
              <div className="w-2/3">Weekend price:</div>
              <input
                type="number"
                className="outline-none border rounded w-1/3 p-1"
                onChange={(e) => {
                  setRoomDetails({
                    ...roomDetails,
                    weekend_price: parseInt(e.target.value),
                  });
                }}
              />
            </div>
            <div className="px-4 py-2">Address:</div>
            <div className="px-4 py-2 flex items-center">
              <div className="w-1/2">Number:</div>
              <input
                type="text"
                className="outline-none border rounded w-1/2 p-1"
                onChange={(e) => {
                  setRoomDetails({
                    ...roomDetails,
                    address: { ...roomDetails.address, number: e.target.value },
                  });
                }}
              />
            </div>
            <div className="px-4 py-2 flex items-center">
              <div className="w-1/2">Street:</div>
              <input
                type="text"
                className="outline-none border rounded w-1/2 p-1"
                onChange={(e) => {
                  setRoomDetails({
                    ...roomDetails,
                    address: { ...roomDetails.address, street: e.target.value },
                  });
                }}
              />
            </div>
            <div className="px-4 py-2 flex items-center">
              <div className="w-1/2">Ward:</div>
              <input
                type="text"
                className="outline-none border rounded w-1/2 p-1"
                onChange={(e) => {
                  setRoomDetails({
                    ...roomDetails,
                    address: { ...roomDetails.address, ward: e.target.value },
                  });
                }}
              />
            </div>
            <div className="px-4 py-2 flex items-center">
              <div className="w-1/2">District:</div>
              <input
                type="text"
                className="outline-none border rounded w-1/2 p-1"
                onChange={(e) => {
                  setRoomDetails({
                    ...roomDetails,
                    address: {
                      ...roomDetails.address,
                      district: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="px-4 py-2 flex items-center">
              <div className="w-1/2">City:</div>
              <select
                className="outline-none border rounded w-1/2 p-1"
                value={roomDetails.address.city}
                onChange={(e) =>
                  setRoomDetails({
                    ...roomDetails,
                    address: {
                      ...roomDetails.address,
                      city: e.target.value,
                    },
                  })
                }
              >
                {CITIES.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
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
            <div className="h-1/6 p-2 select-none">
              <Button onClick={() => createRoom()}>Create</Button>
            </div>
          </div>
          <div className="h-full w-full ml-4 p-4 bg-white flex rounded-lg flex-wrap">
            <div className="w-1/2 h-1/2 p-2">
              <UploadImage
                image={roomDetails.photos ? roomDetails.photos[0] : null}
                setImage={(image) => {
                  let newPhotos: IImage[] = [];
                  if (roomDetails.photos) {
                    newPhotos = roomDetails.photos.slice();
                    newPhotos[0] = image;
                  } else {
                    newPhotos.push(image);
                  }
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
                  let newPhotos: IImage[] = [];
                  if (roomDetails.photos) {
                    newPhotos = roomDetails.photos.slice();
                  }
                  if (roomDetails.photos && roomDetails.photos.length <= 1) {
                    newPhotos.push(image);
                  } else {
                    newPhotos[1] = image;
                  }
                  setRoomDetails({
                    ...roomDetails,
                    photos: newPhotos.slice(),
                  });
                }}
                disable={
                  roomDetails.photos ? roomDetails.photos.length < 1 : true
                }
              />
            </div>
            <div className="w-1/2 h-1/2 p-2">
              <UploadImage
                image={roomDetails.photos ? roomDetails.photos[2] : null}
                setImage={(image) => {
                  let newPhotos: IImage[] = [];
                  if (roomDetails.photos) {
                    newPhotos = roomDetails.photos.slice();
                  }
                  if (roomDetails.photos && roomDetails.photos.length <= 2) {
                    newPhotos.push(image);
                  } else {
                    newPhotos[2] = image;
                  }
                  setRoomDetails({
                    ...roomDetails,
                    photos: newPhotos.slice(),
                  });
                }}
                disable={
                  roomDetails.photos ? roomDetails.photos.length < 2 : true
                }
              />
            </div>
            <div className="w-1/2 h-1/2 p-2">
              <UploadImage
                image={roomDetails.photos ? roomDetails.photos[3] : null}
                setImage={(image) => {
                  let newPhotos: IImage[] = [];
                  if (roomDetails.photos) {
                    newPhotos = roomDetails.photos.slice();
                  }
                  if (roomDetails.photos && roomDetails.photos.length <= 3) {
                    newPhotos.push(image);
                  } else {
                    newPhotos[3] = image;
                  }
                  setRoomDetails({
                    ...roomDetails,
                    photos: newPhotos.slice(),
                  });
                }}
                disable={
                  roomDetails.photos ? roomDetails.photos.length < 3 : true
                }
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
