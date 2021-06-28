import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import leftSmallOutline from '@iconify/icons-teenyicons/left-small-outline';
import ImageTag from './image-tag';
import { IMAGES } from 'constants/locations.const';

interface Props {
  title: string;
  limit: number;
}

export default function ImageSlider(props: Props): JSX.Element {
  const [slider, setSlider] = useState({ start: 0, end: props.limit });
  const [render, setRender] = useState<JSX.Element[]>([]);

  function reloadImage(type: string) {
    if (type === 'left') {
      if (slider.start === 0) return;
      setSlider({ start: slider.start - 1, end: slider.end - 1 });
    } else {
      if (slider.end === IMAGES.length) return;
      setSlider({ start: slider.start + 1, end: slider.end + 1 });
    }
  }

  useEffect(() => {
    const newSlider = [];
    for (let i = slider.start; i < slider.end; i++) {
      newSlider.push(
        <ImageTag
          data={{ src: IMAGES[i].src, name: IMAGES[i].name }}
          width={100 / props.limit}
        />,
      );
    }
    setRender(newSlider);
  }, [slider]);

  return (
    <div className="flex h-80 w-full relative items-center px-3">
      <div
        className="w-10 h-10 bg-white flex items-center justify-center rounded-full absolute left-0 z-10"
        onClick={() => reloadImage('left')}
      >
        <Icon icon={leftSmallOutline} style={{ fontSize: '30px' }} />
      </div>
      {render.map((item) => item)}
      <div
        className="w-10 h-10 bg-white flex items-center justify-center rounded-full rotate-180 absolute right-0 z-10"
        onClick={() => reloadImage('right')}
      >
        <Icon icon={leftSmallOutline} style={{ fontSize: '30px' }} />
      </div>
    </div>
  );
}
