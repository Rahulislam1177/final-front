import React from "react";
import toast from "react-hot-toast";

const OrderNaw = (Product, setProducts, setElectronic, setPhone) => {
  const Products = Product.Product;
  const {
    /*  description,
    
    location,
    oraginalPrice,
    yearsOfUse, */
    image,
    productName,
    resalePrice,
  } = Products;

  const handleBooking = (event) => {
    event.preventDefault();
    const from = event.target;
    const productNames = from.name.value;
    const productPrice = from.resalePrice.value;
    const number = from.number.value;
    const city = from.city.value;
    const addres = from.addres.value;

    const booking = {
      productName: productNames,
      productPrice,
      number,
      city,
      addres,
      image,
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Your Order is Successfully");
        }
      });
  };

  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-accent text-white"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-left -mt-4"></h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <div className="card shrink-0 w-full  mx-auto max-w-sm  ">
              <h2 className="font-bold text-center text-3xl	 pb-8">
                Confirm your Order
              </h2>
              <label className="label ">
                <span className="label-text font-bold">Prodect Name</span>
              </label>
              <input
                name="name"
                disabled
                value={productName}
                placeholder="Product Name"
                className="input input-bordered"
                required
              />
              <label className="label ">
                <span className="label-text font-bold">Product Price</span>
              </label>
              <input
                name="resalePrice"
                disabled
                value={resalePrice}
                placeholder="price"
                className="input input-bordered "
                required
              />
              <label className="label">
                <span className="label-text font-bold">Mobile Number</span>
              </label>
              <input
                name="number"
                type="number"
                placeholder="Mobile Number"
                className="input input-bordered "
                required
              />
              <label className="label">
                <span className="label-text font-bold">Your City</span>
              </label>
              <input
                name="city"
                type="text"
                placeholder="city"
                className="input input-bordered"
                required
              />
              <label className="label">
                <span className="label-text font-bold">Your Addres</span>
              </label>
              <textarea
                name="addres"
                placeholder="Your Addres"
                required
                className="textarea textarea-bordered textarea-md w-full mb-4 "
              ></textarea>

              <input
                type="submit"
                placeholder="confirm now"
                className="btn btn-accent w-full "
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default OrderNaw;
