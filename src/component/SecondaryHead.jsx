
import "../css/secondHead.css"
const SecondaryHead = ({imag , headTitle ,styleHead , styleImage }) => {
 
    return (
        <div className="img-head" style={styleHead}>
        <div className="img-title" >{headTitle}</div>
        <img style={styleImage} src={imag}  />
        
      </div>
    );
    

}

export default SecondaryHead;
