import React from "react";
import Img from "./Assests/Img/members.jpg";
import Img0 from "./Assests/Img/youtube.png";
import Img1 from "./Assests/Img/facebook_logos_PNG19751.png";
import Img2 from "./Assests/Img/twitter-logo.png";


function About() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>HOME</li>
            <li>STORE</li>
            <li>ABOUT</li>
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
        <img height="300" width="500" src={Img} alt="members" />
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
              <li><img height="40"  src={Img0} alt="youtube-logo" /></li>
              <li><img height="40"  src={Img1} alt="facebook-logo" /></li>
              <li><img height="40"  src={Img2} alt="twitter-logo" /></li> 
          </ul>
      </footer>
    </div>
  );
}

export default About;
