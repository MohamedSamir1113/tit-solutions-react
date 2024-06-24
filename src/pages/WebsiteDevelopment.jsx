import { useEffect } from "react";

import BgArea from "../components/BgArea";
import Section1Area from "../components/Section1Area";
import Section2Area from "../components/Section2Area";

function WebsiteDevelopment() {
  useEffect(() => {
    document.title = "Website Development";
  }, []);

  return (
    <>
      {/*bg*/}
      <BgArea
        title1={`Website Development`}
        title2={`Solutions`}
        path={`/solutions`}
      />
      <Section1Area
        title="Hotels & Resorts"
        imgSrc="assets/images/digital-marketing-in-egypt-for-hotels-solutions-hotels-resorts-202120114146849.jpg"
        linkPath="/solutions/website-development/hotels-resorts"
        description=" Keep your website up-to-date and user-friendly all the time with the help of our web development experts. We know that all hotels have a website but do the design of your hotel site and images encourage people to book directly? Is your hotel’s website optimized so that customers will actually see you when they search online? That is exactly how we do our job to attract lookers and bookers!"
      />
      {/*Hotels and resorts*/}
      <Section2Area
        title="Travel & Tours"
        description=" We offer unique & custom made Website Designing &
                    Development for hospitality sector. Our solutions cover
                    Travel agents, hotels, Resorts and Nile cruises. Our promise
                    is to provide world-class website design with the ability to
                    integrate with our user friendly Connect booking engine to
                    take your website works as a powerful online agent for you.
                    This will ensure presenting your image in the best way
                    infront of your clientele & drive more sales."
        imgSrc="assets/images/solutions/s2.jpg"
        linkPath="/solutions/website-development/travel-tours"
      />{" "}
      {/*Travels and tours*/}
      <Section1Area
        title="Nile Cruises"
        description="Join our satisfied clients and let us create the responsive
                    website that you dream about for your Nile Cruise business!
                    We know your industry well and your particular needs in a
                    website. Our web developers team is extremely experienced
                    and trained for creating tailored websites like yours!"
        imgSrc="assets/images/digital-marketing-in-egypt-for-hotels-solutions-nile-cruises-202130133148568.jpg"
        linkPath="/solutions/website-development/nile-cruises"
      />
      {/*Nile cruises*/}
      <Section2Area
        title="General Purposes"
        description="T.I.T Solutions offers next-generation web development and
                    designing services to help you sail effortlessly through the
                    constantly evolving technological changes."
        imgSrc="assets/images/digital-marketing-in-egypt-for-hotels-solutions-general-purposes-202120115030332.jpg"
        linkPath="/solutions/website-development/general-purposes"
      />
      {/*general purposes*/}
    </>
  );
}

export default WebsiteDevelopment;
