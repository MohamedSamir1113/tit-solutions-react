import { Link } from "react-router-dom";
import BgArea from "../components/BgArea";
import Section1Area from "../components/Section1Area";
import Section2Area from "../components/Section2Area";
import { useEffect } from "react";

function HotelECommerce() {
  useEffect(() => {
    document.title = "Hotel E-Commerce";
  }, []);
  return (
    <>
      <BgArea
        title1={`Hotel E-Commerce`}
        title2={`Services`}
        path={`/services`}
      />
      {/*bg*/}

      {/*E-commerce Consultant*/}
      <Section1Area
        title={`E-Commerce Consultancy`}
        description={`By applying our Hospitality Ecommerce Consultancy tips, we help you drive revenue, get your hotel the online attention it deserves, lower your customer acquisition costs, and engage with your guests online!`}
        linkPath={`/services/e-commerce/e-commerce-consultancy`}
        imgSrc={`assets/images/e-commerce-consultancy---services-for-hotels---hospitality-ecommerce-202125101549742.jpg`}
      />

      
      <Section2Area
      title={`E-Commerce Management`}
      description={`Keeping your hotel e-commerce strategy up-to-date and effective is a constant challenge for hotel owners; this is where T.I.T. Solutions offers the most value.`}
      linkPath={`/services/e-commerce/e-commerce-management`}
      imgSrc={`assets/images/hotel-e-commerce---hospitality-management-consulting---hotel-revenue-management-202125101751493.jpg`}
      />
      {/*E-Commerce Management*/}
    </>
  );
}

export default HotelECommerce;
