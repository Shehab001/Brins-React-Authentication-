import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/Context";

const Cart = (props) => {
  const { user, course } = useContext(AuthContext);
  console.log({ user });
  const calculate = () => {
    const a = parseInt(course[0].price) + 20 + 5;
    return a;
  };
  return (
    <div className="cart  w-4/12 mx-auto pl-5 my-10">
      <Link className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight underline text-gray-900 dark:text-white text-center">
          Check Out Form
        </h5>

        <h4 className="font-bold text-center ">Order Summary</h4>
        <hr className="border-3 border-black my-2"></hr>
        <p className="font-bold">Selected Item: {course[0].name} Course</p>
        <p className="font-bold">Price: ${course[0].price}</p>
        <p className="font-bold">Shipping Cost: $20</p>
        <p className="font-bold">Tax:$5 </p>
        <hr className="border-3 border-black my-2"></hr>
        <p className="font-semibold">Name : {user?.displayName}</p>
        <p className="font-semibold">E-mail : {user?.email}</p>
        <hr className="border-3 border-black my-2"></hr>
        <h5 className="font-bold text-center "> Total:${calculate()} </h5>
      </Link>

      {/* <button onClick={clearCart}>Clear Cart</button> */}
    </div>
  );
};

export default Cart;
