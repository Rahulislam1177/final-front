import React from "react";
import loder from "../../assets/Photos/loader.gif";
const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <img className="w-1/10" src={loder} alt="" />
    </div>
  );
};

export default Loading;
