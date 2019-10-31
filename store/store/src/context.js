import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';
const ProductContext = React.createContext();
// Provider
// Consumer

// set the initial state
class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };

  // render the products
  componentDidMount() {
    this.setProducts();
  }

  // loop through each product and get all of the information
  // set state to the list of products
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
      this.setState(() => {
        return { products: tempProducts };
      });
    });
  };

  // get the id of the item that is clicked

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  // display the clicked id's detail.

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  // add item to cart

  addToCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        console.log(this.state);
      },
    );
  };

  // when function is clicked, modal is opened. modalOpen is true

  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  // user closes the modal. modalOpen is false

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  increment = id => {
    console.log('this is increment method');
  };

  decrement = id => {
    console.log('this is a decrement method');
  };

  removeItem = id => {
    console.log('item removed');
  };

  clearCart = id => {
    console.log('cart was cleared');
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
