
import React, { useEffect, useState } from "react";
import RenderCard from './RenderCard';

let d=[];
function Hello(props){
    const [data,setData]=useState([]);
    useEffect(()=>{
          
      fetch("/api")
      .then((res)=>res.json())
      .then((datas)=>setData(datas));
  },[]);
  
  
  function dataMap(data){
    
    if(!data)
    return <div>Loading...</div>
    else
    return <RenderCard rating={props.rating} key={data._id} source={data.dishImage} name={data.dishName} restaurent={data.restaurentName} person={data.person} />
  
  }
  return  <div class="container-fluid">
  <div className="row cards" > 
   {
       (props.dat.length>0)?props.dat.map(dataMap):data.map(dataMap)} 
  </div>
  </div>
  
  
  };
  
  export default Hello;