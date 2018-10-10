import React, { Component } from 'react'
import './App.css';

class CartItem extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="collection-item" >
                {
                    this.props.cartItemsList.map((item) => {
                        return (
                            <div key={item.id}>
                                <div className="list-group-item">
                                    <div className="row">
                                        <div className="col-md-8">{item.product.name}</div>
                                        <div className="col-md-2">${Number(item.product.priceInCents / 100)} </div>
                                        <div className="col-md-2">{item.quantity}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}

export default CartItem;