import React, { Component } from 'react';

class AddItem extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addNewItem(this.state)
        this.props.createItem([{ read: true, starred: true, id: this.state.id }])
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Quantity</label>
                    <input type="text" className="form-control"
                        onChange={(e) => this.setState({ quantity: e.target.value })}
                        name="quantity" />
                </div>
                <div className="form-group">
                    <label>Products</label>
                    <select className="form-control" id="exampleFormControlSelect1" onChange={(e) => {
                        let selectedObj = this.props.addItems.filter(item => item.id === Number(e.target.value))[0]
                        return (
                            this.setState({ name: selectedObj.name }),
                            this.setState({ price: selectedObj.priceInCents }),
                            this.setState({ id: selectedObj.id })
                        )
                    }} >
                        <option>Select an option...</option>
                        {this.props.addItems.map(item => {
                            return <option key={item.id} value={item.id}>{item.name} ${(item.priceInCents / 100).toFixed(2)}</option>
                        })}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form >
        )
    }
}

export default AddItem;