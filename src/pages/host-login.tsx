import { Form }  from 'components/common/';
import { ENDPOINT_URL } from 'constants/api.const';
import { SITE_PAGES } from 'constants/pages.const';
import { IUserInfo } from 'interfaces/user.interface';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BASE, POST } from 'utils/fetcher.utils';

export default function HostLogin(){
  const [userInfo, setUserInfo] = useState<IUserInfo>({ userID: '', username: '', phone_number: '', email: '', password: '' });
  const history = useHistory();

  async function login() {
    if (!userInfo.password) {
      window.alert('Please enter your password.');
      return;
    }
    const payload = {
      email: userInfo.email,
      password: userInfo.password,
      isAdmin: true,
    };
    try{
      const response = await POST(ENDPOINT_URL.POST.login, payload);
      if (response.data.valid) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userID', response.data.userId);
        
        setUserInfo({
          ...userInfo,
          userID: response.data.userId,
          username: response.data.name,
          ava: BASE + response.data.ava,
        });
        checkAuthorized();
      }
    }
    catch (error: any){
      window.alert(error.response.data.message);
    }
  }
  function checkAuthorized(){
    const token = localStorage.getItem('token');
    const userID = localStorage.getItem('userID');
    if (token && userID!= null) {
      history.push({
        pathname: SITE_PAGES.MANAGE_ROOMS.path,
        search: '',  
        state: { 
          update: true, 
        },
      });
      return true;
    } else return false;
  }
  
  return(
    <div className='w-full flex justify-center'>
      <div className='w-1/4 h-full'>
        <Form
          type = 'LogIn'
          title='Log In'
          userInfo = {userInfo}
          setUserInfo = {setUserInfo}
          button = {{ label: 'Log In', onClick: login }}
        />
      </div>
    </div>
  );
}

