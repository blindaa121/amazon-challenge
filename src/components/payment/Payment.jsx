import React from 'react';
import './Payment.css';
import { useStateValue } from '../../StateProvider';
import BasketItem from '../basketitem/BasketItem';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useState, useEffect } from 'react';
import CurrencyFormat from "react-currency-format";
import axios from '../../axios';
import { getBasketTotal } from '../../reducer';
import { useHistory } from 'react-router-dom';
import { db } from '../../firebase'

function Payment() {
        const [{basket, user}, dispatch] = useStateValue();
        const stripe = useStripe();
        const elements = useElements();
        const history = useHistory();
        const [succeeded, setSucceeded] = useState(false);
        const [processing, setProcessing] = useState("");
        const [error, setError] = useState(null);
        const [disabled, setDisabled] = useState(true);
        const [clientSecret, setClientSecret] = useState(true);

        useEffect(() => {
            //  generate the special stripe secret which allows us to charge a customer
            const getClientSecret = async () => {
                const response = await axios({
                    method: 'post',
                    // Stripe uses subunits
                    url: `/payments/create?total=${getBasketTotal(basket) * 100}`
                });
                
                setClientSecret(response.data.clientSecret);
                // console.log(getClientSecret)
            }

            getClientSecret();
        }, [basket]) // dependent on the basket

        // console.log('The secret is', clientSecret)
        // console.log(user);
        console.log(db);

        const handleSubmit = async (e) => {
            // Stripe functionality
            e.preventDefault();
            setProcessing(true); // Prevent buy now spam
            const payload = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement)
                }
            }).then(({ paymentIntent }) => {
                // paymentIntent = payment confirmation
                db.collection('users') // Creates collection in the firestore database
                    .doc(user?.uid)
                    .collection('orders')
                    .doc(paymentIntent.id)
                    .set({
                        basket: basket,
                        amount: paymentIntent.amount,
                        created: paymentIntent.created
                    })

                setSucceeded(true);
                setError(false);
                setProcessing(false);

                dispatch({
                    type: 'EMPTY_BASKET'
                })

                history.replace('/orders')
            })
        }

        const handleChange = e => {
            // Listen for changes in the card element
            setDisabled(!e.complete);
            setError(e.error ? e.error.message : "");
        }

        return (
        <div className="payment">
            <div className="payment__container">
            <h1>Checkout (<a href='./checkout'>{basket.length} items</a>)</h1>
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
                {basket.map((item) => (
                    <BasketItem
                    id={item.id}
                    title={item.title}
                    ratings={item.ratings}
                    price={item.price}
                    image={item.image}
                    />
                ))}
                </div>
            </div>

            <div className="payment__section">
                <div className="payment__title">
                <h3>Payment Method</h3>
                </div>
                <div className="payment__details">
                {/* stripe magic */}
                <form onSubmit={handleSubmit}>
                    <CardElement className='payment__cardInfo' onChange={handleChange} />

                    <div className="payment__priceContainer">
                        <CurrencyFormat
                            renderText={(subTotalvalue) => (
                            <>
                                <p>
                                <strong>Order Total: ${getBasketTotal(basket)}</strong>
                                </p>
                            </>
                            )}
                            decimalScale={2}
                            value={0}
                            displayType={"text"}
                            thousandSeperator={true}
                            prefix={"$"}
                        />
                        <button disabled={processing || disabled || succeeded}>
                            <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                        </button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        );
    }

export default Payment
