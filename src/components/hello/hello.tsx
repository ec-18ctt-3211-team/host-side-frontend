import React from 'react';
import s from './hello.module.css';

const Hello = (): JSX.Element => {
  return (
    <div className={[s.hello, 'bg-green-900'].join(' ')}>hello world!</div>
  );
};

export default Hello;
