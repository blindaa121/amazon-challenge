import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format'
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';

function Subtotal({subTotal, itemCount}) {
    const history = useHistory();
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(subTotalvalue) => (
                    <>
                    <p>
                    Subtotal ({itemCount} items): <strong>${subTotal}</strong>      
                    </p> 
                    <small className="subtotal__gift">
                        <input type="checkbox" />
                        This order contains a gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            />
            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
