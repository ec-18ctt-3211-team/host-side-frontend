import { IImageTag } from 'interfaces/image-tag.interface';

interface Props {
  data: IImageTag;
  width: number;
}

export default function ImageTag(props: Props): JSX.Element {
  return (
    <div className="h-full px-2 relative" style={{ width: `${props.width}%` }}>
      <img
        src={props.data.src}
        className="h-full w-full rounded-xl opacity-90 shadow-lg bg-brown-200"
      />
      <span className="absolute bottom-4 left-5 text-l text-white font-bold uppercase drop-shadow-xl">
        {props.data.name}
      </span>
    </div>
  );
}
