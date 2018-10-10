import React, { Component } from 'react'
import './App.css';
import CartItem from './CartItem'
import AddItem from './AddItem'

// const CartItems = (props) => {
class CartItems extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    total = (arr) => {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += (arr[i].quantity * arr[i].product.priceInCents);
        }
        return sum / 100;
    }

    render() {
        return (
            <div className="container" >
                <h1>Cart Items</h1>
                <div className="list-group">
                    <div className="list-group-item">
                        <div className="row">
                            <div className="col-md-8">Product</div>
                            <div className="col-md-2">Price</div>
                            <div className="col-md-2">Quantity</div>
                        </div>
                    </div>
                    <CartItem cartItemsList={this.props.cartItemsList} />
                    <div>Total Price: ${this.total(this.props.cartItemsList)} </div>
                    <AddItem addItems={this.props.addItems} addNewItem={this.props.addNewItem}
                        newItemObj={this.props.newItemObj} />
                </div>
            </div>
        )
    }
}
export default CartItems;