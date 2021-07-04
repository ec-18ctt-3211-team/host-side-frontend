import React, { useState } from 'react';
import Layout from 'components/layout';
import 'styles/view-a-place.css';
import { ButtonComponent } from 'components/input-text/InputText';
import { ImageSlider } from 'components/image-slider';
import { ROOMS } from 'constants/images.const';
import DivPx from 'components/divpx';
interface IDescription {
  title?: string;
  author?: string;
  room?: string;
  price?: string;
  content?: string;
}

export default function Viewaplace(): JSX.Element {
  const [isAuthorized, setAuthorize] = useState(true);
  return (
    <Layout isAuthorized={isAuthorized} setAuthorized={setAuthorize}>
      <ImageSlider limit={3} images={ROOMS} />
      <DivPx size={48} />
      <div className="containing">
        <WallofDescriptionTest></WallofDescriptionTest>
        <BookDialogue></BookDialogue>
      </div>
    </Layout>
  );
}

const WallofDescriptionTest: React.FC<IDescription> = (props) => {
  const [place, setPlace] = useState({
    title: 'LUXURY HOMESTAY',
    host: 'by Homestay LA',
    room: 'Homestay - 2 bedrooms',
    price: '$100 per night',
    content: '',
  });
  return (
    <React.Fragment>
      <div className="content">
        <h1>{place.title}</h1>
        <span>{place.host}</span>
        <p>{place.room}</p>
        <p>{place.price}</p>
        <div className="intro">
          <p>
            {place.content || (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, officia quod sunt provident debitis quas accusantium
                impedit incidunt consectetur, expedita beatae, ducimus hic
                aliquam quasi consequatur dolores ex modi velit. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Dolore nesciunt
                sed perspiciatis soluta necessitatibus, optio porro magnam
                blanditiis dignissimos tenetur laboriosam, atque fugit laborum
                aliquam illo odio, quia odit. Praesentium! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Molestiae, expedita ducimus!
                Placeat, molestias corrupti consequatur voluptas, ipsum magnam
                harum itaque dicta eum eos, ipsam ut amet provident porro
                dignissimos delectus. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptate facilis iusto nemo. Et, consequatur!
                Facilis, dolore omnis, nulla praesentium illo architecto libero
                esse at magni atque quibusdam rem temporibus minus? Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Voluptatem eius,
                ducimus architecto molestias quo rerum amet consectetur
                perspiciatis aliquam non quidem tempora tenetur nulla neque,
                voluptatum modi veniam hic at?
              </p>
            )}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

const BookDialogue: React.FC<IDescription> = (props) => {
  const [price, setPrice] = useState('1000$');
  return (
    <React.Fragment>
      <div className="dialogue">
        <div className="inner-dialogue">
          <span id="price">{price}</span>
          <span>/night</span>
          <div className="inline-mul-input">
            <label> from </label>
            <input
              type="date"
              placeholder="from"
              className="input-text"
            ></input>
            <label> to </label>
            <input type="date" placeholder="to" className="input-text"></input>
          </div>
          <input
            type="number"
            min={1}
            placeholder="1 guest"
            className="input-text"
          ></input>
          <div className="center-btn">
            <ButtonComponent label="Book Now"></ButtonComponent>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
