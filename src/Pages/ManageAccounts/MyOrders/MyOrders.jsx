import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import UserContext from "../../../context/UserContext";

const MyOrders = () => {
  const user = useContext(UserContext);
  const { data: Orders = [], isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/orders");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="">
      <div className="overflow-x-auto">
        <table className="table hover:table-zebra">
          {/* head */}
          <thead>
            <tr className="text-black">
              <th></th>
              <th>Product Name</th>
              <th>Mobile Number</th>
              <th>Addres</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {Orders.map((Order, i) => (
              <tr key={Order._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask w-20 h-20">
                        <img src={Order.image} alt="Img" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{Order.productName}</div>
                    </div>
                  </div>
                </td>

                <td>{Order.number}</td>
                <td>
                  {Order.city},{Order.addres}
                </td>
                <td>{Order.productPrice}TK</td>
                <td>
                  <button className="btn btn-success btn-xs">PAY NOW</button>
                </td>
                <td>
                  <button className="btn btn-error btn-xs">DELETE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
