import React from "react";
function NavBar()
{
    return <nav className="navbar navbar-expand-lg navbar-light bg-warning NavBar">
    <div className="container-fluid">
      <h1>Foodie</h1>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>


      <div className="collapse navbar-collapse NavbarItems" id="navbarSupportedContent">
        <ul className="navbar-nav nav ml-auto ">
          <li className="nav-item">
            <a className="nav-link title-item"  aria-current="page" href="/">Home</a>
          </li>
          
          <li className="nav-item title-item">
            <a className="nav-link"   href="/best-dishes">Best Dishes</a>
          </li>
          <li className="nav-item title-item">
            <a className="nav-link"  href="/#cta">Download</a>
          </li>


        </ul>

      </div>
    </div>
  </nav>;
}
export default NavBar;