import React, { useContext } from "react";
import { AuthContext } from "../context/UserContext";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Loading/Loading";

const PrivateRoutes = ({ children }) => {
  const { user, loding } = useContext(AuthContext);

  const location = useLocation();

  if (loding === true) {
    return <Loading></Loading>;
  }

  if (user) {
    return children;
  }
  return <Navigate  to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
