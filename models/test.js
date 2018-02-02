const {ShoppingCart} = require('./ShoppingCart');

const obj = {
}

obj.shoppingcart = new ShoppingCart();

const s = obj.shoppingcart;
s.add(1);
console.log(s);
console.log(s instanceof ShoppingCart);