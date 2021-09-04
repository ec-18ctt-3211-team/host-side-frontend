import { Input } from 'components/common';
import { InlineIcon, Outline } from 'utils/icon.utils';

export default function Searchbar(): JSX.Element {
  return (
    <div className="px-4 py-2 flex w-1/3 sm:w-2/5">
      <Input
        border="full"
        type="text"
        placeholder="Search"
        classname="shadow-md"
        icon={{
          icon: (
            <InlineIcon icon={Outline.search} style={{ fontSize: 'inherit' }} />
          ),
          position: 'left',
        }}
      />
    </div>
  );
}
