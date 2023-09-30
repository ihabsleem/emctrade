import "../css/sliderproduct.css";


import { useState } from "react";


const SliderProduct = () => {
    const [slideIndex, setSlideIndex ] = useState(1);
    
    function plusSlides(n){
      setSlideIndex(slideIndex + n);
      showSlides(slideIndex)
    }

    function showSlides(n) {
        
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {setSlideIndex(1)} 
        if (n < 1) {setSlideIndex(slides.length)}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
          }
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
    }
    
 
  
  return (
    <div className="slider-pro-container">
      <div className="mySlides" style={style}>
        <div className="numbertext">1 / 3</div>
        <img src="/products/pro 1/mechanical rotor.jpg" />
        <div className="text">Caption Text</div>
      </div>
      <div className="mySlides">
        <div className="numbertext">2 / 3</div>
        <img src="/products/pro 1/mechanical stator.jpg" />
        <div className="text">Caption Text</div>
      </div>
      <div className="mySlides">
        <div className="numbertext">3 / 3</div>
        <img src="/products/pro 1/mechanical.jpg" />
        <div className="text">Caption Text</div>
      </div>
      <a className="prev"  onClick={()=>plusSlides(1)}>❮</a>
      <a className="next" onClick={()=>plusSlides(-1)}>❯</a>
      <div className="allpic">
        <span className="dot" onClick={()=>setSlideIndex(1)}></span>
        <span className="dot"  onClick={()=>setSlideIndex(2)}></span>
        <span className="dot"  onClick={()=>setSlideIndex(3)}></span>
      </div>
    </div>
  );
};
const style = {

}

export default SliderProduct;
