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
    // detailProduct is an pre-made object for rendering
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
    // product set = to selected item
    const product = this.getItem(id);

    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
      // state of modalProduct set = true
      // display the data of selected ID
    });
  };

  // user closes the modal. modalOpen is false
  // modalOpen can be set to false using a click handler in a button
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  // while in cart, add another of the same selected item
  increment = id => {
    // tempCart set = to all items currently in the cart
    let tempCart = [...this.state.cart];
    // get selected products
    const selectedProduct = tempCart.find(item => item.id === id);
    // get the index of the product
    const index = tempCart.indexOf(selectedProduct);
    // set const product = to selected product
    const product = tempCart[index];
    // increment product by one
    product.count += 1;
    // product total = count of product multiplied by price of the product
    product.total = product.count * product.price;

    // set state of cart to the new, fresh cart
    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      // recalculate the totals with same addTotals() method
      () => {
        this.addTotals();
      },
    );
  };

  // first five lines have same logic as increment handler
  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;

    // don't display the item anymore if the user decreases the count to zero
    if (product.count === 0) {
      // item is removed
      this.removeItem(id);
    } else {
      // if item is not removed, set the total to the count of the product multiplied by the price
      product.total = product.count * product.price;
      // set state to new altered cart
      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        // recalculate the totals
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
      // recalculate the totals
      () => {
        this.addTotals();
      },
    );
  };

  // clear the cart
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

  // add totals handler
  addTotals = () => {
    // original subtotal = 0
    let subTotal = 0;
    // loop through all items in cart and set subtotal equal to subtotal plus item total
    this.state.cart.map(item => (subTotal += item.total));
    // set tax = subTotal multiplied by 10 percent
    const tempTax = subTotal * 0.1;
    // round off the sum of the tax to a more suitable renderable number
    const tax = parseFloat(tempTax.toFixed(2));
    // now the total = to subTotal + tax
    const total = subTotal + tax;
    // update the cartsSubTotal = to new subTotal, cartTax to new tax, and cartTotal to new total
    this.setState(() => {
      return { cartSubTotal: subTotal, cartTax: tax, cartTotal: total };
    });
  };

  render() {
    return (
      // add all these methods to the provider
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
        {/* add all children */}
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

// consumer provides access to the information
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
