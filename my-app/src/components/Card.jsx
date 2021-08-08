import React from "react";

function Card(props){
    return <div className="col-lg-4 col-sm-6">
        <div className="card card-bg " style={{width: "18rem", backgroundColor:"#EFEFEF"}}>
          <a href="/best-dishes">
            <img onMouseOver={props.hover} onMouseOut={props.out} className={props.active? "card-img card-img-top hover":"card-img card-img-top"} src={props.source}  alt={props.name} /> 
          </a>



        </div>

      </div>

     
      
      
}
export default Card;