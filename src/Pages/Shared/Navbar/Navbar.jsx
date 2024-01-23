import React, { useContext } from "react";
import logo from "../../../assets/Photos/logo.png";
import { Link } from "react-router-dom";
import AddProductMordal from "../../Signup/AddProductMordal/AddProductMordal";
import UserContext, { AuthContext } from "../../../context/UserContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="fixed z-40 top-0 mb-8 navbar bg-base-100 bg-primary-content">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost ">
            <img className="w-auto h-12" src={logo} alt="" />
          </Link>
        </div>
        <div className="flex-none">
          {user?.uid ? (
            <div>
              <button
                className="btn text-white btn  bg-orange-600  border-transparent"
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                POST YOUR AD
              </button>
            </div>
          ) : (
            <Link
              to="login"
              className="btn text-white btn  bg-orange-600  border-transparent"
            >
              POST YOUR AD
            </Link>
          )}

          {user?.uid ? (
            <div>{null}</div>
          ) : (
            <div
              tabIndex={0}
              role="button"
              className="btn ms-6 mx-4 btn-ghost btn-circle"
            >
              <Link to="/signup">SignUp</Link>
            </div>
          )}

          {user?.uid ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <Link to="/seller" href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">8</span>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div>{null}</div>
          )}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {user?.uid ? (
                <>
                  <div className="avatar">
                    <div className="w-16 mx-auto rounded-full">
                      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>

                  <div className="font-bold text-center">
                    <h3>{user.displayName}</h3>
                  </div>

                  <li>
                    <Link className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li>
                    <Link>Settings</Link>
                  </li>

                  <li>
                    <button
                      className="btn pt-3 btn-white"
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <Link
                    to="/login"
                    role="button"
                    className="btn pt-3 btn-white"
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
        <AddProductMordal></AddProductMordal>
      </div>
    </>
  );
};

export default Navbar;
