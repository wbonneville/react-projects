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
        this.addTotals();
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
    // set temp products array = to current products
    let tempProducts = [...this.state.products];
    // set cart = to current items in cart
    let tempCart = [...this.state.cart];
    // filter through the cart and find the clicked ID
    tempCart = tempCart.filter(item => item.id !== id);
    // select the clicked ID
    const index = tempProducts.indexOf(this.getItem(id));
    // removedProduct = the selected ID
    let removedProduct = tempProducts[index];
    // set selected ID in cart = to false
    removedProduct.inCart = false;
    // set the official count of the item to 0
    removedProduct.count = 0;
    // remove the items addition to the total from the total
    removedProduct.total = 0;

    // cart and products = cart and products - removed item
    this.setState(
      () => {
        return {
          // return the state with altered arrays
          cart: [...tempCart],
          products: [...tempProducts],
        };
      },
      () => {
        this.addTotals();
      },
    );
  };

  clearCart = id => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        // set the products again
        this.setProducts();
        // re-calculate the new totals
        this.addTotals();
      },
    );
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return { cartSubTotal: subTotal, cartTax: tax, cartTotal: total };
    });
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
