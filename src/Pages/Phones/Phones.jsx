import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Phone from "./Phone";
import OrderNaw from "../OrderNaw/OrderNaw";
import Loading from "../../Components/Loading/Loading";

const Phones = () => {
  const { data: appointmentOptions = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/products");
      const data = await res.json();
      return data;
    },
  });
  const [Product, setProducts] = useState(null);
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="mb-10 mt-28">
      <div className="text-center my-10">
        <h3 className="text-secondary text-4xl mb-4 font-black ">
          Available All Product
        </h3>
        <p className="text-accent text-2xl">Please select Your Product</p>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 ">
        {appointmentOptions.map((option) => (
          <Phone
            key={option._id}
            appointmentOption={option}
            setProducts={setProducts}
          ></Phone>
        ))}
      </div>
      {Product && (
        <OrderNaw Product={Product} setPhone={setProducts}></OrderNaw>
      )}
    </div>
  );
};

export default Phones;
