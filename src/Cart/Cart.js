import React from "react";
import { Link } from "react-router-dom";

const Cart = (props) => {
  //   const { cart, clearCart, children } = props;

  //   let total = 0;
  //   let shipping = 0;
  //   let quantity = 0;
  //   for (const product of cart) {
  //     quantity = quantity + product.quantity;
  //     total = total + product.price * product.quantity;
  //     shipping = shipping + product.shipping;
  //   }
  //   const tax = parseFloat((total * 0.1).toFixed(2));
  //   const grandTotal = total + shipping + tax;
  return (
    <div className="cart  w-4/12 mx-auto pl-5 my-10">
      <Link className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight underline text-gray-900 dark:text-white text-center">
          Check Out Form
        </h5>
        <h4 className="font-bold text-center underline">Order Summary</h4>
        <p className="font-bold">Selected Item: </p>
        <p className="font-bold">Price: </p>
        <p className="font-bold">Shipping Cost: </p>
        <p className="font-bold">Tax: </p>
        <hr className="border-3 border-black my-2"></hr>
        <h5 className="font-bold text-center "> Total: </h5>
      </Link>

      {/* <button onClick={clearCart}>Clear Cart</button> */}
    </div>
  );
};

export default Cart;
