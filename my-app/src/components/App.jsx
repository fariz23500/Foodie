import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Search from "./Search";
import Card from "./Card";
import Download from "./Download";
import Footer from "./Footer";
import { bool } from "prop-types";
function App()
{
   

    const [image1,setImage1]=useState(false);
    const [image2,setImage2]=useState(false);
    const [image3,setImage3]=useState(false);
   
    return <div> 
    <NavBar />
    
    <Search/>
    <div class="container-fluid">
    <div className="row cards" >
    <Card hover={()=>{setImage1(true)}} out={()=>{setImage1(false)}} active={image1} source="https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg" name="biryani image" />
    <Card hover={()=>{setImage2(true)}} out={()=>{setImage2(false)}} active={image2} source="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" name="burger image" />
    <Card hover={()=>{setImage3(true)}} out={()=>{setImage3(false)}} active={image3} source="https://st.depositphotos.com/1900347/4146/i/600/depositphotos_41466555-stock-photo-image-of-slice-of-pizza.jpg" name="pizza image" />
    </div> </div>
    <Download/>
    <Footer/>
    </div>
    ;
}
export default App;
