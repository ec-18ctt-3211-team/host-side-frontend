import React, { useState } from 'react';
import './InputText.css';

interface InputText {
  label?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  iconRight?: boolean;
  fullBorder?: boolean;
  inputPos?: 'left' | 'right' | 'top' | 'bottom';
}

export const InputTextComponent: React.FC<InputText> = (props) => {
  const { fullBorder, inputPos } = props;
  if (fullBorder === true) {
    return <InputTextBorder {...props} />;
  }
  else {
    return (
      <>
        {(inputPos === 'left' || inputPos === 'right')  && <InputTextNoBorderLeftRight {...props} />}
        {(inputPos === 'top' || inputPos === 'bottom') && <InputTextNoBorderTopBot {...props} />}
      </>
    );
  }
};
const InputTextBorder: React.FC<InputText> = (props) => {
  const { placeholder, icon } = props;
  const [text, setText] = useState<null | string>('');
  return (
    <div className='screen'>
      <div className='input-border'>
        <input className='input-border' type='text' placeholder={placeholder}
          onChange={(e) => setText(e.target.value)}>
        </input>
        <div className='icon-login'>{icon}</div>
      </div>
    </div>
  );
};
const InputTextNoBorderTopBot: React.FC<InputText> = (props) => {
  const { label, icon, iconRight, inputPos } = props;
  const [text, setText] = useState<null | string>('');
  return (
    <div className='input-no-border-field'>
      {inputPos === 'top' && <label>{label}</label>}
      <form className='input-no-border-field'>
        {!iconRight && <div className='icon-login'>{icon}</div>}
        <input className='input-no-border' type='text' onChange={(e) => setText(e.target.value)} />
        {iconRight && <div className='icon-login'>{icon}</div>}
      </form>
      {inputPos === 'bottom' && <label>{label}</label>}
    </div>
  );
};
const InputTextNoBorderLeftRight: React.FC<InputText> = (props) => {
  const { label, icon, iconRight, inputPos } = props;
  const [text, setText] = useState<null | string>('');
  return (
    <React.Fragment>
      <div className='input-no-border-inline-field'>
        {inputPos === 'left' && <label className='inline-input'>{label}</label>}
        <form className='input-no-border-inline-field'>
          {!iconRight && <div className='icon-login'>{icon}</div>}
          <input className='input-no-border' type='text' onChange={(e) => setText(e.target.value)} />
          {iconRight && <div className='icon-login'>{icon}</div>}
        </form>
        {inputPos === 'right' && <label className='inline-input'>{label}</label>}
      </div>
    </React.Fragment>
  );
};

export const ButtonComponent: React.FC<{ label: string }> = (val) => {
  const clickHandler = () => {
    console.log('Button triggered');
  };
  return (
    <div className='btn-screen'>
      <button className='btn' onClick={clickHandler}>{val.label}</button>
    </div>
  );
};