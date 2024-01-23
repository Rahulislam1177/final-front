import React from "react";
import { Link } from "react-router-dom";

const Quick = () => {
  return (
    <>
      <div>
        <h2 className="text-accent m-auto font-bold text-2xl text-center mb-8 ">
          Quick links
        </h2>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-8 mb-16">
        <div>
          <Link href="">
            <div className="card card-side bg-base-400 shadow-xl">
              <div className="card-body w-62 h-48">
                <h2 className="card-title italic text-success-content">
                  54,994 ads in Electronics
                </h2>
                <Link className="link link-success ">
                  Desktop ComputersLaptopsTVsCameras, Camcorders &
                  AccessoriesAudio & Sound Systems
                </Link>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </Link>
        </div>

        <div>
          <Link href="">
            <div className="card m-auto card-side bg-base-400 shadow-xl">
              <div className="card-body w-62 h-48">
                <h2 className="card-title italic text-success-content">
                  18,123 ads in Property
                </h2>
                <Link className="link link-success">
                  Apartments For SaleLand Apartment Rentals Commercial Property
                  Rentals Room Rentals
                </Link>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </Link>
        </div>

        <div>
          <Link href="">
            <div className="card card-side bg-base-400 shadow-xl">
              <div className="card-body w-62 h-48">
                <h2 className="card-title italic text-success-content">
                  603 ads in Jobs
                </h2>
                <Link className="link link-success">
                  Sales Executive Marketing ExecutiveDelivery RiderCustomer
                  Service JobsSupervisor
                </Link>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </Link>
        </div>

        <div>
          <Link href="">
            <div className="card card-side bg-base-400 shadow-xl">
              <div className="card-body w-62 h-48">
                <h2 className="card-title italic text-success-content">
                  30,394 ads in Vehicles
                </h2>
                <Link className="link link-success">
                  Cars Motorbikes Bicycles TrucksAuto Parts & Accessories
                </Link>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Quick;
