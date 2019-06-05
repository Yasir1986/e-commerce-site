import React from "react";
import Img0 from "./Assests/Img/youtube.png";
import Img1 from "./Assests/Img/facebook_logos_PNG19751.png";
import Img2 from "./Assests/Img/twitter-logo.png";


function Store() {
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
          <h2>MUSIC</h2>
            <div>
              <strong>Album 1</strong>
              <img src="" />
                <span>$12.99</span>
                <button type="button">ADD TO CART</button>
            </div>
        </section>
        <section>
          <h2>MERCH</h2>
        </section>
        <section>
          <h2>CART</h2>
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

export default Store;
