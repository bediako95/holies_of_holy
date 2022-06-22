import style from "../../styles/ImageSliders.module.css";

const Arrows = ({ prevSlide, nextSlide }) => {
  return (
    <div>
      <span className={style.prev} onClick={prevSlide}>
        &#10094;
      </span>
      <span className={style.next} onClick={nextSlide}>
        &#10095;
      </span>
    </div>
  );
};

export default Arrows;
