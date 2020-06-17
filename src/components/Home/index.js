import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import bg1 from '../../images/bg-1.png';
import bg2 from '../../images/bg-2.png';
import bg3 from '../../images/bg-3.jpg';
import bg4 from '../../images/bg-4.jpg';
import bg5 from '../../images/bg-5.png';
import bg6 from '../../images/bg-6.jpg';
import './style.css';

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bg1}
            height="500"
            alt="First Slide"
          />
          <Container>
            <Carousel.Caption className="carousel-caption">
              <p style={{ fontSize: '52px' }}>When troubles crossed path on you</p>
            </Carousel.Caption>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bg2}
            height="500"
            alt="Second Slide"
          />

          <Carousel.Caption className="carousel-caption">
            <p style={{ fontSize: '52px' }}>Hope is never forgotten</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bg3}
            height="500"
            alt="Third Slide"
          />

          <Carousel.Caption className="carousel-caption">
            <p style={{ fontSize: '52px' }}>PHPLA the acronym of help</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bg4}
            height="500"
            alt="Fourth Slide"
          />

          <Carousel.Caption className="carousel-caption">
            <p style={{ fontSize: '52px' }}>Recovery is coming</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bg5}
            height="500"
            alt="Fifth Slide"
          />

          <Carousel.Caption className="carousel-caption">
            <p style={{ fontSize: '52px' }}>An afterthought of joy</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bg6}
            height="500"
            alt="Sixth Slide"
          />

          <Carousel.Caption className="carousel-caption">
            <h3 style={{ fontSize: '64px' }}>Beacuse We Care</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
