import { IImageTag } from 'interfaces/image-tag.interface';

interface Props {
  data: IImageTag;
  width: number;
}

export default function ImageTag(props: Props): JSX.Element {
  return (
    <a
      className="px-2 relative cursor-pointer"
      style={{ width: `${props.width}%` }}
      href={props.data.href}
    >
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
    </a>
  );
}
