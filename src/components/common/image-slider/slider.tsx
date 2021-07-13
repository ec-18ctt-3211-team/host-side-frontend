import { useState } from 'react';
import { ImageTag } from 'components/common';
import { IImageTag } from 'interfaces/image-tag.interface';
import { Icon, leftSmallOutline } from 'utils/icon.utils';

interface Props {
  title?: string;
  limit: number;
  images: IImageTag[];
  isLink?: boolean;
}

export default function ImageSlider(props: Props): JSX.Element {
  const [slider, setSlider] = useState({ start: 0, end: props.limit });

  function reloadImage(type: string) {
    if (type === 'left') {
      if (slider.start === 0) return;
      setSlider({ start: slider.start - 1, end: slider.end - 1 });
    } else {
      if (slider.end === props.images.length) return;
      setSlider({ start: slider.start + 1, end: slider.end + 1 });
    }
  }

  return (
    <div className="w-full">
      {props.title && (
        <div className="text-lg px-12 py-8 font-semibold">{props.title}</div>
      )}
      <div className="flex w-full relative items-center px-3">
        <div
          className={[
            'w-10 h-10 flex items-center justify-center absolute left-0 z-10',
            'bg-white text-brown-700 rounded-full shadow-md',
            'hover:bg-brown-600 hover:text-brown-100',
          ].join(' ')}
          onClick={() => reloadImage('left')}
        >
          <Icon icon={leftSmallOutline} style={{ fontSize: '30px' }} />
        </div>
        {props.images.map((image, index) => {
          if (index < slider.start || index >= slider.end) return;
          return (
            <ImageTag
              data={{ src: image.src, name: image.name }}
              width={100 / props.limit}
              isLink={props.isLink}
              key={index}
            />
          );
        })}
        <div
          className={[
            'w-10 h-10 flex items-center justify-center absolute rotate-180 right-0 z-10',
            'bg-white text-brown-700 rounded-full shadow-md',
            'hover:bg-brown-600 hover:text-brown-100',
          ].join(' ')}
          onClick={() => reloadImage('right')}
        >
          <Icon icon={leftSmallOutline} style={{ fontSize: '30px' }} />
        </div>
      </div>
    </div>
  );
}