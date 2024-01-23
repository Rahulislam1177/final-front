import React from "react";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import { createBrowserRouter, useLocation } from "react-router-dom";
import Main from "../../LayOut/Main";

import Electronics from "../../Pages/Electronics/Electronics";
import CarItems from "../../Pages/CarItems/CarItems";
import Signup from "../../Pages/Signup/Signup";
import ExplorMore from "../../Pages/ExplorMore/ExplorMore";
import ManageSelarAccount from "../../Pages/ManageAccounts/ManageSelarAccount";
import PrivateRoutes from "../PrivateRoutes";
import Phones from "../../Pages/Phones/Phones";
import MyOrders from "../../Pages/ManageAccounts/MyOrders/MyOrders";
import AddaProduct from "../../Pages/ManageAccounts/SellerSide/AddaProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/phones",
        element: <Phones></Phones>,
      },
      {
        path: "/electronics",
        element: <Electronics></Electronics>,
      },
      {
        path: "/caritems",
        element: <CarItems></CarItems>,
      },
      {
        path: "/signup",
        element: <Signup state={{ from: location }} replace></Signup>,
      },
      {
        path: "/explor",
        element: <ExplorMore></ExplorMore>,
      },
    ],
  },
  {
    path: "/seller",
    element: (
      <PrivateRoutes>
        <ManageSelarAccount></ManageSelarAccount>
      </PrivateRoutes>
    ),

    children: [
      {
        path: "/seller",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/seller/AddProduct",
        element: <AddaProduct></AddaProduct>,
      },
    ],
  },
]);

export default router;
