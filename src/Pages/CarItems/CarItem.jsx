import React, { useEffect, useRef, useState } from "react";

const CarItem = ({ appointmentOption, setProducts }) => {
  if (appointmentOption.Category == "Vehicles") {
    const {
      description,
      image,
      location,
      oraginalPrice,
      productName,
      resalePrice,
      yearsOfUse,
    } = appointmentOption;

    const paragraphStyl = {
      WebkitLineClamp: 3,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      display: "-webkit-box",
    };
    const [isOpen, setIsOpen] = useState(false);

    const [showReadMore, setShowReadMore] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      if (ref.current) {
        setShowReadMore(ref.current.scrollHeight !== ref.current.clientHeight);
      }
    }, []);
    return (
      <div className="card card-compact mt-8  w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-80 h-80" src={image} alt="Phones" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">{productName}</h2>
          <div className="grid gap-4 grid-cols-2">
            <div>
              <p className="font-bold">Price: {resalePrice}Tk</p>
              <p className="line-through font-semibold">
                OraginalPrice: {oraginalPrice}Tk
              </p>
            </div>
            <div>
              <p className="font-semibold">Location: {location}</p>
              <p className="font-semibold">UseTime: {yearsOfUse} Yers</p>
            </div>
          </div>

          <div>
            <p
              style={isOpen ? null : paragraphStyl}
              ref={ref}
              className="font-semibold"
            >
              description: {description}
            </p>
            {showReadMore && (
              <button className="text-black" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "read less" : "read more..."}
              </button>
            )}
          </div>

          <div className="card-actions justify-center">
            <label
              htmlFor="booking-modal"
              className="btn btn-accent w-full font-bold"
              onClick={() => setProducts(appointmentOption)}
            >
              Buy Now
            </label>
          </div>
        </div>
      </div>
    );
  }
};

export default CarItem;
