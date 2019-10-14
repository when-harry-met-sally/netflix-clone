import React from "react";
import netflix from '../assets/netflix-logo.png';
function Navigation() {
  function fixNav() {
    const nav = document.getElementById('myTopnav');
    if (window.scrollY !== 0) {
     nav.classList.add("black-nav");
    } else {
     nav.classList.remove("black-nav");
    }
  }
  console.log()
  window.addEventListener("scroll", fixNav);

  return (
    <div className="topnav valign-wrapper" id="myTopnav">
      <a href=""  className='logo' ><img className='logo-image'src={netflix}/></a>
      <span>
      <a href="#home" className="active">
        Home
      </a>
      <a href="#news">Shows</a>
      <a href="#contact">Movies</a>
      <a href="#about">Recently Added</a>
      <a href="#about">My List</a>
      <a href="#about">Settings</a>
      </span>
    </div>
  );
}

export default Navigation;
