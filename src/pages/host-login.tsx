import { Form, Loading } from 'components/common/';
import { ENDPOINT_URL } from 'constants/api.const';
import { SITE_PAGES } from 'constants/pages.const';
import { IUserInfo } from 'interfaces/user.interface';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BASE, POST } from 'utils/fetcher.utils';

const defaultUser: IUserInfo = {
  userID: '',
  username: '',
  phone_number: '',
  email: '',
  password: '',
};

export default function HostLogin() {
  const history = useHistory();
  const [userInfo, setUserInfo] = useState<IUserInfo>(defaultUser);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState(
    'Please login again with your user account',
  );

  async function login() {
    try {
      setLoading(true);
      const payload = {
        email: userInfo.email,
        password: userInfo.password,
        isAdmin: true,
      };
      const response = await POST(ENDPOINT_URL.POST.login, payload);
      if (response.data.valid) {
        setUserInfo({
          ...userInfo,
          userID: response.data.userId,
          username: response.data.name,
          ava: BASE + response.data.ava,
        });
        localStorage.setItem('userID', response.data.userId);
        localStorage.setItem('username', response.data.name);
        localStorage.setItem('userImg', BASE + response.data.ava);
      }
    } catch (error: any) {
      setMessage(error.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  function checkAuthorized() {
    const userID = localStorage.getItem('userID');
    if (userID) {
      history.push(SITE_PAGES.MANAGE_ROOMS.path);
      return true;
    } else return false;
  }

  useEffect(() => {
    checkAuthorized();
  }, [userInfo]);

  return (
    <div className="w-full h-full bg-brown-50 flex items-center justify-center">
      {!loading ? (
        <div className="shadow-md rounded-md p-4 bg-white text-center flex flex-col justify-center items-center">
          <Form
            type="LogIn"
            title="Log In"
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            button={{ label: 'Log In', onClick: login }}
          />
          <div className="whitespace-pre-wrap px-4 text-sm italic text-gray-600">
            {message}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
