import React from 'react';
import './Checkout.css';
import Subtotal from '../subtotal/Subtotal';
import { useStateValue } from "../../StateProvider";
import BasketItem from '../basketitem/BasketItem';
import { subTotal, itemCount } from '../subtotal/Subtotal'

function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    const basketItems = Object.values(basket);
    
    let subTotal = 0;
    basketItems.forEach((item) => {
        subTotal += Number(item.price)
        // console.log(item.price)
    })
    subTotal = subTotal.toFixed(2); //fixed to 2 decimal places
    
    return (
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          />

          <div>
            <h2 className="checkout__title">Your Shopping Cart</h2>
            {basketItems.map((item, idx) => (
                <BasketItem id={item.id} title={item.title} ratings={item.ratings} price={item.price} image={item.image}/>
            ))}
          </div>
        </div>

        <div className="checkout__right">
          <Subtotal subTotal={subTotal} itemCount={basketItems.length}/>
        </div>
      </div>
    );
}

export default Checkout
