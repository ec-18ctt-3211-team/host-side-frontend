import { InlineIcon } from '@iconify/react';
import searchOutline from '@iconify/icons-teenyicons/search-outline';

interface Props {
  isAuthorize: boolean;
}

export default function Navbar(props: Props): JSX.Element {
  return (
    <div className="flex p-4 w-screen sticky justify-between border-b">
      <div className="px-4 cursor-pointer">
        {/* <img src="#" alt="logo" className="w-10 h-10 bg-gray-300 rounded-full" /> */}
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
      </div>
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
      <div className="ml-auto flex justify-center cursor-pointer items-center">
        <span className="px-4 hover:text-brown-600">Host</span>
        {!props.isAuthorize ? (
          <div>
            <span className="px-4">Sign up</span>
            <span className="px-4">Login</span>
          </div>
        ) : (
          <div
            className={[
              'p-2 flex items-center',
              'bg-gray-100 rounded-3xl',
              'hover:text-brown-600 hover:bg-brown-100',
            ].join(' ')}
          >
            {/* <img src="#" alt="user-img" className="w-6 h-6 bg-gray-300 rounded-full" /> */}
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            <span className="px-2">Username</span>
          </div>
        )}
      </div>
    </div>
  );
}
