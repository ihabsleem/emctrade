// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import { Link } from "react-router-dom";
const products = [
  {
    title: "valve",
    id: "8",
    machine: "dye",
    category: "mechanical",
    brand: "thies",
    img: "/products/107793730_824983694574159_8017554698846829700_n.jpg",
    price: "200",
    specifications: { material: "", width: "", height: "", thichness: "" },
  },
  {
    title: "bolt",
    id: "7",
    machine: "dye",
    category: "mechanical",
    brand: "thies",
    img: "/products/13925059_169657460106789_2278296289982560048_n.jpg",
    price: "200",
    specifications: { material: "", width: "", height: "", thichness: "" },
  },
  {
    title: "nut",
    id: "5",
    machine: "dryer",
    brand: "entema",
    category: "bolts",
    img: "/products/16864814_233541353718399_3119107082528713337_n.jpg",
    price: "200",
    specifications: { material: "", width: "", height: "", thichness: "" },
  },
  {
    title: "nut",
    id: "01",
    machine: "stenter",
    category: "gear",
    brand: "bruckner",
    img: "/products/13938049_169657530106782_7043675154757265512_o.jpg",
    price: "50",
    specifications: { material: "", width: "", height: "", thichness: "" },
  },
  {
    title: "pin",
    id: "1",
    machine: "stenter",
    brand: "monforts",
    category: "belts",
    img: "../../public/products/16997758_233985613673973_5616205370126605245_n.jpg",
    price: "",
    specifications: { material: "", width: "", height: "", thichness: "" },
  },
  {
    title: "bolt",
    id: "3",
    machine: "dye",
    brand: "thies",
    category: "pnumatic",
    img: "/products/17862656_248999258839275_5305367467256156785_n.jpg",
    price: "100",
    specifications: { material: "", width: "", height: "", thichness: "" },
  },
  {
    title: "mechanical",
    id: "4",
    machine: "dyeing",
    category: "grease",
    brand: "thies",
    img: "/products/14057732_1184810784924361_1238926226_n.jpg",
    price: "100",
    specifications: { material: "", width: "", height: "", thichness: "" },
  },
];

function SwiperProducts({showLay , hideLay ,styleLay ,proId}) {
  return (
    <div className="SwiperProducts">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          {/* <img src={logo1} alt="55" style={{ width: "100%" }} /> */}
        </SwiperSlide>
        {products.map((ele) => (<SwiperSlide key={ele.id}>
            <div className="pro" >
              {proId === ele.id && (
                <div className="pro-lay" style={styleLay}></div>
              )}
              <div className="pro-img">
                <img src={ele.img} />
              </div>
              <Link to="product">
                <h3
                  className="title-pro"
                  onMouseLeave={hideLay}
                  onMouseEnter={() => showLay(ele.id)}
                >
                  {ele.title}
                </h3>
              </Link>
              <p className="price">{ele.price} L.E</p>
            </div>
            </SwiperSlide>
          ))}

 
        ...
      </Swiper>
      
    </div>
  );
}

export default SwiperProducts;
