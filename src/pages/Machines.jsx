import "../css/machines.css";
import SecondaryHead from "../component/SecondaryHead";
import { Link } from "react-router-dom";

const machines = [
  {
    id: "2",
    url: "stenterinstal",
    name: "stenter installation",
    img: "/public/products/machines/unroll 4.JPG",
    discreption:
      "High Performance Services For Multiple Insdustries And Technologies",
    duration: "10",
  },
  {
    id: "5",
    url:"dryerinstall",
    name: "inspection",
    img: "/public/products/machines/4.JPG",
    discreption:
      "High Performance Services For Multiple Insdustries And Technologies",
    duration: "1",
  },
  {
    id: "3",
    url:"inspection",
    name: "inspection",
    img: "/public/products/machines/2.JPG",
    discreption:
      "High Performance Services For Multiple Insdustries And Technologies",
    duration: "10",
  },
  {
    id: "4",
    url: "stenterinstal",
    name: "steam network",
    img: "/public/products/machines/un roll 2.JPG",
    discreption:
      "High Performance Services For Multiple Insdustries And Technologies",
    duration: "20",
  },
  {
    id: "2",
    url: "stenterinstal",
    name: "stenter installation",
    img: "/products/machines/fab.JPG",
    discreption:
      "High Performance Services For Multiple Insdustries And Technologies",
    duration: "40",
  },
  {
    id: "4",
    url:"unroll",
    name: "un roll",
    img: "/public/products/machines/unroll.JPG",
    discreption:
      "High Performance Services For Multiple Insdustries And Technologies",
    duration: "60 ",
  },
];
const Machines = () => {
  return (
    <main>
     <SecondaryHead imag={'/public/products/manufacturing.jpg'} headTitle="machines"/>
      <div className="container-pro">
        {machines.map((pro) => (<Link key={pro.id} to={pro.url}
        style={{textDecoration: 'none',color:"inherit"}}>
          <div className="machines" >
            
            <div className="machines-img">
            <div className="lay"> </div>
              <img src={pro.img} />
            </div>
            <h3>{pro.name}</h3>
            <p>{pro.discreption}</p>
             <p className="pro-p">read more</p>
           
            <div className="pro-read"> </div>
          
  
          </div>
          </Link>
        ))}
        
       
      </div>
    </main>
  );
};

export default Machines;
