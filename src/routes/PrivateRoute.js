import React, { Children, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/Context";
import Success from "../Succesful/Success";

const PrivateRoute = () => {
  const { user, children } = useContext(AuthContext);

  if (user && user.uid) {
    return <Success></Success>;
  } else {
    return <Navigate to="/login"></Navigate>;
  }
};

export default PrivateRoute;
