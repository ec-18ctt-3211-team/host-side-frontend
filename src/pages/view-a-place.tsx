import React, { useState } from 'react';
import Layout from 'components/layout';
import { ImageSlider } from 'components/image-slider';
import { ROOMS } from 'constants/images.const';
import DivPx from 'components/divpx';
import RoomDetail from 'components/view-a-place/room-detail';
import { ROOMS_DATA } from 'constants/rooms-data.const';
import BookDialogue from 'components/view-a-place/booking-dialogue';

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
          <BookDialogue price={ROOMS_DATA[0].price} />
        </div>
      </div>
    </Layout>
  );
}
