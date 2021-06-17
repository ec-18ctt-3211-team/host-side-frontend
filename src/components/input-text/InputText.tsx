import React, { useState } from 'react';
import  './InputText.css';

interface BorderInputText{ 
    placeholder: string
    icon: string
}

export const InputTextComponent:React.FC<{label:string}> = (val) => {
  const [text, setText] = useState<null | string | undefined>('');

  const textHandler = (event: { target: { value: React.SetStateAction<string | null | undefined>; }; }) =>
  {
    console.log('triggered');
    setText(event.target.value);
  };
  return (
    <div className ='input-no-border'>
      <h3 style= {{ color: '#00000', fontSize: '0.75rem' }}>{val.label}</h3>
      <input className= 'w3-input' style={{ width: '25%' } } type='text'
        onChange={textHandler}/>
    </div>
  );
};

export const InputTextComponentWithBorder: React.FC<BorderInputText> = (props) => {
  const { placeholder, icon } = props;

  const [text, setText] = useState<null | string | undefined>('');
  const textHandler = (event: { target: { value: React.SetStateAction<string | null | undefined>; }; }) =>{
    console.log('triggered');
    setText(event.target.value);
  };
  return (
    <div className='input-border-field'>
      <div className='input-border'>
        <input className='input-border' style={{ width: '100%' }} type='text' placeholder={placeholder}
          onChange={ textHandler }></input>
        <i className={ icon }></i>
      </div>
    </div>
  );
};
/*
export const ButtonComponent:React.FC<{label:string}> = (val) =>{
    const clickHandler = ()=>{
        console.log('Button triggered')
    }
    return(
        <>
        <button className='btn' onClick={clickHandler}>{val.label}</button>
        </>
    )
}*/
