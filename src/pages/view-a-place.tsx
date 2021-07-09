import { Layout, ImageSlider, DivPx } from 'components/common';
import { RoomDetail, Dialogue } from 'components/section/view-a-place';
import { ROOMS } from 'constants/images.const';
import { ROOMS_DATA } from 'constants/rooms-data.const';

interface Props {
  isAuthorized: boolean;
  setAuthorized: (isAuthorized: boolean) => void;
}

export default function ViewAPlace(props: Props): JSX.Element {
  return (
    <Layout
      isAuthorized={props.isAuthorized}
      setAuthorized={props.setAuthorized}
      allowSearch
    >
      <ImageSlider limit={3} images={ROOMS} />
      <DivPx size={48} />
      <div className="w-full flex flex-col items-center lg:flex-row">
        <div className="w-11/12 lg:w-3/5">
          <RoomDetail detail={ROOMS_DATA[0]} />
        </div>
        <div className="w-2/3 lg:w-2/5">
          <Dialogue price={ROOMS_DATA[0].price} />
        </div>
      </div>
    </Layout>
  );
}
