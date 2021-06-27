import React from 'react';
import Contracts from "./Contracts/Contracts";
import AboutUs from "./AboutUs/AboutUs";
import Statistics from "./Statistics/Statistics";
import Description from "./Description/Description";

const IntroPage = () => {
  return (
    <main>
      <div>
        <Description/>
        <Contracts/>
        <Statistics/>
        <AboutUs/>
      </div>
    </main>
  );
}

export default IntroPage;
