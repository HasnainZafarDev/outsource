import CompanyStats from "./components/companyStats/CompanyStats";
import Features from "./components/features/Features";
import FeaturesImages from "./components/features/WhiteBackgroundComponent";
import HomeSection from "./components/homeSection/HomeSection";
import HumanizedServices from "./components/humanizedServices/HumanizedServices";
import RequestForQuote from "./components/requestForQuote/RequestForQuote";
import Services from "./components/seeServices/SeeServices";
import TaxiBookingDispatcher from "./components/taxiBookingDispatcher/TaxiBookingDispatcher";
import "./globals.css";
export default function Home() {
  return (
    <>
      {/* <div className="container"> */}
      <HomeSection />
      {/* <CompanyStats /> */}
      <TaxiBookingDispatcher />
      <Features />
      <FeaturesImages />
      <RequestForQuote />
      <HumanizedServices />
      <Services />
      {/* </div> */}
    </>
  );
}
