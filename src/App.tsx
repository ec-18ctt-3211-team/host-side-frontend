import React from 'react';
import Template from 'pages/template';
import './components/input-text/InputText.css';
import { InputTextComponent, ButtonComponent } from './components/input-text/InputText';
import { FaEnvelope, FaPhone, FaChevronCircleDown } from 'react-icons/fa';

function App() {
  return (
    <React.Fragment>
      {/*<Template />*/}
      <InputTextComponent label='FirstName' placeholder='name' fullBorder={false} inputPos='top' 
        icon={<FaChevronCircleDown />} iconRight={true}/>
      <InputTextComponent label='LastName' placeholder='name' fullBorder={false} inputPos='bottom' 
        icon={<FaChevronCircleDown />} iconRight={false}/>
      <div className='screen'>
        <InputTextComponent placeholder='email' icon={<FaEnvelope />} fullBorder={true} />
        <InputTextComponent placeholder='contact' icon={<FaPhone />} fullBorder={true} />
        <ButtonComponent label='LOGIN' />
      </div>
    </React.Fragment>
  );
}

export default App;
