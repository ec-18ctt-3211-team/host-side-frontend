import { Link, useHistory, useLocation } from 'react-router-dom';
import { SITE_PAGES } from 'constants/pages.const';
import { Icon, Outline } from 'utils/icon.utils';

const Menu = (props: {
  data: { label: string; path: string };
  isChosen?: boolean;
}): JSX.Element => {
  return (
    <Link
      to={props.data.path}
      className={[
        'p-4 w-full uppercase font-semibold text-sm flex justify-center items-center text-center',
        'hover:bg-brown-400 hover:text-white',
        props.isChosen ? 'bg-brown-400 text-white' : 'bg-white text-brown-400',
      ].join(' ')}
    >
      {props.data.label}
    </Link>
  );
};

export default function Navbar(): JSX.Element {
  const username = localStorage.getItem('username');
  const userImg = localStorage.getItem('userImg');
  const history = useHistory();
  const location = useLocation();

  function Logout() {
    localStorage.removeItem('userID');
    localStorage.removeItem('username');
    localStorage.removeItem('userImg');
    history.push(SITE_PAGES.HOST_LOGIN.path);
  }

  return (
    <div className="bg-white w-full flex">
      <Link
        to={SITE_PAGES.HOST_INFORMATION.path}
        className={[
          'p-2 m-4 rounded-full w-2/3',
          'text-brown-600 bg-brown-100',
          'hover:text-brown-100 hover:bg-brown-600',
        ].join(' ')}
      >
        <span className="h-8 flex justify-center items-center">{username}</span>
      </Link>
      <Menu
        data={SITE_PAGES.MANAGE_ROOMS}
        isChosen={location.pathname.includes(SITE_PAGES.MANAGE_ROOMS.path)}
      />
      <Menu
        data={SITE_PAGES.BOOKING_REQUEST}
        isChosen={location.pathname.includes(SITE_PAGES.BOOKING_REQUEST.path)}
      />
      <div
        className="flex justify-center items-center px-4 py-2 select-none cursor-pointer hover:text-brown-500 hover:text-lg"
        onClick={Logout}
      >
        <Icon icon={Outline.logout} className="text-2xl" />
      </div>
    </div>
  );
}
