import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BgArea from "../components/BgArea";
import Section1Area from "../components/Section1Area";
import Section2Area from "../components/Section2Area";

const DEdge = () => {
  useEffect(() => {
    document.title = "D-Edge";
  }, []);
  return (
    <>
      <BgArea title1="D-EDGE" title2="Home" path="/" />

      <Section1Area
        title="Central Reservation System"
        description="Make your hotel website the most profitable sales channel
                    over the internet using the powerful D-EDGE reservation
                    system. It helps you boost your conversion rate and offer
                    your clients the best user experience. Try it now!"
        imgSrc="assets/images/d-edge/s1.jpg"
        linkPath="/d-edge/central-reservation-system"
        list={
          <ul className="list-unstyled">
            <li>
              <Link to="/d-edge/central-reservation-system/booking-engine-for-hotel">
                Booking Engine For Hotel
              </Link>
            </li>
            <li>
              <Link to="/d-edge/central-reservation-system/dedge-channel-manager">D-EDGE Channel Manager</Link>
            </li>
            <li>
              <Link to="/d-edge/central-reservation-system/d-edge-inventory-management">
                D-EDGE Inventory Management
              </Link>
            </li>
            <li>
              <Link to="/d-edge/central-reservation-system/gds-hotel-solutions">GDS Hotel Solutions</Link>
            </li>
          </ul>
        }
      />

      <Section2Area
        title="Guest Management"
        description=" It is all about personalization! Personalize your hotel's
                    guests' experience and make the right business decisions
                    with the help of D-EDGE Guest Management tools. Manage your
                    hotel's overall online reputation using the easiest ways
                    with us."
        linkPath="/d-edge/guest-management"
        imgSrc="assets/images/d-edge/s2.jpg"
        list={
          <ul className="list-unstyled">
            <li>
              <Link className="list-color" to="/d-edge/guest-management/hotel-crm">
                Hotel CRM
              </Link>
            </li>
            <li>
              <Link className="list-color" to="/d-edge/guest-management/guest-loyalty">
                Guest Loyalty
              </Link>
            </li>
            <li>
              <Link className="list-color" to="/d-edge/guest-management/guest-feedback">
                Guest Feedback
              </Link>
            </li>
          </ul>
        }
      />

      <Section1Area
        title="Data Intelligence"
        imgSrc="assets/images/d-edge/s3.jpg"
        description="This gives you an exhaustive understanding of your hotel’s
                    and your overall business performance, whatever your need
                    is; price monitoring, price recommendation, performance
                    analysis, our experts can provide it all."
        list={
          <ul className="list-unstyled">
            <li>
              <Link to="/d-edge/data-intelligence/price-monitoring">Price Monitoring</Link>
            </li>
            <li>
              <Link to="/d-edge/data-intelligence/price-recommendation">Price Recommendation</Link>
            </li>
            <li>
              <Link to="/d-edge/data-intelligence/performance-analysis">Performance Analysis</Link>
            </li>
          </ul>
        }
        linkPath="/d-edge/data-intelligence"
      />
    </>
  );
};

export default DEdge;
