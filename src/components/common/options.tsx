import { useState } from 'react';
import { Icon, downSmallOutline } from 'utils/icon.utils';

interface Props {
  label?: string;
  options: string[];
  currentOptions: string;
  setCurrentOptions: (option: string) => void;
}

export default function SelectOptions(props: Props): JSX.Element {
  const [dropdown, setDropdown] = useState<boolean>(false);
  return (
    <div className="select-none cursor-pointer">
      <div className="pb-2">{props.label}</div>
      <div
        onClick={() => setDropdown(!dropdown)}
        className="border-b-2 flex justify-between px-8"
      >
        <div>{props.currentOptions}</div>
        <div className={dropdown ? 'rotate-180' : ''}>
          <Icon icon={downSmallOutline} />
        </div>
      </div>
      {dropdown && (
        <div className="bg-gray-50 text-gray-700 mx-14 my-1 shadow-lg rounded">
          {props.options.map((option, index) => (
            <div
              key={option}
              className={[
                'py-2 text-center',
                index < props.options.length - 1
                  ? 'border-b border-gray-500'
                  : '',
                'hover:text-gray-50 hover:bg-gray-600',
              ].join(' ')}
              onClick={() => {
                props.setCurrentOptions(option);
                setDropdown(!dropdown);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
