import react from "react";

const Footer = (props) =>{
    console.log(props);
    return(
       <div className="row fixed-bottom">
           <button className="btn btn-danger col-2 " onClick={()=>{props.resetFun()}}>Reset</button>
           <div className="col-8 bg-dark text-white text-center">{props.totalAmout}</div>
           <button className="btn btn-primary col-2">Pay Now</button>
       </div>
    )
};

export default Footer;