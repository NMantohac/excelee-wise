import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import bg1 from '../../images/jumbotron-background.jpg';
import bg2 from '../../images/bg-1.jpg';
import './style.css';

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bg2}
            height="500"
            alt="First Slide"
          />
          <Container>
            <Carousel.Caption className="carousel-caption">
              <h3 style={{ fontSize: '64px' }}>Encouragement</h3>
              <p style={{ fontSize: '40px' }}>When troubles crossed path on you</p>
            </Carousel.Caption>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bg1}
            height="500"
            alt="Second Slide"
          />

          <Carousel.Caption className="carousel-caption">
            <h3 style={{ fontSize: '64px' }}>Hope</h3>
            <p style={{ fontSize: '40px' }}>Hope is never forgotten</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bg1}
            height="500"
            alt="Third Slide"
          />

          <Carousel.Caption className="carousel-caption">
            <h3 style={{ fontSize: '64px' }}>Love</h3>
            <p style={{ fontSize: '40px' }}>PHPLA the acronym of help</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bg1}
            height="500"
            alt="Fourth Slide"
          />

          <Carousel.Caption className="carousel-caption">
            <h3 style={{ fontSize: '64px' }}>Recovery</h3>
            <p style={{ fontSize: '40px' }}>Recovery is coming</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bg1}
            height="500"
            alt="Fifth Slide"
          />

          <Carousel.Caption className="carousel-caption">
            <h3 style={{ fontSize: '64px' }}>Joy</h3>
            <p style={{ fontSize: '40px' }}>An afterthought of joy</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bg1}
            height="500"
            alt="Sixth Slide"
          />

          <Carousel.Caption className="carousel-caption">
            <h3 style={{ fontSize: '64px' }}>Beacuse We Care</h3>
            <p style={{ fontSize: '40px' }}>People Helping People</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
