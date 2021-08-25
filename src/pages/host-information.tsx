import { Layout, Form, Loading } from 'components/common';
import { ENDPOINT_URL } from 'constants/api.const';
import { IUserInfo } from 'interfaces/user.interface';
import { useEffect, useState } from 'react';
import { GET, PUT } from 'utils/fetcher.utils';

export default function HostInfomation(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    userID: '12345',
    username: 'Default',
    phone_number: '0123456789',
    email: 'ngocnhi123@gmail.com',
    citizen_id: '01010101',
    password: '1',
  });

  async function fetchUserInfo() {
    const userID = localStorage.getItem('userID');
    if (!userID) return;
    try {
      setLoading(true);
      const response = await GET(ENDPOINT_URL.GET.getCustomerByID(userID));
      if (response.data.valid) {
        setUserInfo({ ... userInfo,
          userID: response.data.customer._id,
          username: response.data.customer.name,
          phone_number: response.data.customer.phone,
          email: response.data.customer.email,
          citizen_id: response.data.customer.ci,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile() {
    if (!userInfo) return;
    if (!userInfo.password || userInfo.password === ''){
      window.alert('Please enter your current or new password');
    }
    try {
      setLoading(true);
      const payload = {
        email: userInfo.email,
        name: userInfo.username,
        password: userInfo.password,
        phone: userInfo.phone_number,
      };
      
      const response = await PUT(
        ENDPOINT_URL.PUT.updateCustomerByID(userInfo.userID),
        payload,
      );
      if (response.data.valid) {
        fetchUserInfo();
      }
    } catch (error) {
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
      {!loading ? (
        <div className="h-full w-full bg-white flex items-center justify-center rounded-lg">
          <div className="h-full py-6 w-2/5">
            <Form
              type = 'Info'
              title="Host profile"
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              button={{ label: 'Update', onClick: updateProfile }}
            />
          </div>
        </div>
      ) : (
        <Loading />
      )}    
    </Layout>
  );
}