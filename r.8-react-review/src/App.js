import React, { Component } from 'react';

class App extends Component {

  state = {
    products: [
      {
        "brand": "Tesla",
        "title": "An ugly truck",
        "price": 1000000
      },
      {
        "brand": "Disney",
        "title": "Baby Yoda",
        "price": 30
      }
    ],
    purchasedProducts: []
  }

  purchaseProduct = (product) => {
    this.setState({
      purchasedProducts: [ 
        ...this.state.purchasedProducts,
        product 
      ]
    })
  }

  render() {
    return (
      <div>
        <TotalDisplay purchasedProducts={this.state.purchasedProducts} />
        {this.state.products.map(product => {
          return <ProductCard key={product.title} product={product} purchaseProduct={this.purchaseProduct} />
        })}
      </div>
    );
  }
}

class ProductCard extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.product.title}</h4>
        <button onClick={e => this.props.purchaseProduct(this.props.product)}>
          Purchase
          </button>
      </div>
    )
  }
}

class TotalDisplay extends Component {

  // state = {
  //   total: 0
  // }

  // componentDidUpdate(){
  //   console.log('in here!')
    // let total = 0;
    // this.props.purchasedProducts.forEach(product => {
    //   total = total + product.price
    // })
  //   if(this.state.total !== total){
  //     this.setState({
  //       total: total
  //     })
  //   }
  // }

  // static getDerivedStateFromProps(props){
  //   let total = 0;
  //   props.purchasedProducts.forEach(product => {
  //     total = total + product.price
  //   })
  //   return {
  //     total: total
  //   }
  // }

  render() {
    let total = 0;
    this.props.purchasedProducts.forEach(product => {
      total = total + product.price
    })
    return <h3 style={{ float: 'right' }}>
      Total: {total}
    </h3>
  }

}

export default App;
