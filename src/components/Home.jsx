import React from "react";
import Img0 from "./Assests/Img/youtube.png";
import Img1 from "./Assests/Img/facebook_logos_PNG19751.png";
import Img2 from "./Assests/Img/twitter-logo.png";


function Home() {
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
        <button type="button">Get Our Latest Album</button>
        <br />
        <br />
        <button type="button">&#9658;</button>
      </header>
        <section>
            <h2>TOURS</h2>
            <div>
                <div>
                   <strong>JUL 16</strong>
                    &lt;&gt;
                   <span>DETROIT, MI</span>
                   &lt;&gt;
                    <span>DTE ENERGY MUSIC CENTER</span>
                    &lt;&gt;
                   <button type="button">BUT TICKETS</button> 
                   <hr />
                </div>
                <div>
                   <strong>JUL 19</strong>
                    &lt;&gt;
                   <span>TORONTO, ON</span>
                   &lt;&gt;
                    <span>BUD WISER SATGE</span>
                    &lt;&gt;
                   <button type="button">BUT TICKETS</button> 
                   <hr />
                </div> 
                <div>
                   <strong>JUL 22</strong>
                    &lt;&gt;
                   <span>BRISTON, VA</span>
                   &lt;&gt;
                    <span>JIGGLY LIVE </span>
                    &lt;&gt;
                   <button type="button">BUT TICKETS</button> 
                   <hr />
                </div>
                <div>
                   <strong>JUL 29</strong>
                    &lt;&gt;
                   <span>PHOENIX, AZ</span>
                   &lt;&gt;
                    <span>AK-CHIN CENTER</span>
                    &lt;&gt;
                   <button type="button">BUT TICKETS</button> 
                   <hr />
                </div>
                <div>
                   <strong>AUG 2</strong>
                    &lt;&gt;
                   <span>LAS VEGAS, NY</span>
                   &lt;&gt;
                    <span>T-MOBILE ARENA</span>
                    &lt;&gt;
                   <button type="button">BUT TICKETS</button> 
                   <hr />
                </div>
                <div>
                   <strong>AUG 7</strong>
                    &lt;&gt;
                   <span>DALLAS, TX</span>
                   &lt;&gt;
                    <span>TEXAS ARENA</span>
                    &lt;&gt;
                   <button type="button">BUT TICKETS</button> 
                   <hr />
                </div>
            </div>
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

export default Home;
