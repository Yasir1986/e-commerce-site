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
            <button class="btn tour-item tour-btn" type="button">BUT TICKETS</button>
          </div>
          <div  class="tour-row">
            <strong>JUL 19</strong>
            <span>TORONTO, ON</span>
            <span>BUD WISER SATGE</span>
            <button type="button">BUT TICKETS</button>
          </div>
          <div  class="tour-row">
            <strong>JUL 22</strong>
            <span>BRISTON, VA</span>
            <span>JIGGLY LIVE </span>
            <button type="button">BUT TICKETS</button>
          </div>
          <div class="tour-row">
            <strong>JUL 29</strong>
            <span>PHOENIX, AZ</span>
            <span>AK-CHIN CENTER</span>
            <button type="button">BUT TICKETS</button>
          </div>
          <div class="tour-row">
            <strong>AUG 2</strong>
            <span>LAS VEGAS, NY</span>
            <span>T-MOBILE ARENA</span>
            <button type="button">BUT TICKETS</button>
          </div>
          <div class="tour-row">
            <strong>AUG 7</strong>
            <span>DALLAS, TX</span>
            <span>TEXAS ARENA</span>
            <button type="button">BUT TICKETS</button>
          </div>
        </div>
      </section>
      <footer>
        <h3>The Generics</h3>
        <ul>
          <li>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Img0} alt="youtube-logo" />
            </a>
          </li>
          <li>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Img1} alt="facebook-logo" />
            </a>
          </li>
          <li>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Img2} alt="twitter-logo" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Home;
 