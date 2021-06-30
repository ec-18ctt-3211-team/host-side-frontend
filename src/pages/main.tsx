import React, { useState } from 'react';
import Layout from 'components/layout';
import ImageSlider from 'components/image-slider/slider';
import { IMAGES } from 'constants/locations.const';

export default function Main(): JSX.Element {
  const [isAuthorized, setAuthorize] = useState(true);
  return (
    <Layout isAuthorized={isAuthorized}>
      <ImageSlider
        title="SIGNIFICANT PLACES TO STAY"
        limit={5}
        images={IMAGES}
      />
    </Layout>
  );
}
