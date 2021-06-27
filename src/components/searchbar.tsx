import { InlineIcon } from '@iconify/react';
import searchOutline from '@iconify/icons-teenyicons/search-outline';

export default function Searchbar(): JSX.Element {
  return (
    <div className="mx-4 px-2 flex w-1/3 border rounded-xl items-center">
      <div className="px-2 cursor-pointer">
        <InlineIcon icon={searchOutline} style={{ fontSize: 'inherit' }} />
      </div>
      <input
        type="text"
        className="px-2 focus:outline-none w-full h-full"
        placeholder="Search"
      />
    </div>
  );
}
