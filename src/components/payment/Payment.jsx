import React from 'react';
import './Payment.css';
import { useStateValue } from '../../StateProvider';
import BasketItem from '../basketitem/BasketItem'

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className='payment'>
            <div className="payment__container">
                <h1>Checkout (
                    
                </h1>
                {/* Payment section - delivery address */}
                <div className="payment__section">                    
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>750 N King</p>
                        <p>San Jose, CA</p>
                    </div>
                </div>

                <div className="payment__section">                    
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <BasketItem 
                                id={item.id}
                                title={item.title}
                                ratings={item.ratings}
                                price={item.price}
                                image={item.image}/>
                        ))}
                    </div>
                </div>

                <div className="payment__section">                    
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                            {/* stripe magic */}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Payment
