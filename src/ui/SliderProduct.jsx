import "../css/sliderproduct.css";
import ImageSlide from "./ImageSlide";
const slides=[{url:'/products/pro 1/mechanical rotor.jpg', title: 'rotor'},
{url:'/products/pro 1/mechanical stator.jpg' , title: 'stator'},
{url:'/products/pro 1/mechanical.jpg' , title: 'main'}];

const SliderProduct = () => {
    return (
        <div style={containerStyles}>
            <ImageSlide slides={slides} />
        </div>
    );
}
const containerStyles={width: '250px',
height: '30vh',
}

export default SliderProduct;
