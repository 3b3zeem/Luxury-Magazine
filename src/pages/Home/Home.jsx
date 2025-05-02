import React from "react";
import Hero from '../../components/Home/HeroSection/Hero';
import Video from "../../components/Home/Vid/Video";
import Vision from "../../components/Home/Vision/Vision";

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <Video />
      <Vision />
    </React.Fragment>
  );
};

export default Home;
