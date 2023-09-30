import logo1 from "../img/pexels-alena-darmel-7176704.jpg"
import logo2 from "../img/pexels-alexander-grey-3694871.jpg"
import logo3 from "../img/pexels-anamul-rezwan-1145434.jpg"
import logo4 from "../img/pexels-lukas-317333.jpg" ;

const Slider2 = () => {
    return (
        <div className='slider1'>
            <div className='slides1'>
                <input type="radio" name="radio-btn" id="radio1"/>
                <input type="radio" name="radio-btn" id="radio2"/>
                <input type="radio" name="radio-btn" id="radio3"/>
                <input type="radio" name="radio-btn" id="radio4"/>
                <input type="radio" name="radio-btn" id="radio5"/>
                <div className="slide-first"><img src={logo1}></img></div>
                <div className="slide"><img src={logo2}></img></div>
                <div className="slide"><img src={logo3}></img></div>
                <div className="slide"> <img src={logo4}></img></div>

            </div>
            
        </div>
    );
}

export default Slider2;
