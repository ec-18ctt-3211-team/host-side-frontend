import Searchbar from 'components/searchbar';

interface Props {
  isAuthorized: boolean;
}

export default function Navbar(props: Props): JSX.Element {
  return (
    <div className="flex p-4 w-screen sticky justify-between border-b">
      <div className="px-4 cursor-pointer">
        {/* <img src="#" alt="logo" className="w-10 h-10 bg-gray-300 rounded-full" /> */}
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
      </div>
      <Searchbar />
      <div className="ml-auto flex justify-center cursor-pointer items-center">
        <span className="px-4 hover:text-brown-600">Host</span>
        {!props.isAuthorized ? (
          <div>
            <span className="px-4">Sign up</span>
            <span className="px-4">Login</span>
          </div>
        ) : (
          <div
            className={[
              'p-2 flex items-center rounded-3xl',
              'text-brown-600 bg-brown-100',
              'hover:text-brown-100 hover:bg-brown-600',
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
