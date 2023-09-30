import { FaQuoteLeft } from "react-icons/fa6";
import "../css/ceoForm.css"
const CeoForm = () => {
    return (
        <div className="touch">
        <div className="vision">
          <h3>vision & mission statement</h3>
          <h1>
            Serving Impressive List Of <br></br>Long Term Clients!
          </h1>
          <p>
            Our worldwide presence ensures timeliness, cost efficiency and
            compliance adherence required to ensure your timelines are met.
            Serving with experience aNd expertise in multiple industries, as one
            of the {`World'`}s leading Corporation!
          </p>
          <div className="mov"></div>
          <div className="ceo">
            <div className="ceo-icon">
              <div>
                <FaQuoteLeft size={70} color="grey"/>
              </div>
              <p>
                Many of Our SELF registered employees are requested an main
                preferred temporary staff when all service
              </p>
            </div>
            <p className="sig">Ehab Sleem, CEO</p>
          </div>
        </div>
        <form>
          <div className="one">
            Feel free to get<br></br> touch !
          </div>
          <div className="two">
            <input placeholder="Name" />
            <input placeholder="Mail" />
            <input placeholder="Phone" />
            <input placeholder="Subject" />
          </div>
          <div className="three">
            <textarea type="text" placeholder="Message" rows={5} />
          </div>
          <div className="four">
            <button>Send us a Message</button>
          </div>
        </form>
      </div>
    );
}

export default CeoForm;
