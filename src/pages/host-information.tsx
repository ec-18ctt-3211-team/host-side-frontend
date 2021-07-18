import { Layout, Form } from 'components/common';
import { IUserInfo } from 'interfaces/user.interface';
import { useState } from 'react';

interface Props {
  isAuthorized: boolean;
  setAuthorized: (isAuthorized: boolean) => void;
}

export default function HostInfomation(props: Props): JSX.Element {
  const [data, setData] = useState<IUserInfo>({
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
    <Layout
      isAuthorized={props.isAuthorized}
      setAuthorized={props.setAuthorized}
    >
      <div className="h-full w-full bg-white flex justify-center items-center rounded-lg">
        <div className="py-1 h-full">
          <Form
            title={data.username}
            userInfo={data}
            setUserInfo={setData}
            button={{ label: 'update', onClick: updateProfile }}
          />
        </div>
      </div>
    </Layout>
  );
}
