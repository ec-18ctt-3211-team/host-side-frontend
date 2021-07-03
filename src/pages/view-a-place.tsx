import React, { useState } from 'react';
import Layout from 'components/layout';
import 'styles/view-a-place.css';
import { ButtonComponent } from 'components/input-text/InputText';
interface IDescription {
    title? : string;
    author? : string;
    room? : string;
    price? : string;
    content? : string;
}

export default function Viewaplace(): JSX.Element {
  const [isAuthorized, setAuthorize] = useState(true);
  return (
    <React.Fragment>
      <div>
        <Layout isAuthorized={isAuthorized} setAuthorized={setAuthorize}>
          <div></div>
        </Layout>
      </div>
      <div className='containing'>
        <WallofDescriptionTest></WallofDescriptionTest>
        <BookDialogue></BookDialogue>
      </div>
    </React.Fragment>  
  );
}

const WallofDescriptionTest: React.FC<IDescription> = (props) =>{
  const [place, setPlace] = useState({ title: 'LUXURY HOMESTAY', host: 'by Homestay LA', 
    room:'Homestay - 2 bedrooms', price: '$100 per night', content: '' });
  return (
    <React.Fragment>
      <div className='content'>
        <h1>{ place.title }</h1>
        <span>{ place.host }</span>
        <p>{ place.room }</p>
        <p>{ place.price }</p>
        <div className='intro'>
          <p>
            {place.content || <p>lorem20</p>}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

const BookDialogue: React.FC<IDescription> = (props) =>{
  const [price, setPrice] = useState('1000$');
  return(
    <React.Fragment>
      <div className='dialogue'>
        <div className='inner-dialogue'>
          <span id='price'>{price}</span>
          <span>/night</span>
          <div className='inline-mul-input'>
            <label> from </label>
            <input type='date' placeholder='from'></input>
            <label> to </label>
            <input type='date' placeholder='to'></input>
          </div>
          <input type='number' placeholder='1 guest'></input>
          <div className='center-btn'>
            <ButtonComponent label ='Book Now'></ButtonComponent>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};