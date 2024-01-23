import React from "react";
import CarItems from "../../../assets/Photos/car.png";
import MobileItems from "../../../assets/Photos/mobile.png";
import LaptopItems from "../../../assets/Photos/laptop.png";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <>
      <div className=" mt-28  ">
        <h2 className="	text-accent font-bold text-2xl text-center mb-8">
          Browse items by category
        </h2>

        <div className=" p-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-8 mb-16">
          <div>
            <Link to="/phones" href="">
              <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                  <img className="h-36 w-64" src={MobileItems} alt="Movie" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title italic">Mobiles</h2>
                  <p>Click on the category to scc the Mobile your need..</p>

                  <p>59,773 ads</p>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
            </Link>
          </div>

          <div>
            <Link to="/electronics" href="">
              <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                  <img className="h-36 w-64" src={LaptopItems} alt="Movie" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title italic">Electronics</h2>
                  <p>
                    Click on the category to scc the Electronics your need..
                  </p>
                  <p>54,173 ads</p>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
            </Link>
          </div>

          <div>
            <Link to="/caritems" href="">
              <div className="card card-side bg-base-400 shadow-xl">
                <figure>
                  <img className="h-36 w-64" src={CarItems} alt="Movie" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title italic text-success-content">
                    Vehicles
                  </h2>
                  <p>Click on the category to scc the Vehicles your need..</p>
                  <p>30,394 ads</p>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
