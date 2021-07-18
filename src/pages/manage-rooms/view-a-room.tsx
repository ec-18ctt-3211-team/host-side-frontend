import {
  ImageSlider,
  Layout,
  Input,
  SelectOption,
  InputNumber,
  DivPx,
} from 'components/common';
import { ROOMS } from 'constants/images.const';
import { ROOMS_DATA } from 'constants/rooms-data.const';
import { useState } from 'react';
import { Icon, edit1Solid } from 'utils/icon.utils';

interface Props {
  isAuthorized: boolean;
  setAuthorized: (isAuthorized: boolean) => void;
}

export default function ViewARoom(props: Props): JSX.Element {
  const [data, setData] = useState(ROOMS_DATA[0]);
  const [room_type, setType] = useState(data.room_type);
  const [bedrooms, setBedrooms] = useState(data.total_bedrooms);
  const [price, setPrice] = useState(data.price);

  return (
    <Layout
      isAuthorized={props.isAuthorized}
      setAuthorized={props.setAuthorized}
    >
      <div className="h-full w-full p-4 bg-white flex flex-col justify-center items-center rounded-lg">
        <ImageSlider limit={3} images={ROOMS} />
        <div className="w-1/3 py-6">
          <Input
            border="line"
            type="text"
            icon={{ icon: <Icon icon={edit1Solid} />, position: 'right' }}
            value={data.room_name}
            onChange={(e) => setData({ ...data, room_name: e.target.value })}
          />
        </div>
        <div className="flex w-full justify-between">
          <div className="pl-10">
            <div className="flex">
              <div>Type:</div>
              <SelectOption
                options={['homestay']}
                currentOptions={room_type}
                setCurrentOptions={setType}
              />
            </div>
            <DivPx size={18} />
            <InputNumber
              label="bedroom(s)"
              value={bedrooms}
              setValue={setBedrooms}
            />
            <DivPx size={18} />
            <InputNumber label="per night" value={price} setValue={setPrice} />
          </div>
          <div className="w-3/5">
            <Input
              border="full"
              type="text"
              label={{ value: 'Description:', position: 'top' }}
              value={data.description}
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
