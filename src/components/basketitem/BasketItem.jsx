import React from 'react';
import './BasketItem.css';
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from '../../StateProvider'

function BasketItem({id, title, ratings, price, image}) {
    const [{basket}, dispatch] = useStateValue();
    const removeBasketItem = () => {
        dispatch({
            type: "REMOVE_BASKET_ITEM",
            id: id
        })
    }
    
    return (
      <div className="basketitem">
        <div className="basketitem__image">
          <img src={image} alt="" />
        </div>

        <div className="basketitem__info">
            <p className="basketitem__title">
                <strong>{title}</strong>
            </p>

            <p className="basketitem__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>

            <div className="basketitem__rating">
                {Array(ratings)
                    .fill()
                    .map((_, i) => (
                    <p><StarIcon className="starIcon" /></p>
                    ))}
            </div>
            <button className='basketitem__remove'onClick={removeBasketItem}>Remove from Basket</button>
        </div>
        
      </div>
    );
}

export default BasketItem
