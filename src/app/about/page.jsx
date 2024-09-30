import React from "react";
import AboutUs from "../components/aboutPageComponents/aboutUs/AboutUs";
import OurMission from "../components/aboutPageComponents/ourMission/OurMission";
import OurVision from "../components/aboutPageComponents/ourVision/OurVision";
import SeeAboutServices from "../components/aboutPageComponents/seeAboutServices/SeeAboutServices";
import AboutUsCards from "../components/aboutPageComponents/aboutUsCards/AboutUsCards";

const page = () => {
  return (
    <div>
      <AboutUs />
      <AboutUsCards/>
      <OurVision />
      <OurMission />
      <SeeAboutServices />
    </div>
  );
};

export default page;
