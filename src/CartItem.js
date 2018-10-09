import React from 'react';
import './App.css';

const CartItem = (props) => {
    var cart = props.cartItemsList.map((item) => {
        return (
            <div className="list-group-item" key={item.id}>
                <div className="row">
                    <div className="col-md-8">{item.product.name}</div>
                    <div className="col-md-2">${item.product.priceInCents / 100}</div>
                    <div className="col-md-2">{item.quantity}</div>
                </div>
            </div>
        )
    }
    )
    return (
        <div className="collection-item" >
            {cart}
        </div>
    )


}

export default CartItem;