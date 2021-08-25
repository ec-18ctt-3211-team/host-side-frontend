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
  type: 'Info'| 'LogIn';
  title: string;
  userInfo: IUserInfo;
  setUserInfo: (user: IUserInfo) => void;
  button: { label: string; onClick: () => void };
  create_an_account?: () => void;
  message?: string;
}

export default function Form(props: Props): JSX.Element {
  const [password, setPassword] = useState('');
  const [isMatched, setMatched] = useState<boolean>(false);

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
          classname="py-2"
          icon={{ icon: <Icon icon={envelopeOutline} />, position: 'right' }}
          value={props.userInfo.email}
          onChange={(e) =>
            props.setUserInfo({ ...props.userInfo, email: e.target.value })
          }
        />
      </div>

      {/* full name */}
      {props.type === 'Info' &&
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
      }

      {/* phone number */}
      {props.type === 'Info' &&
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
      }

      {/* citizen id */}
      {props.type === 'Info' &&
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
      }

      {/* new password */}
      {props.type === 'Info' &&
        <div className="py-2 h-full">
          <Input
            border="full"
            type="password"
            placeholder="password"
            classname="py-2"
            icon={{ icon: <Icon icon={passwordOutline} />, position: 'right' }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      }
      {props.type === 'LogIn' &&
        <div className="py-2 h-full">
          <Input
            border="full"
            type="password"
            placeholder="password"
            classname="py-2"
            icon={{ icon: <Icon icon={passwordOutline} />, position: 'right' }}
            value={password}
            onChange={(e) =>
              props.setUserInfo({
                ...props.userInfo,
                password: e.target.value,
              })}
          />
        </div>
      }

      {/* confirm password */}
      {props.type === 'Info' &&
        <div className="py-2 h-full">
          <Input
            border="full"
            type="password"
            placeholder="confirm password"
            icon={{ icon: <Icon icon={passwordOutline} />, position: 'right' }}
            onChange={(e) => {
              if (password === e.target.value && password !== '') {
                setMatched(true);
                props.setUserInfo({
                  ...props.userInfo,
                  password: e.target.value,
                });
              } else setMatched(false);
            }}
          />
        </div>
      }

      {/* button */}
      {props.type === 'Info' &&
        <div className="py-2 h-full w-full flex justify-center items-center">
          {isMatched && password !== '' ? (
            <Button onClick={props.button.onClick} className="w-2/3 h-full">
              {props.button.label}
            </Button>
          ) : (
            <div className="text-xs text-error">Passwords is not enter or not matched</div>
          )}
        </div>
      }
      {props.type === 'LogIn' &&
        <div className="py-2 w-full h-full flex justify-center items-center">
          <Button onClick={props.button.onClick} className="w-2/3 h-full py-2">
            {props.button.label}
          </Button>
        </div>
      }

      {props.message && (
        <div className="text-xs text-error">{props.message}</div>
      )}
    </div>
  );
}
