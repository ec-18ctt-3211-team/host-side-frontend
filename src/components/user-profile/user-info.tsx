import { IUserInfo } from 'interfaces/user.interface';
import Input from 'components/input/input';
import Button from 'components/button/Button';
import { Icon } from '@iconify/react';
import envelopeOutline from '@iconify/icons-teenyicons/envelope-outline';
import userSolid from '@iconify/icons-teenyicons/user-solid';
import phoneOutline from '@iconify/icons-teenyicons/phone-outline';
import passwordOutline from '@iconify/icons-teenyicons/password-outline';

interface Props {
  userProfile: IUserInfo;
}

export default function UserInfo(props: Props) {
  return (
    <div className="bg-white rounded-xl shadow-lg w-[450px] h-[500px] flex flex-col justify-between items-center p-6">
      <div className="uppercase font-bold text-brown text-xl">User profile</div>
      <div className="text-xs pb-3 pt-1">{props.userProfile.userID}</div>
      <div className="py-2 h-full">
        <Input
          border="full"
          type="text"
          placeholder={props.userProfile.email}
          icon={{ icon: <Icon icon={envelopeOutline} />, position: 'right' }}
        />
      </div>
      <div className="py-2 h-full">
        <Input
          border="full"
          type="text"
          placeholder={props.userProfile.username}
          icon={{ icon: <Icon icon={userSolid} />, position: 'right' }}
        />
      </div>
      <div className="py-2 h-full">
        <Input
          border="full"
          type="text"
          placeholder={props.userProfile.phone_number}
          icon={{ icon: <Icon icon={phoneOutline} />, position: 'right' }}
        />
      </div>
      <div className="py-2 h-full">
        <Input
          border="full"
          type="password"
          placeholder="new password"
          icon={{ icon: <Icon icon={passwordOutline} />, position: 'right' }}
        />
      </div>
      <div className="py-2 h-full">
        <Input
          border="full"
          type="password"
          placeholder="confirm password"
          icon={{ icon: <Icon icon={passwordOutline} />, position: 'right' }}
        />
      </div>
      <div className="py-2 w-2/3 h-full">
        <Button>Update</Button>
      </div>
    </div>
  );
}
