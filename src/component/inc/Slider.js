import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img src='k.png' style={{height:'650px',width:'100%'}}/>
        <Carousel.Caption>
          <h3>Welcome to the company website </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='mnm.jpeg' style={{height:'650px',width:'100%'}}/>
        <Carousel.Caption>
          <h3>Welcome to the company website</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='l.jpg' style={{height:'650px',width:'100%'}}/>
        <Carousel.Caption>
          <h3>Welcome to the company website</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;