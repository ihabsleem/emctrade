// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation , Autoplay , Pagination} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import logo1 from "../img/pexels-alena-darmel-7176704.jpg"
import logo2 from "../img/pexels-alexander-grey-3694871.jpg"
import logo3 from "../img/pexels-anamul-rezwan-1145434.jpg"
import logo4 from "../img/pexels-pixabay-162625.jpg" ;
import logo6 from "../img/pexels-rfstudio-3825573.jpg" ;
import logo5 from "../img/25.jpg";

function Slider () {
  return (<div className='slider'> 
    
    <Swiper navigation={true} modules={[Navigation ,Autoplay ,Pagination]} autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={logo1} alt="55"style={{width:'100%'}} /></SwiperSlide>
      <SwiperSlide><img src={logo2} alt="55" style={{width:'100%'}}/></SwiperSlide>
      <SwiperSlide><img src={logo3}alt="55" style={{width:'100%'}}/></SwiperSlide>
      <SwiperSlide><img src={logo4} alt='logo4'style={{width:'100%'}}/></SwiperSlide>
      <SwiperSlide><img src={logo5} alt='logo4'style={{width:'100%'}}/></SwiperSlide>
      <SwiperSlide><img src={logo6} alt='logo4'style={{width:'100%'}}/></SwiperSlide>
      ...
      
    </Swiper>
    <div className='overlay'><h1 className='over'>High Performance</h1>
    <div>services for textile industries</div>
    <p>in the world of textile industries we cast quit a shadow. innovative products and services</p>
    <button>Book a Service Now</button></div>
    </div>
  );
}

export default Slider;