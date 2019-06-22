import React from "react";
import Img from "./Assests/Img/Band Members.png";
import Img0 from "./Assests/Img/YouTube Logo.png";
import Img1 from "./Assests/Img/Facebook Logo.png";
import Img2 from "./Assests/Img/Spotify Logo.png";
import { Link } from "react-router-dom";
import "./Assests/Css/Style.css";

function About() {
  return (
    <div>
      <header class="main-header">
        <nav class="nav main-nav ">
          <ul>
            <Link to="/">
              {" "}
              <li>HOME</li>
            </Link>
            <Link to="/store">
              {" "}
              <li>STORE</li>
            </Link>
            <Link to="/about">
              {" "}
              <li>ABOUT</li>
            </Link>
          </ul>
        </nav>
        <h1 class="band-name band-name-large">The Generics</h1>
      </header>
      <section class="content-section container">
        <h2 class="section-header">ABOUT</h2>
        <img class="about-band-image" src={Img} alt="members" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac
          purus a urna efficitur pretium. Donec in elit leo. Mauris nec volutpat
          velit. Nam cursus metus non justo sodales, ac facilisis felis
          pharetra. Fusce sed gravida nunc. Nullam vestibulum lectus nisl, vel
          rhoncus tellus luctus vitae. Sed sit amet iaculis turpis. Vestibulum
          placerat sodales mattis.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vivamus ac purus a urna efficitur pretium. Donec in
          elit leo. Mauris nec volutpat velit. Nam cursus metus non justo
          sodales, ac facilisis felis pharetra. Fusce sed gravida nunc. Nullam
          vestibulum lectus nisl, vel rhoncus tellus luctus vitae. Sed sit amet
          iaculis turpis. Vestibulum placerat sodales mattis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac
          purus a urna efficitur pretium. Donec in elit leo. Mauris nec volutpat
          velit. Nam cursus metus non justo sodales, ac facilisis felis
          pharetra. Fusce sed gravida nunc. Nullam vestibulum lectus nisl, vel
          rhoncus tellus luctus vitae. Sed sit amet iaculis turpis. Vestibulum
          placerat sodales mattis.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac
          purus a urna efficitur pretium. Donec in elit leo. Mauris nec volutpat
          velit. Nam cursus metus non justo sodales, ac facilisis felis
          pharetra. Fusce sed gravida nunc. Nullam vestibulum lectus nisl, vel
          rhoncus tellus luctus vitae. Sed sit amet iaculis turpis. Vestibulum
          placerat sodales.
        </p>
      </section>
      <footer class="main-footer">
        <div class="container main-footer-container">
        <h3 class="band-name">The Generics</h3>
        <ul class="nav footer-nav">
          <li>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={Img0} alt="youtube-logo" />
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={Img1} alt="facebook-logo" />
            </a>
          </li>
          <li>
            <a
              href="https://spotify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={Img2} alt="twitter-logo" />
            </a>
          </li>
        </ul>
        </div>
      </footer>
    </div>
  );
}

export default About;
