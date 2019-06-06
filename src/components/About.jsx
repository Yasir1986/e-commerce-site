import React from "react";
import Img from "./Assests/Img/Band Members.png";
import Img0 from "./Assests/Img/YouTube Logo.png";
import Img1 from "./Assests/Img/Facebook Logo.png";
import Img2 from "./Assests/Img/Spotify Logo.png";
import { Link  } from "react-router-dom";


function About() {
  return (
    <div>
      <header>
        <nav>
          <ul>
          <Link to="/">  <li>HOME</li></Link>
          <Link to="/store"> <li>STORE</li></Link>
          <Link to="/about"> <li>ABOUT</li></Link>
          </ul>
        </nav>
        <hr />
        <h1>The Generics</h1>
      </header>
      <section>
        <h2>ABOUT</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac
          purus a urna efficitur pretium. Donec in elit leo. Mauris nec volutpat
          velit. Nam cursus metus non justo sodales, ac facilisis felis
          pharetra. Fusce sed gravida nunc. Nullam vestibulum lectus nisl, vel
          rhoncus tellus luctus vitae. Sed sit amet iaculis turpis. Vestibulum
          placerat sodales mattis.
        </p>
        <img src={Img} alt="members" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac
          purus a urna efficitur pretium. Donec in elit leo. Mauris nec volutpat
          velit. Nam cursus metus non justo sodales, ac facilisis felis
          pharetra. Fusce sed gravida nunc. Nullam vestibulum lectus nisl, vel
          rhoncus tellus luctus vitae. Sed sit amet iaculis turpis. Vestibulum
          placerat sodales mattis.
        </p>
      </section>
      <footer>
          <h3>The Generics</h3>
          <ul>
              <li>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">  <img src={Img0} alt="youtube-logo" /></a>
                </li>
              <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">  <img src={Img1} alt="facebook-logo" /></a>
                </li>
              <li>
              <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">  <img src={Img2} alt="twitter-logo" /></a>
                </li> 
          </ul>
      </footer>
    </div>
  );
}

export default About;
