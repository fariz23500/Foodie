import React from "react";

function RenderCard(props) {
function PersonMap(person)
{
    return <div style={{minHeight : "120px"}}> 
    <div class="collapse collapse-horizontal" id="collapseWidthExample"> <div class="card-body ">
    <h4 class="card-text" style={{marginLeft:"80px"}}>Name: {person.name}</h4>
    <h5 class="card-text" style={{marginLeft:"80px"}}>rating: {person.rating}</h5>
    <h5 class="card-text" style={{marginLeft:"80px"}}>review: {person.review}</h5>
</div> </div>  </div>
}
let rating=0;
props.person.map((person)=>rating=rating+person.rating);
rating =rating/props.person.length;
if(rating<props.rating)
return null;
  return ( <div className="col-lg-4 col-sm-6">
  <div className="card card-bg " style={{width: "18rem", backgroundColor:"white",marginBottom:"20px"}}>
    <a href="#">
      <img className="card-img card-img-top" src={props.source}  alt={props.name} /> 
    </a>
    <div className="card-body">
    <h3 className="card-title" style={{marginLeft:"80px"}}>{props.restaurent}</h3>
    <h5 className="card-text" style={{marginLeft:"80px"}}>{props.name}</h5>
    <h5 className="card-text" style={{marginLeft:"80px"}}>Rating : {rating} </h5>
    <div>
    <p>
  <button style={{marginLeft:"110px"}} className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
    Review
  </button>
</p>

  
  {props.person.map(PersonMap)}
  
    </div>
 

     
</div>
  </div>

</div>
    
  );
}
export default RenderCard;
