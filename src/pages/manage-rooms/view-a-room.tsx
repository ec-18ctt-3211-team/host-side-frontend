import {
  ImageSlider,
  Layout,
  Input,
  SelectOption,
  InputNumber,
  DivPx,
  Loading,
  Button,
} from 'components/common';
import { Icon, edit1Solid, binSolid, editSolid } from 'utils/icon.utils';
import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { GET, PUT } from 'utils/fetcher.utils';
import { ENDPOINT_URL } from 'constants/api.const';
import { IRoomDetail } from 'interfaces/room.interface';
import { SITE_PAGES } from 'constants/pages.const';
import { IImage } from 'interfaces/image.interface';
import  UploadImage from 'components/section/manage-rooms/uploadImage';

const defaultPhoto : IImage[]= [{ _id: '', path: '' }];
const defaultRoom: IRoomDetail = {
  _id: '',
  host_id: localStorage.getItem('userID') ?? '',
  photos: defaultPhoto,
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

export default function ViewARoom(): JSX.Element {
  const location = useLocation();
  const history = useHistory();
  const [roomDetails, setRoomDetails] = useState<IRoomDetail>(defaultRoom);
  const [loading, setLoading] = useState(false);

  function checkData() {
    if (
      !roomDetails ||
      !roomDetails.photos ||
      roomDetails.host_id === '' ||
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
      roomDetails.photos.length != 4
    ) {
      return false;
    }
    return true;
  }

  async function fetchRoom() {
    const path = location.pathname.split('/');
    const roomID = path[path.length - 1];
    try {
      setLoading(true);
      const response = await GET(ENDPOINT_URL.GET.getRoomByID(roomID));
      if (response.data.valid) {
        setRoomDetails(response.data.room);
      }
    } catch (error) {
      console.log(error.response);
    }
    finally{
      setLoading(false);
    }
  }

  async function updateRoom() {
    if (!checkData || !roomDetails) {
      window.alert('Please fulfill all fields to continue.');
      return;
    }
    try {
      setLoading(true);
      const payload = {
        photos: roomDetails.photos,
        host_id: roomDetails.host_id,
        description: roomDetails.description,
        normal_price: roomDetails.normal_price,
        weekend_price: roomDetails.weekend_price,
        max_guest: roomDetails.max_guest,
        title: roomDetails.title,
        address: roomDetails.address,
      };
      console.log('Payload');
      console.log(payload);

      const response = await PUT(ENDPOINT_URL.PUT.updateRoom(roomDetails._id), payload);
      console.log(response);
      if( response.status == 200){
        if(response.data.valid){
          window.alert('Update room successffully');
          history.push(SITE_PAGES.MANAGE_ROOMS.path);
        }
      }
    } catch (error) {
      window.alert(error.response.message);
    } finally {
      setLoading(false);
    }
  }

  async function deleteRoom() {
    history.push(SITE_PAGES.MANAGE_ROOMS.path);
  }

  useEffect(() => {
    fetchRoom();
  }, []);
  
  return (
    <Layout>
      {roomDetails && !loading ? (
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
                label="max guest(s)"
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
                defaultValue={roomDetails.normal_price}
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
                defaultValue={roomDetails.weekend_price}
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
                defaultValue={roomDetails.address.number}
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
                defaultValue={roomDetails.address.street}
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
                defaultValue={roomDetails.address.ward}
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
                defaultValue={roomDetails.address.district}
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
              <input
                type="text"
                className="outline-none border rounded w-1/2 p-1"
                defaultValue={roomDetails.address.city}
                onChange={(e) => {
                  setRoomDetails({
                    ...roomDetails,
                    address: { ...roomDetails.address, city: e.target.value },
                  });
                }}
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
                  newPhotos[0] = { ...newPhotos[0], path: image };
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
                  newPhotos[1] = { ...newPhotos[1], path: image };
                  setRoomDetails({
                    ...roomDetails,
                    photos: newPhotos.slice(),
                  });
                }}
              />
            </div>
            <div className="w-1/2 h-1/2 p-2">
              <UploadImage
                image={roomDetails.photos ? roomDetails.photos[2] : null}
                setImage={(image) => {
                  if (!roomDetails.photos) return;
                  const newPhotos = roomDetails.photos.slice();
                  newPhotos[2] = { ...newPhotos[2], path: image };
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
                  newPhotos[3] = { ...newPhotos[3], path: image };
                  setRoomDetails({
                    ...roomDetails,
                    photos: newPhotos.slice(),
                  }
                  );
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
