import style from "../../styles/ImageSliders.module.css";
import Arrows from "./Arrows";
import Dots from "./Dots";
import { useState, useEffect } from "react";
import { Flex } from "@theme-ui/components";
import SliderContent from "./SliderContent";

const ImageSliders = ({ images }) => {
  const len = images.length - 1;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  console.log(`Length is ${len}`);
  console.log("Active Index");
  console.log(activeIndex);

  return (
    <div className={style.slide_container}>
      <SliderContent activeIndex={activeIndex} imageSlider={images} />
      {/*********<Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      *** */}
      {/********* <Dots
        activeIndex={activeIndex}
        imageSlider={images}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
       *** */}
    </div>
  );
};

export default ImageSliders;
