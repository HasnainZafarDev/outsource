import React from "react";
import AboutUs from "../components/aboutPageComponents/aboutUs/AboutUs";
import OurMission from "../components/aboutPageComponents/ourMission/OurMission";
import OurVision from "../components/aboutPageComponents/ourVision/OurVision";
import SeeAboutServices from "../components/aboutPageComponents/seeAboutServices/SeeAboutServices";

const page = () => {
  return (
    <div>
      <AboutUs />
      <OurVision />
      <OurMission />
      <SeeAboutServices />
    </div>
  );
};

export default page;
