import { useEffect } from 'react';
import Footer from './footer';
import Sidebar from './sidebar';
import * as fetcher from 'utils/fetcher.utils';
import { ENDPOINT_URL } from 'constants/api.const';

type Props = {
  children: React.ReactNode;
  allowSearch?: boolean;
};

export default function Layout(props: Props): JSX.Element {
  async function fetchUserInfo() {
    const payload = {
      email: 'baodi@ngocnhi.com',
      password: 'iuNhiLy',
    };
    try {
      const response = await fetcher.POST(ENDPOINT_URL.POST.login, payload);
      // localStorage.setItem('token', response.data.token);
      localStorage.setItem('userID', response.data.userId);
      localStorage.setItem('username', response.data.name);
      localStorage.setItem('userImg', fetcher.BASE + response.data.ava);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (localStorage.getItem('userID') !== undefined) return;
    fetchUserInfo();
  }, []);

  return (
    <div>
      <div className="h-screen flex flex-col">
        <div className="flex bg-gray-200 h-full w-full">
          <Sidebar />
          <div className="p-8 w-[calc(100%-232px)]">{props.children}</div>
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}
