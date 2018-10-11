import React, { Component } from 'react'
import './App.css';
import CartHeader from './CartHeader'
import CartFooter from './CartFooter'
import CartItems from './CartItems'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartItemsList: [{ id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 }],
      copyright: '2018',
      products: []
    }
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/products')
    const json = await response.json()
    this.setState({ products: json })
  }

  async createItem(item) {
    const response = await fetch('http://localhost:8082/api/messages', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    const order = await response.json()
    console.log(order);
    // this.setState({ products: [...this.state.products, order] })
  }



  addNewItem = (newItem) => {
    this.setState(prevState => (
      {
        cartItemsList: prevState.cartItemsList.concat(
          {
            id: prevState.cartItemsList.length + 1,
            product: {
              id: newItem.id,
              name: newItem.name,
              priceInCents: newItem.price
            },
            quantity: newItem.quantity
          }
        )
      }))
  }

  render() {
    console.log(this.state.products)
    return (
      <div>
        <CartHeader />
        <CartItems cartItemsList={this.state.cartItemsList}
          addNewItem={this.addNewItem}
          addItems={this.state.products}
          newItemObj={this.state.newItemObj}
          createItem={this.createItem} />
        <CartFooter copyright={this.state.copyright} />
      </div >
    )

  }
}
export default App;
