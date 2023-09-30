import "../css/saving.css";
import reduce from "../img/reduce-energy-.jpg";
const Saving = () => {
  return (
    <div className="saving">
        
      <div className="img">
        <h1  >decrease consumptions</h1>
        <img src={reduce} alt="" />
      </div>
      <div className="text">
        <h2>start saving consumption</h2>
        <ul>
          <li> finishing traf</li>
          <li> filling system</li>
          <li> squeezing unit</li>
          <li> drying system</li>
        </ul>
      </div>
    </div>
  );
};

export default Saving;
