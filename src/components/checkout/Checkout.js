import React from 'react';
import './Checkout.css';
import Subtotal from '../subtotal/Subtotal';
import { useStateValue } from "../../StateProvider";

function Checkout() {
    const [state, dispatch] = useStateValue();
    const basketItems = Object.values(state.basket);

    let subTotal = 0;
    basketItems.forEach((item) => {
        subTotal += Number(item.price)
        console.log(item.price)
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
            <h2 className="checkout__title">Your shopping Basket</h2>
            {/* BasketItem */}
            {/* BasketItem */}
            {/* BasketItem */}
            {/* BasketItem */}
          </div>
        </div>

        <div className="checkout__right">
          <Subtotal subTotal={subTotal} itemCount={basketItems.length}/>
        </div>
      </div>
    );
}

export default Checkout
