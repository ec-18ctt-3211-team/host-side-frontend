import { Layout, Form, Loading } from 'components/common';
import { ENDPOINT_URL, emailValidRegex } from 'constants/api.const';
import { IUserInfo } from 'interfaces/user.interface';
import { useEffect, useState } from 'react';
import { GET, PUT } from 'utils/fetcher.utils';

export default function HostInfomation(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<IUserInfo>();
  const [message, setMessage] = useState('');

  async function fetchUserInfo() {
    const userID = localStorage.getItem('userID');
    if (!userID) return;
    try {
      setLoading(true);
      const response = await GET(ENDPOINT_URL.GET.getCustomerByID(userID));
      if (response.data.valid) {
        setUserInfo({ ...response.data.customer, password: '' });
      }
    } catch (error) {
      alert('Unexpected error, please try again!');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile() {
    if (!userInfo) return;
    if (
      !userInfo.email.match(emailValidRegex) ||
      !userInfo.email_paypal.match(emailValidRegex)
    ) {
      setMessage('Please input valid email');
      return;
    }
    if (!userInfo.phone.match(/[0-9]/)) {
      setMessage('Please input valid phone number');
      return;
    }
    try {
      setLoading(true);
      const payload = new URLSearchParams();
      if (userInfo.email !== '') payload.append('email', userInfo.email);
      if (userInfo.email_paypal !== '')
        payload.append('email_paypal', userInfo.email_paypal);
      if (userInfo.name !== '') payload.append('name', userInfo.name);
      if (userInfo.password !== '')
        payload.append('password', userInfo.password);
      if (userInfo.phone !== '') payload.append('phone', userInfo.phone);
      if (userInfo.ci && userInfo.ci !== '') payload.append('ci', userInfo.ci);

      const response = await PUT(
        ENDPOINT_URL.PUT.updateCustomerByID(userInfo._id),
        payload,
      );
      if (response.data.valid) {
        fetchUserInfo();
        setMessage('');
      }
    } catch (error) {
      setMessage('Unexpected error, please try again!');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <Layout>
      {!loading && userInfo ? (
        <div className="h-full w-full flex items-center justify-center">
          <div className="w-4/5 lg:w-3/5 xl:2/5 h-full">
            <Form
              title="User profile"
              type="profile"
              button={{ label: 'Update', onClick: updateProfile }}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              message={message}
            />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </Layout>
  );
}
