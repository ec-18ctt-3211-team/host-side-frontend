import { SITE_PAGES } from 'constants/pages.const';
import { useHistory } from 'react-router-dom';
import { Icon, logoutOutline } from 'utils/icon.utils';

interface Props {
  isAuthorized: boolean;
  setAuthorized: (isAuthorized: boolean) => void;
}

export default function Navbar(props: Props): JSX.Element {
  const history = useHistory();
  return (
    <div className="flex flex-wrap p-4 w-screen sticky border-b bg-white z-10">
      <div className="w-10 h-10 px-4 my-2 cursor-pointer rounded-full bg-gray-300"></div>

      <div className="my-2 p-2 sm:ml-auto flex flex-row-reverse sm:flex-row justify-center items-center rounded-3xl text-brown-600 bg-brown-100">
        {/* <img src="#" alt="user-img" className="w-6 h-6 bg-gray-300 rounded-full" /> */}
        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
        <span className="px-2">Hostname</span>
        <span
          className="px-4"
          // onClick={() => {
          //   props.setAuthorized(false);
          // }}
        >
          <Icon icon={logoutOutline} />
        </span>
      </div>
    </div>
  );
}
