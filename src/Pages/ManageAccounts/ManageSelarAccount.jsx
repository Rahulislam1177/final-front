import React from "react";

import Navbar from "../Shared/Navbar/Navbar";
import { Link, Outlet } from "react-router-dom";

const ManageSelarAccount = () => {
  const aro = ">";
  return (
    <>
      <Navbar></Navbar>
      <div className="drawer bg-base-100 lg:drawer-open  ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <labelconst
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            {aro}
          </labelconst>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-primary-content pt-24 p-4 w-68 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to="/seller">My orders</Link>
            </li>

            <li>
              <Link to="/seller/AddProduct">Add Products</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ManageSelarAccount;
