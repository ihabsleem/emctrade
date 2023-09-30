import { useEffect } from "react";
import { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const ImageSlide = ({ slides }) => {
  const [currentIndex, setCurrent] = useState(0);
  const dots = document.getElementsByClassName("dot");
  useEffect(() => {
    addClass(0);
  }, []);

  const sliderstyle = { height: "100%", position: "relative" };
  const slideStyle = {
    backgroundImage: `url("${slides[currentIndex].url}")`,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
  };

  function gotoNext() {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrent(newIndex);
    addClass(newIndex);
  }
  function gotoPrev() {
    const isFirstSlid = currentIndex === 0;
    const newIndex = isFirstSlid ? slides.length - 1 : currentIndex - 1;
    setCurrent(newIndex);
    addClass(newIndex);
  }
  function gotoIndex(n) {
    setCurrent(n);
    addClass(n);
  }
  function addClass(n) {
    let i;

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[n].className += " active";
  }

  return (
    <div style={sliderstyle}>
      <div style={slideStyle} className="fade">
        <div className="numbertext"> {currentIndex + 1} / 3</div>
      </div>
      <a className="prev" onClick={gotoPrev}>
        <FaAngleLeft />
      </a>
      <a className="next" onClick={gotoNext}>
        <FaAngleRight />
      </a>
      <div className="container-dot">
        {slides.map((slide, slideIndex) => (
          <span
            key={slideIndex}
            className={"dot"}
            onClick={() => gotoIndex(slideIndex)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlide;
