import React from "react";
import Category from "./Category/Category";
import Quick from "./Quick/Quick";
import TwoLocation from "./TwoLocation/TwoLocation";

const Home = () => {
  return (
    <div>
      <Category></Category>
      <TwoLocation></TwoLocation>
      <Quick></Quick>
    </div>
  );
};

export default Home;
