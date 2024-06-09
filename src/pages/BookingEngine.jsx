import { useEffect } from "react";
import BgArea from "../components/BgArea";
import Section1Area from "../components/Section1Area";
import Section2Area from "../components/Section2Area";

function BookingEngine() {
  
  useEffect(() => {
    document.title = "Booking Engine";
  }, []);

  return (
    <>
      <BgArea 
      title1={`Booking Engine`}
      title2={`solutions`}
      path={`/solutions`}
      />
      <Section1Area
      title={`Attraction D-Edge`}
      linkPath={`/attraction-d-edge`}
      imgSrc={`assets/images/digital-marketing-in-egypt-for-hotels-solutions-attraction-d-edge-202130132820642.jpg`}
      description={`A professional booking engine has to be your first priority, as well as website creation. Having just a working booking engine is not enough; you need the best booking engine to not lose even a single booking.`}
      />

      <Section2Area
      title={`SynXis`}
      linkPath={`/SynXis`}
      imgSrc={`assets/images/digital-marketing-in-egypt-for-hotels-solutions-synxis-20213013252534.jpg`}
      description={`Are you looking for a hotel booking engine that turns your website into a very powerful and effective sales channel? Well, SynXis, the booking engine, is the right solution for you.`}
      />

      <Section1Area
      title={`Nile Cruise Booking Engine`}
      linkPath={`/nile-cruise-booking-engine`}
      imgSrc={`assets/images/digital-marketing-in-egypt-for-hotels-solutions-nile-cruise-booking-engine-20212012411399.jpg`}
      description={`Connect Nile Cruises booking engine is the younger brother of connect hotel booking engine. Inhiriting all the user freindly features from his older brother; Nile cruises booking engine features the ability to deal with reservations based on the itenary of each Nile cruise seperately.`}
      />
    </>
  );
}

export default BookingEngine;
