import React, { useState } from "react";
import "./Signup.css";
// import { Link } from "react-router-dom";
// import app from "../Firebase/Firebase.init";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   sendEmailVerification,
// } from "firebase/auth";

// const auth = getAuth(app);

const Signup = () => {
  //   const [error, setError] = useState("");
  //   const [success, setSuccess] = useState(false);

  //   const handleForm = (event) => {
  //     event.preventDefault();

  //     setSuccess(false);

  //     const form = event.target;
  //     const name = form.email.value;
  //     const pass = form.password.value;
  //     //console.log(name, pass);

  //     if (
  //       !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
  //         pass
  //       )
  //     ) {
  //       setError("Please provide a strong password..");
  //       return;
  //     }
  //     createUserWithEmailAndPassword(auth, name, pass)
  //       .then((userCredential) => {
  //         // Signed in
  //         const user = userCredential.user;
  //         //console.log(user);
  //         // ...
  //         setSuccess(true);
  //         form.reset();
  //         setError("");
  //         sentMail();
  //       })
  //       .catch((error) => {
  //         const errorMessage = error.message;
  //         setError(errorMessage);
  //         // ..
  //       });
  //   };

  //   const sentMail = () => {
  //     sendEmailVerification(auth.currentUser).then(() => {
  //       alert("Email sent.Please verify.");
  //       // Email verification sent!
  //       // ...
  //     });
  //   };
  return (
    <div className="form">
      <h1 className="text-4xl m-10 text-white">Sign Up Form</h1>
      {/* onSubmit={handleForm} */}
      <form>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="text-left block mb-2 text-sm font-medium text-white dark:text-gray-300"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="nam"
            className="bg-gray-50 border w-80 border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@......com"
            required
          ></input>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="text-left block mb-2 text-sm font-medium text-white dark:text-gray-300"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border w-80 border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@......com"
            required
          ></input>
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="text-left block mb-2 text-sm font-medium text-white dark:text-gray-300"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="  bg-gray-50 border w-80 border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Password"
            required
          ></input>
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            ></input>
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-white dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <p className="text-left text-white mb-5">
          <small>Already Have an account.</small>
          {/* <Link to="login"> Log In</Link> */}
        </p>
        <button
          type="submit"
          className=" mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
        {/* {success && <p>User Created Successfully</p>}
        <p>{error}</p> */}
      </form>
    </div>
  );
};

export default Signup;
