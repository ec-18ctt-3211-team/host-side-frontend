import React, { useState } from 'react';
import Layout from 'components/layout';
import DivPx from 'components/divpx';
import { ImageSlider, ImageTag } from 'components/image-slider';
import { IMAGES, GIFTS, ROOMS } from 'constants/images.const';

export default function Main(): JSX.Element {
  const [isAuthorized, setAuthorize] = useState(true);
  return (
    <Layout isAuthorized={isAuthorized}>
      <ImageTag data={{ src: '/images/welcome.jpg' }} width={100} />
      <DivPx size={32} />
      <div className="px-32 text-lg">Welcome to 3211,</div>
      {!isAuthorized && (
        <div className="px-32 text-lg">
          Please login or sign up to explore more!
        </div>
      )}
      <DivPx size={48} />
      <ImageSlider
        title="SIGNIFICANT PLACES TO STAY"
        limit={5}
        images={IMAGES}
      />
      <DivPx size={48} />
      <ImageSlider title="PREFRENTIAL" limit={3} images={GIFTS} />
      <DivPx size={48} />
      <ImageSlider title="RECOMMENDED By 3211" limit={4} images={ROOMS} />
    </Layout>
  );
}
