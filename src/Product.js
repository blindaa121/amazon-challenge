import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';
import StarIcon from "@material-ui/icons/Star";

function Product({id, title, price, image, ratings}) {
    const [state, dispatch] = useStateValue();
    console.log(state);
    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                ratings: ratings
            }
        })
    }

    return (
      <div className="product">
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>

            <div className="product__rating">
                {Array(ratings).fill().map((_, i) => (
                    <p><StarIcon className='starIcon'/></p>
                ))}
            </div>
        </div>
        
        <img src={image}/>
        <button onClick={addToBasket}>Add to Basket</button>
        
      </div>
    );
}

export default Product
