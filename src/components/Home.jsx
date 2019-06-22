import React from "react";
import Img0 from "./Assests/Img/YouTube Logo.png";
import Img1 from "./Assests/Img/Facebook Logo.png";
import Img2 from "./Assests/Img/Spotify Logo.png";
import { Link } from "react-router-dom";
import "./Assests/Css/Style.css";

function Home() {
  return (
    <div>
      <header class="main-header">
        <nav class="nav main-nav ">
          <ul>
            <Link to="/">
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
        <div class="container">
          <button class="btn btn-header" type="button">
            Get Our Latest Album
          </button>
        </div>
        <button class="btn btn-header btn-play" type="button">
          &#9658;
        </button>
      </header>
      <section class="content-section container">  
        <h2 class="section-header">TOURS</h2>
        <div>
          <div class="tour-row">
            <span class="tour-item tour-date">JUL 16</span>
            <span class="tour-item tour-city">DETROIT, MI</span>
            <span class="tour-item tour-arena">DTE ENERGY MUSIC CENTER</span>
            <button class="btn tour-item tour-btn btn-primary" type="button">BUT TICKETS</button>
          </div>
          <div  class="tour-row">
            <span class="tour-item tour-date">JUL 19</span>
            <span class="tour-item tour-city">TORONTO, ON</span>
            <span class="tour-item tour-arena">BUD WISER SATGE</span>
            <button class="btn tour-item tour-btn btn-primary" type="button">BUT TICKETS</button>
          </div>
          <div  class="tour-row">
            <span class="tour-item tour-date">JUL 22</span>
            <span class="tour-item tour-city">BRISTON, VA</span>
            <span class="tour-item tour-arena">JIGGLY LIVE </span>
            <button class="btn tour-item tour-btn btn-primary" type="button">BUT TICKETS</button>
          </div>
          <div class="tour-row">
            <span class="tour-item tour-date">JUL 29</span>
            <span class="tour-item tour-city">PHOENIX, AZ</span>
            <span class="tour-item tour-arena">AK-CHIN CENTER</span>
            <button class="btn tour-item tour-btn btn-primary" type="button">BUT TICKETS</button>
          </div>
          <div class="tour-row">
            <span class="tour-item tour-date">AUG 2</span>
            <span class="tour-item tour-city">LAS VEGAS, NY</span>
            <span class="tour-item tour-arena">T-MOBILE ARENA</span>
            <button class="btn tour-item tour-btn btn-primary" type="button">BUT TICKETS</button>
          </div>
          <div class="tour-row">
            <span class="tour-item tour-date">AUG 7</span>
            <span class="tour-item tour-city">DALLAS, TX</span>
            <span class="tour-item tour-arena">TEXAS ARENA</span>
            <button  class="btn tour-item tour-btn btn-primary" type="button">BUT TICKETS</button>
          </div>
        </div>
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

export default Home;
 