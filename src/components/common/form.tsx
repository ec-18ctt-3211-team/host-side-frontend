import { Button, Input } from '.';
import {
  Icon,
  envelopeOutline,
  userSolid,
  phoneOutline,
  passwordOutline,
  idSolid,
} from 'utils/icon.utils';
import { useState } from 'react';
import { IUserInfo } from 'interfaces/user.interface';

interface Props {
  title: string;
  userInfo: IUserInfo;
  setUserInfo: (user: IUserInfo) => void;
  button: { label: string; onClick: () => void };
}

export default function Form(props: Props): JSX.Element {
  const [password, setPassword] = useState('');
  const [isMatched, setMatched] = useState<boolean>(true);

  return (
    <div className="bg-white rounded-xl h-full w-full flex flex-col justify-between items-center p-6 select-none">
      <div className="uppercase font-bold text-brown text-xl">
        {props.title}
      </div>
      <div className="text-xs pb-3 pt-1">{props.userInfo.userID}</div>
      {/* email */}
      <div className="py-2 h-full">
        <Input
          border="full"
          type="text"
          placeholder="email"
          icon={{ icon: <Icon icon={envelopeOutline} />, position: 'right' }}
          value={props.userInfo.email}
          onChange={(e) =>
            props.setUserInfo({ ...props.userInfo, email: e.target.value })
          }
        />
      </div>

      {/* full name */}
      <div className="py-2 h-full">
        <Input
          border="full"
          type="text"
          placeholder="full name"
          icon={{ icon: <Icon icon={userSolid} />, position: 'right' }}
          value={props.userInfo.username}
          onChange={(e) =>
            props.setUserInfo({
              ...props.userInfo,
              username: e.target.value,
            })
          }
        />
      </div>

      {/* phone number */}
      <div className="py-2 h-full">
        <Input
          border="full"
          type="text"
          placeholder="phone number"
          icon={{ icon: <Icon icon={phoneOutline} />, position: 'right' }}
          value={props.userInfo.phone_number}
          onChange={(e) =>
            props.setUserInfo({
              ...props.userInfo,
              phone_number: e.target.value,
            })
          }
        />
      </div>

      {/* citizen id */}
      <div className="py-2 h-full">
        <Input
          border="full"
          type="text"
          placeholder="citizen id"
          icon={{ icon: <Icon icon={idSolid} />, position: 'right' }}
          value={props.userInfo.citizen_id}
          onChange={(e) =>
            props.setUserInfo({
              ...props.userInfo,
              citizen_id: e.target.value,
            })
          }
        />
      </div>

      {/* new password */}
      <div className="py-2 h-full">
        <Input
          border="full"
          type="password"
          placeholder="password"
          icon={{ icon: <Icon icon={passwordOutline} />, position: 'right' }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* confirm password */}
      <div className="py-2 h-full">
        <Input
          border="full"
          type="password"
          placeholder="confirm password"
          icon={{ icon: <Icon icon={passwordOutline} />, position: 'right' }}
          onChange={(e) => {
            if (password === e.target.value) {
              setMatched(true);
              props.setUserInfo({
                ...props.userInfo,
                new_password: e.target.value,
              });
            } else setMatched(false);
          }}
        />
      </div>

      {/* button */}
      <div className="py-2 h-full w-full flex justify-center items-center">
        {isMatched ? (
          <Button onClick={props.button.onClick} className="w-2/3 h-full">
            {props.button.label}
          </Button>
        ) : (
          <div className="text-xs text-error">Passwords is not matched</div>
        )}
      </div>
    </div>
  );
}
