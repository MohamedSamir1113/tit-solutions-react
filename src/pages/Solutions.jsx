import React, { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import BgArea from "../components/BgArea";
import Section1Area from "../components/Section1Area";
import Section2Area from "../components/Section2Area";

const Solutions = () => {
  useEffect(() => {
    document.title = "Solutions";
  }, []);

  return (
    <>
      <BgArea title1="Solution" title2="Home" path="/" />
      <Section1Area
        title="Website Development"
        description="We deliver intuitive and fast websites services for the hospitality industry and more! Our web developers can build custom websites that meet your customers' expectations and make you win the competition with your website's appearance, usability, and accessibility."
        list={
          <ul className="list-unstyled">
            <li>
              <Link to="/hotels-resorts">Hotels & Resorts</Link>
            </li>
            <li>
              <Link to="/travel-tours">Travel & Tours</Link>
            </li>
            <li>
              <Link to="/nile-cruises">Nile Cruises</Link>
            </li>
            <li>
              <Link to="/general-purposes">General Purposes</Link>
            </li>
          </ul>
        }
        imgSrc="assets/images/solutions/s1.jpg"
        linkPath="/website-development"
      />
      <Section2Area
        title="Booking Engine"
        description="With a user-friendly booking engine that works as a sales channel for your hotel, you can maximize your direct bookings easily! We provide you with a powerful reservation system that allows you to create specials, handle multiple rooms bookings, upsell services, and much more."
        imgSrc="assets/images/solutions/s2.jpg"
        list={
          <ul className="list-unstyled">
            <li>
              <Link to="/attraction-d-edge">Attraction D-Edge</Link>
            </li>
            <li>
              <Link to="/SynXis">SynXis</Link>
            </li>
            <li>
              <Link to="/nile-cruise-booking-engine">
                Nile Cruise Booking Engine
              </Link>
            </li>
          </ul>
        }
        linkPath="/booking-engine"
      />

      <Section1Area
        title="Web Check-In Solution"
        imgSrc="assets/images/solutions/s3.jpg"
        description="During this challenging time, Hotels & Resorts need to implement a solution to facilitate a smooth, fast, and paperless Check-In for the guests. Our solution ensures a better experience for our guests and more reliable protection for our teams."
        linkPath="/web-check-in-solution"
      />
    </>
  );
};

export default Solutions;
