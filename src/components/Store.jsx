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
import { Link } from "react-router-dom";
import "./Assests/Css/Style.css";

function Store() {
  return (
    <div>
      <header class="main-header">
        <nav class="main-nav nav">
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
      <section class="container content-section">
        <h2 class="section-header">MUSIC</h2>
        <div class="shop-items">
          <div class="shop-item">
            <span class="shop-item-title">Album 1</span>
            <img class="shop-item-image" src={Album1} alt="album 1" />
            <div class="shop-item-details">
              <span class="shop-item-price">$12.99</span>
              <button class="btn btn-primary shop-item-button" type="button">
                ADD TO CART
              </button>
            </div>

            <div class="shop-item">
              <span class="shop-item-title">Album 2</span>
            </div>
            <img class="shop-item-image" src={Album2} alt="album 2" />
            <div class="shop-item-details">
              <span class="shop-item-price">$9.99</span>
              <button class="btn btn-primary shop-item-button" type="button">
                ADD TO CART
              </button>
            </div>

            <div class="shop-item">
              <span class="shop-item-title">Album 3</span>
            </div>
            <img class="shop-item-image" src={Album3} alt="album 3" />
            <div class="shop-item-details">
              <span class="shop-item-price">$19.99</span>
              <button class="btn btn-primary shop-item-button" type="button">
                ADD TO CART
              </button>
            </div>
            <div class="shop-item">
              <span class="shop-item-title">Album 4</span>
            </div>
            <img class="shop-item-image" src={Album4} alt="album 4" />
            <div class="shop-item-details">
              <span class="shop-item-price">$14.99</span>
              <button class="btn btn-primary shop-item-button" type="button">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="container content-section">
        <h2 class="section-header">MERCH</h2>
        <div class="shop-items">
          <div class="shop-item">
            <span class="shop-item-title">T-Shirt</span>
          <img class="shop-item-image" src={Shirt} alt="Shirt" />
          <div class="shop-item-details">
            <span class="shop-item-price">$9.99</span>
            <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
            </div>
            </div>
       

        <div class ="shop-item">
          <span class="shop-item-title">Coffee Cup</span>
          <img class="shop-item-image" src={Coffee} alt="Coffee" />
          <div class="shop-item-details">
            <span class="shop-item-price">$6.99</span>
            <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
          </div>
        </div>
      </div>
      </section>

      <section class="container content-section">
        <h2 class="section-header">CART</h2>
        <div class="cart-row">
          <span class="cart-item cart-header cart-column">ITEM</span>
          <span class="cart-price cart-header cart-column">PRICE</span>
          <span class="cart-quantity cart-header cart-column">QUANTITY</span>
        </div>

        <div class="cart-row">
          <div class="cart-item cart-column">
            <img class="cart-item-image" src={Shirt} width="100" height="100" alt="shirt" />
              <span class="cart-item-title">T-Shirt</span>
          </div>
            <span class="cart-price cart-column">$19.99</span>
              <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" type="number" defaultValue="1"/>
                <button class="btn btn-danger" type="button">REMOVE</button>
          </div>
        </div>

        <div class="cart-items">
        <div class="cart-row">
          <div class="cart-item cart-columm">
            <img class="cart-item-image" src={Album3} width="100" height="100" alt="album3logo" />
              <span class="cart-item-title">Album 3</span>
        </div>
            <span class="cart-price cart-column">$9.99</span>
              <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" type="number" defaultValue="2" />
                <button  class="btn btn-danger" type="button">REMOVE</button>
              </div>
        </div>
        </div>

        <div class="cart-total">
          <strong class="cart-total-title">Total</strong>
          <span class="cart-total-price">$39.97</span>
        </div>
          <button class="btn btn-primary btn-purchase" type="button">PURCHASE </button>
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

export default Store;
