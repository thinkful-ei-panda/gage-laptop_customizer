import React from 'react';
import CartItems from './CartItems';
import USCurrencyFormat from '../utility'

function Summary(props){

    const total = Object.keys(props.selected).reduce(
        (acc, curr) => acc + props.selected[curr].cost,
        0
      );

    return (
      <section className="main__summary">
            <h2>Your cart</h2>
            <CartItems
            selected={props.selected}
            />
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {USCurrencyFormat.format(total)}
              </div>
            </div>
          </section>  
    )
    
}

export default Summary ; 