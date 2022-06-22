import style from "../../styles/ImageSliders.module.css";

const Dots = ({ activeIndex, onclick, imageSlider }) => {
  return (
    <div className={style.all_dots}>
      {imageSlider.map((slide, index) => (
        <span
          key={index}
          className={`${index === activeIndex ? style.active_dot : style.dot}`}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  );
};

export default Dots;
