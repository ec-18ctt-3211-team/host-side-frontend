import { Form, Loading } from 'components/common/';
import { ENDPOINT_URL, emailValidRegex } from 'constants/api.const';
import { SITE_PAGES } from 'constants/pages.const';
import { defaultCustomer, IUserInfo } from 'interfaces/user.interface';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BASE, POST } from 'utils/fetcher.utils';

export default function HostLogin() {
  const history = useHistory();
  const [userInfo, setUserInfo] = useState<IUserInfo>(defaultCustomer);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState(
    'Please login again with your user account',
  );

  async function login() {
    if (userInfo.email === '' || userInfo.password === '') {
      setMessage('All fields must be filled');
      return;
    }
    if (!userInfo.email.match(emailValidRegex)) {
      setMessage('Please input valid email');
      return;
    }
    try {
      setLoading(true);
      const payload = {
        email: userInfo.email,
        password: userInfo.password,
      };
      const response = await POST(ENDPOINT_URL.POST.login, payload);

      if (response.status === 200) {
        setUserInfo({
          ...userInfo,
          _id: response.data.userId,
          name: response.data.name,
          ava: BASE + response.data.ava,
        });
        localStorage.setItem('auth-token', response.headers['auth-token']);
        localStorage.setItem('userID', response.data.userId);
        localStorage.setItem('username', response.data.name);
        localStorage.setItem('userImg', BASE + response.data.ava);

        setMessage('');

        if (response.data.set_up) {
          history.push(SITE_PAGES.HOST_INFORMATION.path);
          alert('Please fill in your paypal email and citizen ID');
        } else history.push(SITE_PAGES.MANAGE_ROOMS.path);
      }
    } catch (error: any) {
      if (error.response?.data?.message)
        setMessage(error.response.data.message);
      else setMessage('Unexpected error, please try again!');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full h-full bg-brown-50 flex items-center justify-center">
      {!loading ? (
        <div className="w-[350px] h-[300px] shadow-md rounded-m text-center flex flex-col justify-center items-center">
          <Form
            title="login"
            type="login"
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            button={{
              label: 'login',
              onClick: login,
            }}
            message={message}
          />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
