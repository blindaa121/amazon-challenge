import React from 'react';
import BasketItem from '../basketitem/BasketItem';
import './Order.css';
import moment from 'moment';
import CurrencyFormat from 'react-currency-format';

function Order({ order }) {
    return (
      <div className="order__container">
        <h2>Order</h2>
        <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
        <p className="order__id">
          <small>{order.id}</small>
        </p>
        {order.data.basket?.map((item) => (
          <BasketItem
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            ratings={item.ratings}
            hideButton
          />
        ))}

        <CurrencyFormat
          renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
          )}
          decimalScale={2}
          value={order.data.amount / 100}
          displayType={"text"}
          thousandSeperator={true}
          prefix={"$"}
        />
      </div>
    );
}

export default Order
