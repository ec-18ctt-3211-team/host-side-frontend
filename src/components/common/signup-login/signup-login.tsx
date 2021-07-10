import Input from 'components/common/input/input';
import { Button } from 'components/common';
import {
  Icon,
  envelopeOutline,
  userSolid,
  phoneOutline,
  passwordOutline,
} from 'utils/icon.utils';

import './signup-login.css';

interface IBoolean{
  isSignUp: boolean;
}

export const SignupLogin: React.FC<IBoolean> = (props: IBoolean) =>{
  const isSignUp = props.isSignUp;
  return(
    <div className='flex justify-center'>
      <div className='login-component'>
        {isSignUp && <h1 className = 'text-4xl font-bold py-4'>Sign Up</h1>}
        {!isSignUp && <h1 className = 'text-4xl font-bold py-4'>Log In</h1>}
        <div className= 'py-2 h-full'>
          <Input 
            border='full' 
            type ='password' 
            placeholder = 'email'
            classname = 'py-2 h-full'
            icon={{ icon: <Icon icon={envelopeOutline} />, position: 'right' }}/>
        </div>

        {isSignUp && 
          <div className='py-2 h-full'>
            <Input 
              border='full' 
              type ='password' 
              placeholder= 'full name'
              classname = 'py-2 h-full'
              icon={{ icon: <Icon icon={userSolid} />, position: 'right' }}/> 
          </div>}
       
        {isSignUp && 
          <div className='py-2 h-full'> 
            <Input 
              border='full' 
              type ='password' 
              placeholder = 'phone number'
              classname = 'py-2 h-full' 
              icon={{ icon: <Icon icon={phoneOutline} />, position: 'right' }}/> 
          </div>}     

        <div className='py-2 h-full'> 
          <Input 
            border='full' 
            type ='password' 
            placeholder = 'password' 
            classname = 'py-2 h-full'
            icon={{ icon: <Icon icon={passwordOutline} />, position: 'right' }}></Input>
        </div>
        
        {isSignUp && 
          <div className='py-2 h-full'>  
            <Input 
              border='full' 
              type ='password' 
              placeholder = 'confirm password' 
              classname = 'py-2 h-full'
              icon={{ icon: <Icon icon={passwordOutline} />, position: 'right' }}/>
          </div>}
        
        <div className='w-full flex justify-center py-4'>
          {isSignUp && <Button children ='Sign Up' className="py-2 w-2/3 h-full"></Button>}
          {!isSignUp && <Button children ='Log In' className="py-2 w-2/3 h-full"></Button>}
        </div>
        {!isSignUp && <p className ='italic my-4'>or</p>}
        {!isSignUp && <p id='p-link'>create a new account</p>}
      </div>
    </div>
  );
};