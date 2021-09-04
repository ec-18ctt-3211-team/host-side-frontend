import { Icon, Outline } from 'utils/icon.utils';

interface Props {
  label: string;
  value: number;
  setValue: (value: number) => void;
}

export default function InputNumber(props: Props): JSX.Element {
  const { value = 0, setValue } = props;
  return (
    <div className="flex w-full justify-around">
      <div
        className={[
          'rounded-full bg-brown-200 text-brown-700',
          'hover:text-brown-100 hover:bg-brown-600',
        ].join(' ')}
        onClick={() => value > 0 && setValue(value - 1)}
      >
        <Icon icon={Outline.minus} />
      </div>
      <div>
        {value} {props.label}
      </div>
      <div
        className={[
          'rounded-full bg-brown-200 text-brown-700',
          'hover:text-brown-100 hover:bg-brown-600',
        ].join(' ')}
        onClick={() => setValue(value + 1)}
      >
        <Icon icon={Outline.add} />
      </div>
    </div>
  );
}
