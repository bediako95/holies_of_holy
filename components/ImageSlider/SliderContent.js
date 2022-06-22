import Image from "next/image";
import style from "../../styles/ImageSliders.module.css";

const SliderContent = ({ activeIndex, imageSlider }) => {
  return (
    <section>
      {imageSlider.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? style.active : style.inactive}
        >
          <img
            src={slide.image_slide}
            alt="Slide image"
            className={style.slide_image}
          />
        </div>
      ))}
    </section>
  );
};

export default SliderContent;
