// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation , Autoplay , Pagination} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';



function MachineSlider () {
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
      <SwiperSlide><img src={'/public/products/machines/2.JPG'} alt="55"style={{width:'100%'}} /></SwiperSlide>
      <SwiperSlide><img src={'/public/products/machines/7.JPG'} alt="55" style={{width:'100%'}}/></SwiperSlide>
      <SwiperSlide><img src={'/public/products/machines/fab.JPG'}alt="55" style={{width:'100%'}}/></SwiperSlide>
      <SwiperSlide><img src={'/public/products/machines/unroll.JPG'} alt='logo4'style={{width:'100%'}}/></SwiperSlide>
      <SwiperSlide><img src={'/public/products/machines/2.JPG'} alt='logo4'style={{width:'100%'}}/></SwiperSlide>
      <SwiperSlide><img src={'/public/products/machines/fab.JPG'} alt='logo4'style={{width:'100%'}}/></SwiperSlide>
      ...
      
    </Swiper>

    </div>
  );
}

export default MachineSlider;