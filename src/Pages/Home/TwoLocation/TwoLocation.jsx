import React, { useContext } from "react";
import clock from "../../../assets/Photos/money.png";
import marker from "../../../assets/Photos//logo.png";
import { Link } from "react-router-dom";
import AddProductMordal from "../../Signup/AddProductMordal/AddProductMordal";
import { AuthContext } from "../../../context/UserContext";

const TwoLocation = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className=" p-8 grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-8  mb-16">
      <div className="">
        <Link href="">
          <div className="card card-side bg-base-100 shadow-xl py-6 px-4  bg-lime-100">
            <figure>
              <img className="h-46 w-44" src={clock} alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Start making money!</h2>
              <p className="">
                Do you have something to sell? Post your first ad and start
                making money!
              </p>

              {user?.uid ? (
                <button
                  className="btn btn-accent mt-6"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                >
                  Post your ad for free
                </button>
              ) : (
                <Link to="login" className="btn btn-accent mt-6">
                  Post your ad for free
                </Link>
              )}
            </div>
          </div>
        </Link>
      </div>

      <div>
        <Link href="">
          <div className="card card-side bg-base-100 shadow-xl py-6 px-4 bg-lime-100">
            <figure>
              <img className="h-40 w-64" src={marker} alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Our Locations</h2>
              <p>
                Post your first ad and start making money! Post your ad for free
                Looking to hire or get hired in Bangladesh ?
              </p>
              <Link role="button" to="/explor" className="btn btn-accent ">
                Explore more
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <AddProductMordal></AddProductMordal>
    </div>
  );
};

export default TwoLocation;
