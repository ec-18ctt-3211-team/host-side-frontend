import { Layout, Form } from 'components/common';
import { IUserInfo } from 'interfaces/user.interface';
import { useState } from 'react';

export default function HostInfomation(): JSX.Element {
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    userID: '12345',
    username: 'Ly Ngoc Nhi',
    phone_number: '0123456789',
    email: 'ngocnhi123@gmail.com',
    citizen_id: '01010101',
  });

  function updateProfile() {
    console.log('updated');
  }

  return (
    <Layout>
      <div className="h-full w-full bg-white flex items-center justify-center rounded-lg">
        <div className="h-full py-6 w-2/5">
          <Form
            title="Host profile"
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            button={{ label: 'Update', onClick: updateProfile }}
          />
        </div>
      </div>
    </Layout>
  );
}
