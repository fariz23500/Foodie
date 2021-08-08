import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Hello from './Data';
function BestDishes(){
  const [dishName,setDishName]=useState("");
  const [data,setData]=useState([]);
  const [rating,setRating]=useState();
  function handleChange(event)
  {
    
    setDishName(event.target.value);
  }
//   useEffect(()=>{
//     console.log(rating);
    
// },[rating]);
function Datas(){ 
  return <Hello dat={data} rating={rating} />
}
  function HandleSubmit(event)
   { 
    

  
       fetch("/api",{method:'POST', headers: {"Content-Type": "application/json"},body:JSON.stringify({dishName:dishName})})
    .then(function(response){
       return response.json()
    }).then(function(datas){
      setData(datas);
      
    });
    
    
     
  event.preventDefault();
    
  }
    return <div>
    <NavBar />
    <div className="search-input">
    <form className="d-flex dish-input" onSubmit={HandleSubmit}>
      <input className="form-control-lg me-2 inp " type="search" value={dishName}  onChange={handleChange} name="dishName" placeholder="search food item" aria-label="Enter" />
      <button className="btn btn-outline-warning"  type="submit">Enter</button>
    </form>
    {/* onClick={()=>window.location.reload(false)} */}
  </div>

  <div className="btn-group filters" role="group" aria-label="Basic checkbox toggle button group">
    <input type="checkbox" className="btn-check" id="btncheck1" autocomplete="off"/>
    <label className="btn btn-outline-primary filter-btn" for="btncheck1">veg</label>

    <input type="checkbox" className="btn-check" id="btncheck2" autocomplete="off"/>
    <label className="btn btn-outline-primary filter-btn" for="btncheck2">non-veg</label>

    <input type="checkbox" className="btn-check" id="btncheck3" autocomplete="off"/>
    <label className="btn btn-outline-primary filter-btn" for="btncheck3">vegan</label>

    <div className="dropdown " style={{margin:"20px 20px 20px 0"}}>
  <button className="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >
    Rating
  </button>
  <ul className="dropdown-menu"  aria-labelledby="dropdownMenuButton1">
    <li ><a className="dropdown-item" name="4" onClick={(event)=>setRating(event.target.name)}  href="#">4+</a></li>
    <li><a className="dropdown-item" onClick={(event)=>setRating(event.target.name)} name='3' href="#">3+</a></li>
    <li><a className="dropdown-item" onClick={(event)=>setRating(event.target.name)} name='2' href="#">2+</a></li>
  </ul>
</div>
  </div>
<Datas/>
    </div>;
}
export default BestDishes;