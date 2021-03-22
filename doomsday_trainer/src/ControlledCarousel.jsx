import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import Paper from "@material-ui/core/Paper";
import slide1 from "./slides/slides.001.jpeg";
import slide2 from "./slides/slides.002.jpeg";
import slide3 from "./slides/slides.003.jpeg";
import slide4 from "./slides/slides.004.jpeg";
import slide5 from "./slides/slides.005.jpeg";
import slide6 from "./slides/slides.006.jpeg";
import slide7 from "./slides/slides.007.jpeg";
import slide8 from "./slides/slides.008.jpeg";
import slide9 from "./slides/slides.009.jpeg";
import slide10 from "./slides/slides.010.jpeg";
import slide11 from "./slides/slides.011.jpeg";
import slide12 from "./slides/slides.012.jpeg";
import slide13 from "./slides/slides.013.jpeg";
import slide14 from "./slides/slides.014.jpeg";

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const carouselItemSources = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
    slide9,
    slide10,
    slide11,
    slide12,
    slide13,
    slide14,
  ];

  const carouselItems = carouselItemSources.map((src, index) => {
    return (
      <Carousel.Item>
        <img
          src={src}
          style={{ width: "100vw", height: "calc(100vh - 64px)" }}
          alt={`Slide ${index}`}
        />
      </Carousel.Item>
    );
  });

  return (
    <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
      {carouselItems}
      <Carousel.Item>
        <Paper
          style={{
            width: "100vw",
            height: "calc(100vh - 64px)",
            backgroundColor: "gray",
          }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ControlledCarousel;
