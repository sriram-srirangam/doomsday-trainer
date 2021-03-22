import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import testImage from "./test_img.png";

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          src={testImage}
          style={{ width: "100vw", height: "calc(100vh - 64px)" }}
          alt="First slide"
        />
        <Carousel.Caption style={{ color: "red" }}>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={testImage}
          style={{ width: "100vw", height: "calc(100vh - 64px)" }}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={testImage}
          style={{ width: "100vw", height: "calc(100vh - 64px)" }}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ControlledCarousel;
