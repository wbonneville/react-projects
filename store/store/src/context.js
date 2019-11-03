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

  // set the products

  componentDidMount() {
    this.setProducts();
  }

  // >>> METHOD HANDLERS <<<

  // loop through each product and get all of the information
  // set state to the list of products
  setProducts = () => {
    // let tempProducts = empty array
    let tempProducts = [];
    // loop through store products and add them to temp products and get each item
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      // all products/items put into tempProducts
      tempProducts = [...tempProducts, singleItem];
      // update state by setting originally empty products array to the fresh list of products
      this.setState(() => {
        return { products: tempProducts };
      });
    });
  };

  // get the id of the item that is clicked
  // returns the value of the first element in the provided array that satisfies the provided testing function.
  // in this case, item with ID that matches clicked ID is returned
  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  // display the clicked id's detail.
  // detail product object recieves selected ID's data
  handleDetail = id => {
    // set product = to selected ID (getItem(selectedIdHere))
    const product = this.getItem(id);
    // set detailProducts state = to selected product
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  // add selected item to cart array

  addToCart = id => {
    // tempProducts = to all products
    let tempProducts = [...this.state.products];
    // gets the specific index of the selected ID within the array of products
    const index = tempProducts.indexOf(this.getItem(id));
    // set product = to the specific index of the selected ID
    const product = tempProducts[index];
    // set selected ID inCart
    product.inCart = true;
    // add one of this item
    product.count = 1;
    // get the items price
    const price = product.price;
    // set the total according to the price
    product.total = price;
    // set the state of products array to list of products
    // update cart array by adding the new product which is defined above
    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      // update the total of the cart (takes into account all items) with the newly added item
      // addTotals() is a method handler defined on line 201
      () => {
        this.addTotals();
      },
    );
  };

  // modal displays info about the product
  // when function is clicked, modalOpen is set to true
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
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count += 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      },
    );
  };

  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;

    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotals();
        },
      );
    }
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
