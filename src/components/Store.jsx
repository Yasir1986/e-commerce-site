import React from "react";
import Img0 from "./Assests/Img/YouTube Logo.png";
import Img1 from "./Assests/Img/Facebook Logo.png";
import Img2 from "./Assests/Img/Spotify Logo.png";
import Album1 from "./Assests/Img/Album 1.png";
import Album2 from "./Assests/Img/Album 2.png";
import Album3 from "./Assests/Img/Album 3.png";
import Album4 from "./Assests/Img/Album 4.png";
import Shirt from "./Assests/Img/Shirt.png";
import Coffee from "./Assests/Img/Cofee.png";
import { Link  } from "react-router-dom";

function Store() {
  return (
    <div>
      <header>
        <nav>
          <ul>
           <Link to="/"> <li>HOME</li></Link>
           <Link to="/store">   <li>STORE</li></Link>
           <Link to="/about"> <li>ABOUT</li></Link>
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
              <div>
                  <strong>Album 2</strong>
                </div>
              <img src={Album2} alt="album 2" />
              <div>
                <span>$9.99</span>
                <button type="button">ADD TO CART</button>
              </div>
              <div>
                  <strong>Album 3</strong>
                </div>
              <img src={Album3} alt="album 3" />
              <div>
                <span>$19.99</span>
                <button type="button">ADD TO CART</button>
              </div>
              <div>
                  <strong>Album 4</strong>
                </div>
              <img src={Album4} alt="album 4" />
              <div>
                <span>$14.99</span>
                <button type="button">ADD TO CART</button>
              </div>
            </div>
        </section>

        <section>
          <h2>MERCH</h2>
          <div>
              <div>
                  <strong>T-Shirt</strong>
              </div>
                <img src={Shirt} alt="Shirt" />
              <div>
                <span>$9.99</span>
                <button type="button">ADD TO CART</button>
              </div>
          </div>
          
          <div>
                  <strong>Coffee Cup</strong>
                </div>
              <img src={Coffee} alt="Coffee" />
              <div>
                <span>$6.99</span>
                <button type="button">ADD TO CART</button>
              </div>
          
        </section>
        
        <section>
          <h2>CART</h2>
            <div>
              <strong>ITEM</strong>
              &lt;&gt;
              <strong>PRICE</strong>
              &lt;&gt;
              <strong>QUANTITY</strong>
            </div>
            <div>
              <img src={Shirt} width="100" height="100" alt="shirt" />
              <span>T-Shirt</span>
              &lt;&gt;
              <span>$19.99</span>
              &lt;&gt;
              <input type="number" value="1" />
              <button type="button">REMOVE</button>
            </div>
            <div>
              <img src={Album3} width="100" height="100" alt="album3logo" />
              <span>Album 3</span>
              &lt;&gt;
              <span>$9.99</span>
              &lt;&gt;
              <input type="number" value="2" />
              <button type="button">REMOVE</button>
            </div>
            <hr />
            <div>
              <strong>Total</strong>
              <span>$39.97</span>
            </div>
            <div>
              <button type="button">PURCHASE </button>
            </div>
        </section>

      <footer>
          <h3>The Generics</h3>
          <ul>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><img src={Img0} alt="youtube-logo" /></a>
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

export default Store;
