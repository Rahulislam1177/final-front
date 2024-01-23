import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const AddProductMordal = () => {
  const handleProduct = (event) => {
    event.preventDefault();

    const from = new FormData(event.target);
    const category = from.get("category");
    const name = from.get("name");
    const resalePrice = from.get("resalePrice");
    const price = from.get("price");
    const number = from.get("number");
    const location = from.get("location");
    const description = from.get("description");
    const image = from.get("image");

    /* console.log(
      category,
      name,
      resalePrice,
      photo,
      price,
      location,
      description,
      number
    ); */

    const data = new FormData();
    data.append("image", image);

    fetch(
      "https://api.imgbb.com/1/upload?key=5ac6ad996b47cbc5297abb73ebca94d1",
      {
        method: "POST",
        body: data,
      }
    )
      .then((rsc) => rsc.json())
      .then((data) => {
        const product = {
          Category: category,
          productName: name,
          resalePrice: resalePrice,
          oraginalPrice: price,
          yearsOfUse: number,
          location: location,
          description: description,
          image: data.data.url,
        };

        fetch("http://localhost:5000/products", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(product),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              toast.success("Your Product is Successfully created");
            }
          });
     
      });

    /*  console.log(product); */
  };
  return (
    <>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <div className="">
            <form
              onSubmit={handleProduct}
              className="card-body"
              method="dialog"
            >
              <div className="card shrink-0 w-full  mx-auto max-w-sm  ">
                <h2 className="font-bold text-center text-3xl	 pt-4">
                  Welcome Rahul islam! <br /> Let's post an ad.
                </h2>

                <select
                  name="category"
                  required
                  className="select mt-8 select-bordered w-full mb-4 "
                >
                  <option selected>Mobiles</option>
                  <option>Electronics</option>
                  <option>Vehicles</option>
                </select>

                <input
                  name="name"
                  type="text"
                  placeholder="Product Name"
                  className="input input-bordered mb-4"
                  required
                />
                <input
                  name="resalePrice"
                  type="number"
                  placeholder="Resale price"
                  className="input input-bordered mb-4"
                  required
                />
                <input
                  name="price"
                  type="number"
                  placeholder="Original price"
                  className="input input-bordered  mb-4"
                  required
                />

                <input
                  name="number"
                  type="number"
                  placeholder="Years of use"
                  className="input input-bordered mb-4"
                  required
                />
                <select
                  name="location"
                  required
                  className="select select-bordered w-full mb-4 "
                >
                  <option disabled selected>
                    Location
                  </option>
                  <option>Dhaka</option>
                  <option>Comilla</option>
                  <option> Chattogram</option>
                  <option>Rajshahi</option>
                  <option>Rangpur</option>
                  <option> Mymensingh</option>
                  <option> Mymensingh</option>
                  <option>Sylhet</option>
                  <option>Barishal</option>
                </select>

                <textarea
                  name="description"
                  placeholder="Description"
                  required
                  className="textarea textarea-bordered textarea-md w-full mb-4 "
                ></textarea>

                <input
                  name="image"
                  type="file"
                  required
                  className="file-input file-input-bordered w-full mb-8 "
                />

                <input type="submit" className="btn btn-accent w-full " />
              </div>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default AddProductMordal;
