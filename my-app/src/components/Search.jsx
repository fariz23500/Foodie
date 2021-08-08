import React from "react";
function Search()
{
    return  <div className="container-fluid  ">
    <div className="row search-bar ">
      <div className="col-lg-6  col-sm-6">
        <form className="d-flex location-input" action="/best-dishes">
          <input className="form-control-lg me-2 inp " type="search"  placeholder="Enter Location" aria-label="Enter" /> 
          <button className="btn btn-outline-warning" type="submit">Enter</button>
        </form>




      </div>


      <div className="col-lg-6 col-sm-6 example">

        <div id="carouselExampleInterval" className="carousel slide " data-bs-ride="carousel">
          <div className="carousel-inner food-carousel">
            <div className="carousel-item active" data-bs-interval="5000">
              <img className="food-img " src="https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg"  alt="biryani-image" /> 
            </div>
            <div className="carousel-item " data-bs-interval="5000">
              <img className="food-img " src="https://st.depositphotos.com/1900347/4146/i/600/depositphotos_41466555-stock-photo-image-of-slice-of-pizza.jpg"  alt="pizza-image" /> 
            </div>
            <div className="carousel-item">
              <img className="food-img " src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"  alt="burger-image" /> 
            </div>
          </div>
         
        </div>


      </div>
    </div>
  </div>
;
}
export default Search;