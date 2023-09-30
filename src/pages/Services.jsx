import CeoForm from "../component/CeoForm";
import SecondaryHead from "../component/SecondaryHead";
import "../css/services.css";
import TitleCont from "../ui/TitleCont";
import { Link } from "react-router-dom";


const Services = () => {
  return (
    <>
      <SecondaryHead
        imag={"/products/header/pexels-pixabay-162625.jpg"}
        headTitle={"SERVICES"}
      />
      <TitleCont />
      <div className="ser-cont">
        <div className="serv">
          <h2>planning factory</h2>
          <p>
            You can dream, create, design, and build the most wonderful place in
            the world. But it requires people.
          </p>
          <div className="read">read more</div>
          <div className="serv-icon">
            <img src="/products/header/14068302_169637816775420_1239657975696172122_n.jpg" />
          </div>
        </div>
        <div className="serv">
          <h2>install machine</h2>
          <p>
            You can dream, create, design, and build the most wonderful place in
            the world. But it requires people.
          </p>
          <div className="read">read more</div>
          <div className="serv-icon">
            <img src="/products/header/14068302_169637816775420_1239657975696172122_n.jpg" />
          </div>
        </div>
        <div className="serv">
          <h2>energy saving</h2>
          <p>
            You can dream, create, design, and build the most wonderful place in
            the world. But it requires people.
          </p>
          <div className="read">read more</div>
          <div className="serv-icon">
            <img src="/products/header/14068302_169637816775420_1239657975696172122_n.jpg" />
          </div>
        </div>

        <div className="serv">
          <h2>renew machines</h2>
          <p>
            You can dream, create, design, and build the most wonderful place in
            the world. But it requires people.
          </p>
          <div className="read">read more</div>
          <div className="serv-icon">
            <img src="/products/header/14068302_169637816775420_1239657975696172122_n.jpg" />
          </div>
        </div>

        <div className="serv">
          <h2>saving chemical</h2>
          <p>
            You can dream, create, design, and build the most wonderful place in
            the world. But it requires people.
          </p>
          <div className="read">read more</div>
          <div className="serv-icon">
            <img src="/products/header/14068302_169637816775420_1239657975696172122_n.jpg" />
          </div>
        </div>

       <div className="serv">
          <h2>maintenance</h2>
          <p> 
            You can dream, create, design, and build the most wonderful place in
            the world. But it requires people.
          </p><Link to="maintenance" style={{textDecoration: 'none',color:"inherit"}}> 
          <div className="read">read more</div> </Link>
          <div className="serv-icon">
            <img src="/products/header/14068302_169637816775420_1239657975696172122_n.jpg" />
          </div>
        </div>
        
      </div>
    <CeoForm/>
    </>
  );
};

export default Services;
