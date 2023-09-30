import { Link } from "react-router-dom";
import SecondaryHead from "../component/SecondaryHead";
import "../css/spareparts.css";
import image from "../img/pexels-anamul-rezwan-1145434.jpg";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

import { FaFacebookMessenger } from "react-icons/fa";
import SwiperProducts from "../ui/SwiperProducts";
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
const SpareParts = () => {
  const [displayLay, setdisplayLay] = useState(false);
  const [proId, setProId] = useState("");
  const styleLay = { display: `${displayLay ? "block" : "none"}` };

  function showLay(n) {
    setdisplayLay(!displayLay);
    setProId(n);
    const cat = products.filter(
      (el) => el.category === `${categories[0]}`
    ).length;
    console.log(cat);
  }
  function hideLay() {
    setdisplayLay(!displayLay);
  }

  const categories = products
    .map((ele) => ele.category)
    .filter((el, i, arr) => arr.indexOf(el) === i);
  return (
    <main>
      <SecondaryHead imag={image} headTitle="SHOP" />
      <div className="container-main">
        <div className="container-shop">
          {products.map((ele) => (
            <div className="pro" key={ele.id}>
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
          ))}
          {/* <div className="pro"><img/><h3 className="title-pro"></h3><p className="price"></p></div>
          <div className="pro"><img/><h3 className="title-pro"></h3><p className="price"></p></div>
          <div className="pro"><img/><h3 className="title-pro"></h3><p className="price"></p></div>
          <div className="pro"><img/><h3 className="title-pro"></h3><p className="price"></p></div>
          <div className="pro"><img/><h3 className="title-pro"></h3><p className="price"></p></div>
          <div className="pro"><img/><h3 className="title-pro"></h3><p className="price"></p></div>
          <div className="pro"><img/><h3 className="title-pro"></h3><p className="price"></p></div>
          <div className="pro"><img/><h3 className="title-pro"></h3><p className="price"></p></div>
          <div className="pro"><img/><h3 className="title-pro"></h3><p className="price"></p></div>
          <div className="pro"><img/><h3 className="title-pro"></h3><p className="price"></p></div> */}
        </div>
        <div className="container-side">
          <div className="pro-search">
            <input placeholder="write what you search" />
            <div className="search-ic-pro">
              <FiSearch />
            </div>
          </div>
          <div className="catigories">
            <h2>categories</h2>
            {categories.map((ele, i) => (
              <div key={i} className="categ">
                <div>{ele}</div>
                <div>
                  {
                    products.filter((el) => el.category === `${categories[i]}`)
                      .length
                  }{" "}
                </div>
              </div>
            ))}
          </div>
          <div className="tags">
            <h2>tags</h2>
            {products
              .map((ele) => ele.machine)
              .filter((el, i, arr) => arr.indexOf(el) === i)
              .map((ele) => (
                <div className="tag" key={ele.id}>
                  {" "}
                  {ele}
                </div>
              ))}
          </div>
          <div className="social-pro">
            <a href="https://www.facebook.com/textilesparepart">
              <FaFacebookF />
            </a>
            <FaLinkedinIn />
            <FaTwitter />
            <FaWhatsapp />
            <FaYoutube />
            <FaFacebookMessenger />
          </div>
        </div>
      </div>
      <div className="best-pro">
        <div className="best-pro-head">
          <div>
            <h3>Our Best Products</h3>
            <h1>Featured products</h1>
          </div>
          <button>more details</button>
        </div>
        <SwiperProducts  showLay={showLay} hideLay={hideLay} styleLay={styleLay} proId={proId}/>
        {/* <div className="pro-second">
          <a className="prev">
            <FaAngleLeft />
          </a>
          <a className="next">
            <FaAngleRight />
          </a>
          {products.map((ele) => (
            <div className="pro" key={ele.id}>
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
          ))}
        </div> */}
      </div>
    </main>
  );
};

export default SpareParts;
