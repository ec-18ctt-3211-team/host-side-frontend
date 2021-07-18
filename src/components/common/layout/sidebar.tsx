import { Link } from 'react-router-dom';
import { SITE_PAGES } from 'constants/pages.const';

const Menu = (props: {
  data: { label: string; path: string };
}): JSX.Element => {
  return (
    <Link
      to={props.data.path}
      className="p-4 w-full uppercase font-semibold text-sm text-brown-400 hover:bg-brown-400 hover:text-white"
    >
      {props.data.label}
    </Link>
  );
};

export default function Sidebar(): JSX.Element {
  return (
    <div className="bg-white w-[232px] h-full flex flex-col py-6">
      <Menu data={SITE_PAGES.HOST_INFORMATION} />
      <Menu data={SITE_PAGES.MANAGE_ROOMS} />
      <Menu data={SITE_PAGES.BOOKING_REQUEST} />
    </div>
  );
}
