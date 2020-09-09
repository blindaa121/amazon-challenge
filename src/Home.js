import React from 'react';
import './Home.css'
import Product from './Product';


function Home() {
    return (
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg?fbclid=IwAR1NFRZ9iLyH5v6VdS9Fvp5SHY7goBC937qk1g-XSSmny5nRJbY6lOGc-Tk"
            alt=""
          />

          <div className="home__row">
            <Product
              title="Wecolor 100 Pcs Disposable 3 Ply Earloop Face Masks, Suitable for Home, School, Office and Outdoors (Black)"
              price="22.99"
              image="https://images-na.ssl-images-amazon.com/images/I/71nePsQmsbL._AC_SL1500_.jpg"
              ratings={5}
            />
            <Product
              title="Germ-x Germ-x Hand Sanitizer, Original with Pump, 8 Fl Ounce (Pack of 12), 96 Fl Oz"
              price="23.88"
              image="https://images-na.ssl-images-amazon.com/images/I/81644tXJPXL._AC_SL1500_.jpg"
              ratings={5}
            />
          </div>

          <div className="home__row">
            <Product
              title="Logitech MX Master 3 Advanced Wireless Mouse - Graphite"
              price="99.99"
              image="https://images-na.ssl-images-amazon.com/images/I/614w3LuZTYL._AC_SL1500_.jpg"
              ratings={5}
            />
            <Product
              title="Apple AirPods Pro"
              price="219.98"
              image="https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._AC_SL1500_.jpg"
              ratings={4}
            />
            <Product
              title="Logitech Z623 400 Watt Home Speaker System, 2.1 Speaker System - Black"
              price="119.99"
              image="https://images-na.ssl-images-amazon.com/images/I/91QAKIxJ%2BeL._AC_SL1500_.jpg"
              ratings={5}
            />
          </div>

          <div className="home__row">
            <Product
              title="SAMSUNG 65-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN65TU8000FXZA, 2020 Model)"
              price="697.99"
              image="https://images-na.ssl-images-amazon.com/images/I/71RiQZ0J2SL._AC_SL1000_.jpg"
              ratings={4}
            />
          </div>
        </div>
      </div>
    );
}

export default Home
