import React from 'react';
import { IImageTag } from 'interfaces/image-tag.interface';

interface Props {
  data: IImageTag;
  width: number;
}

const Wrapper = (props: {
  children: React.ReactNode;
  width: number;
}): JSX.Element => {
  return (
    <div className="px-2 relative" style={{ width: `${props.width}%` }}>
      {props.children}
    </div>
  );
};

export default function ImageTag(props: Props): JSX.Element {
  return (
    <Wrapper width={props.width}>
      <img
        src={props.data.src}
        className={[
          'h-80 w-full rounded-xl shadow bg-brown-200 object-cover',
          props.data.href
            ? 'opacity-80 hover:shadow-2xl hover:opacity-100'
            : 'opacity-90',
        ].join(' ')}
      />
      <span className="absolute bottom-4 left-5 text-l text-white font-bold uppercase drop-shadow-xl">
        {props.data.name}
      </span>
    </Wrapper>
  );
}
