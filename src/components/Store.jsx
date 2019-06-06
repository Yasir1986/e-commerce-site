import React from "react";
import Img0 from "./Assests/Img/YouTube Logo.png";
import Img1 from "./Assests/Img/Facebook Logo.png";
import Img2 from "./Assests/Img/Spotify Logo.png";
import Album1 from "./Assests/Img/Album 1.png";


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
                <div>
                  <strong>Album 1</strong>
                </div>
              <img src={Album1} alt="album 1" />
              <div>
                <span>$12.99</span>
                <button type="button">ADD TO CART</button>
              </div>
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
              <li><img src={Img0} alt="youtube-logo" /></li>
              <li><img src={Img1} alt="facebook-logo" /></li>
              <li><img src={Img2} alt="twitter-logo" /></li> 
          </ul>
      </footer>
    </div>
  );
}

export default Store;
