import Image from "next/image";
import style from "../../styles/ImageSliders.module.css";

const SliderContent = ({ activeIndex, imageSlider }) => {
  return (
    <section>
      {imageSlider.map((slide, index) => (
        <div
          key={index}
          className={style.slider_content}
          style={{
            display: `${index === activeIndex ? "" : "none"}`,
            // transform: "translateX(0)",
          }}
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
