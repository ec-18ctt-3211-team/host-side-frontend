import React, { useState } from 'react';
import Layout from 'components/layout';
import 'styles/view-a-place.css';
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
      <div className="w-full flex flex-col md:flex-row">
        <RoomDetail detail={ROOMS_DATA[0]} />
        <BookDialogue price={ROOMS_DATA[0].price} />
      </div>
    </Layout>
  );
}
