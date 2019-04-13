import React from 'react';

import Aux from '../../../hoc/_Aux';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey =>{
        return (
            <li key={igKey}>
                <span sytle={{ texTransform: 'capitalize' }}>{igKey}: {props.ingredients[igKey]}</span>
            </li>
        )
    });
    
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Chekout?</p>
        </Aux>
    );
};

export default orderSummary;