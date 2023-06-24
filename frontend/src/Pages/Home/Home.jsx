import React from "react";
import Slider from "./Slider";
import Services from "./Services";
import MetaData from "../../Components/MetaData";

const Home = () => {
  return (
    <>
      <MetaData title="Home" />
      <Slider />
      <Services />
    </>
  );
};

export default Home;
