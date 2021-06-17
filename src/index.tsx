import React from 'react';
import ReactDOM from 'react-dom';
import './components/input-text/InputText.css';
import App from './App';
import { InputTextComponent, InputTextComponentWithBorder } from './components/input-text/InputText';

ReactDOM.render(
  <React.StrictMode>
    <InputTextComponent label='First Name'/>
    {/*If ones ONLY want to CHANGE icon in InputTextComponentWithBorder, 
    REMEMBER to add icon class and input-border class to make sure the icon is INSIDE the input text field 
    and NOT somewhere else*/}
    <InputTextComponentWithBorder  placeholder = 'email' icon = "fa fa-envelope icon input-border"/>
    <InputTextComponentWithBorder  placeholder = 'contact' icon = "fa fa-phone icon input-border"/>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root'));
