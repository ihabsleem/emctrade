import TitleCont from "../ui/TitleCont";
import "../css/pricing.css";
import SecondaryHead from "../component/SecondaryHead";

const Pricing = () => {
  return (
    <div>
        <SecondaryHead
        imag={"/products/header/pexels-pixabay-162625.jpg"}
        headTitle={"Price Plans"}
      />
      <TitleCont />
      <div className="cont-pricing">
        <div className="card-pricing">
          <p>maintenance</p>
          <h1>1000 EG</h1>
          <h1>basic plan</h1>
          <p>Tempo sit amet ipsum dolor, consecter adipisi cing elit, lorem do incididu eiusmod tempor dolor</p>
          <button className='btn-1d'>select</button>
        </div>
        <div className="card-pricing">
          <p>maintenance</p>
          <h1>2000 EG</h1>
          <h1>standard plan</h1>
          <p>Tempo sit amet ipsum dolor, consecter adipisi cing elit, lorem do incididu eiusmod tempor dolor</p>
          <button className="btn-2d">select</button>
        </div>
        <div className="card-pricing">
          <p>maintenance</p>
          <h1>3000 EG</h1>
          <h1>advanced plan</h1>
          <p>Tempo sit amet ipsum dolor, consecter adipisi cing elit, lorem do incididu eiusmod tempor dolor</p>
          <button className="btn-3d">select</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
