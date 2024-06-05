import React, { useEffect, useRef, useState } from "react";

import { useMediaQuery } from "@mui/material";

import { Link, NavLink } from "react-router-dom";

import Fancybox from "../components/fancybox-library/fancybox";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Zoom } from "react-awesome-reveal";
import "./gallery-css/gallery.css";
import styles from "./gallery-css/gallery.module.css";
import { Container } from "react-bootstrap";
import { Nav, Tab, Tabs } from "react-bootstrap";
const Portfolio = () => {
  const isMobile = useMediaQuery("(max-width:767px)");
  const isTablet = useMediaQuery("(max-width:1024px)");
  const allImages = [
    {
      items: [
        {
          src: "assets/images/portfolio/p1.jpg",
          alt: "Prototype UX Research",
          title: "Digital Marketing",
          description: "Prototype UX Research",
        },
      ],
    },
    {
      items: [
        {
          src: "assets/images/portfolio/p2.jpg",
          alt: "UX Research",
          title: "Awesome Creative",
          description: "UX Research",
        },
        {
          src: "assets/images/portfolio/p3.jpg",
          alt: "Design, Photoshop",
          title: "Business Solution",
          description: "Design, Photoshop",
        },
      ],
    },
    {
      items: [
        {
          src: "assets/images/news/WS-Travco-Launch.png",
          alt: "Travco",
          title: "Web Design",
          description: "Travco",
        },
      ],
    },
    {
      items: [
        {
          src: "assets/images/news/WS-Cleopark-Launch.jpg",
          alt: "Cleopark",
          title: "Web Design",
          description: "Cleopark",
        },
      ],
    },
    {
      items: [
        {
          src: "assets/images/portfolio/p4.jpg",
          alt: "Software Engineer",
          title: "Company Project",
          description: "Software Engineer",
        },
      ],
    },
    {
      items: [
        {
          src: "assets/images/portfolio/p5.jpg",
          alt: "Photoshop",
          title: "Mastering Web Design",
          description: "Photoshop",
        },
        {
          src: "assets/images/portfolio/p6.jpg",
          alt: "Design, Photoshop",
          title: "Awesome Logo Design",
          description: "Design, Photoshop",
        },
      ],
    },
  ];
  const photography = [
    {
      items: [
        {
          src: "assets/images/portfolio/p1.jpg",
          alt: "Prototype UX Research",
          title: "photography",
          description: "Prototype UX Research",
        },
      ],
    },
    {
      items: [
        {
          src: "assets/images/portfolio/p2.jpg",
          alt: "UX Research",
          title: "photography",
          description: "UX Research",
        },
      ],
    },
  ];
  const webDesign = [
    {
      items: [
        {
          src: "assets/images/news/WS-Travco-Launch.png",
          alt: "Travco",
          title: "View Website",
          description: "Travco",
        },
      ],
    },
    {
      items: [
        {
          src: "assets/images/news/WS-Cleopark-Launch.jpg",
          alt: "Cleopark",
          title: "View Website",
          description: "Cleopark",
        },
      ],
    },
  ];
  return (
    <>
      {/* Banner */}
      <div className="breatcome_area d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breatcome_title">
                <div className="breatcome_title_inner pb-2">
                  <h2>Portfolio</h2>
                </div>
                <div className="breatcome_content">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>{" "}
                      <i className="fa fa-angle-right"></i>{" "}
                      <span>Portfolio</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio_area pt-80 pb-70" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text_center mb-50 mt-3">
                <div className="section_sub_title uppercase mb-3">
                  <h6>PORTFOLIO</h6>
                </div>
                <div className="section_main_title">
                  <h1>Our Latest Works For</h1>
                  <h1>Your Business</h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <Container>
              <Tabs
                defaultActiveKey="All"
                id="gallery-tabs"
                className="d-flex  justify-content-center w-100"
              >
                <Tab eventKey="All" title="All">
                  <Fancybox>
                    <div className="row mt-30">
                      <div className="d-flex justify-content-center  flex-wrap  w-100">
                        {allImages.flatMap((category) =>
                          category.items.map((item, index) => (
                            <a
                              key={index}
                              data-fancybox="all"
                              href={item.src}
                              className="single_portfolio esg-center eg-post-157 eg-playa-element-0 esg-transition col-12 col-lg-4 p-3 mb-3 mb-lg-0"
                            >
                              <a href={item.src}>
                                <div className="single_portfolio_content d-flex flex-column justify-content-center align-items-center">
                                  <div className="single_portfolio_icon">
                                    <i className="fa fa-search-plus"></i>
                                  </div>
                                  <div className="single_portfolio_content_inner">
                                    <h4 className="text-light fw-bold">
                                      {item.description}
                                    </h4>
                                    <h6 className="text-light">
                                      <a href="#">({item.title})</a>
                                    </h6>
                                  </div>
                                </div>
                              </a>
                              <Zoom
                                duration={2000}
                                delay={0}
                                triggerOnce="true"
                              >
                                <img
                                  alt={item.gallerySectionName}
                                  src={item.src}
                                  style={{ width: "100%", height: "300px" }}
                                />
                              </Zoom>
                            </a>
                          ))
                        )}
                      </div>
                    </div>
                  </Fancybox>
                </Tab>
                <Tab eventKey="Photography" title="Photography">
                  <Fancybox>
                    <div className="row justify-content-center mt-30">
                      <div className="d-flex justify-content-center align-items-center flex-wrap  w-100">
                        {photography.flatMap((category) =>
                          category.items.map((item, index) => (
                            <a
                              key={index}
                              data-fancybox="all"
                              href={item.src}
                              className="single_portfolio esg-center eg-post-157 eg-playa-element-0 esg-transition col-12 col-lg-4 p-3 mb-3 mb-lg-0"
                            >
                              <a href={item.src}>
                                <div className="single_portfolio_content d-flex flex-column justify-content-center align-items-center">
                                  <div className="single_portfolio_icon">
                                    <i className="fa fa-search-plus"></i>
                                  </div>
                                  <div className="single_portfolio_content_inner">
                                    <h4 className="text-light fw-bold">
                                      {item.description}
                                    </h4>
                                    <h6 className="text-light">
                                      <a href="#">({item.title})</a>
                                    </h6>
                                  </div>
                                </div>
                              </a>
                              <Zoom
                                duration={2000}
                                delay={0}
                                triggerOnce="true"
                              >
                                <img
                                  alt={item.gallerySectionName}
                                  src={item.src}
                                  style={{ width: "100%", height: "300px" }}
                                />
                              </Zoom>
                            </a>
                          ))
                        )}
                      </div>
                    </div>
                  </Fancybox>
                </Tab>
                <Tab eventKey="Web Design" title="Web Design">
                  <Fancybox>
                    <div className="row ju mt-30">
                      <div className="d-flex justify-content-center align-items-center flex-wrap  w-100">
                        {webDesign.flatMap((category) =>
                          category.items.map((item, index) => (
                            <a
                              key={index}
                              data-fancybox="all"
                              href={item.src}
                              className="single_portfolio esg-center eg-post-157 eg-playa-element-0 esg-transition col-12 col-lg-4 p-3 mb-3 mb-lg-0"
                            >
                              <a href={item.src}>
                                <div className="single_portfolio_content d-flex flex-column justify-content-center align-items-center">
                                  <div className="single_portfolio_icon">
                                    <i className="fa fa-search-plus"></i>
                                  </div>
                                  <div className="single_portfolio_content_inner">
                                    <h4 className="text-light fw-bold">
                                      {item.description}
                                    </h4>
                                    <h6 className="text-light">
                                      <a href="#">({item.title})</a>
                                    </h6>
                                  </div>
                                </div>
                              </a>
                              <Zoom
                                duration={2000}
                                delay={0}
                                triggerOnce="true"
                              >
                                <img
                                  alt={item.gallerySectionName}
                                  src={item.src}
                                  style={{ width: "100%", height: "300px" }}
                                />
                              </Zoom>
                            </a>
                          ))
                        )}
                      </div>
                    </div>
                  </Fancybox>
                </Tab>
              </Tabs>
            </Container>
            {/*<div className="col-md-12">
              <Tabs>
                <TabList className="portfolio_menu menu-filtering">
                  <Tab className="current_menu_item">All Works</Tab>
                  {portfolioItems.map((category, index) => (
                    <Tab key={index}>{category.category}</Tab>
                  ))}
                </TabList>

                <TabPanel>
                  <TransitionGroup className="row image_load">
                    {portfolioItems.flatMap((category) =>
                      category.items.map((item, index) => (
                        <CSSTransition
                          key={index}
                          timeout={300}
                          classNames="fade"
                        >
                          <div className="col-lg-4 col-md-6 col-sm-12 grid-item">
                            <div className="single_portfolio">
                              <div className="single_portfolio_inner">
                                <div className="single_portfolio_thumb">
                                  <a href="#">
                                    <img src={item.src} alt={item.alt} />
                                  </a>
                                </div>
                              </div>
                              <div className="single_portfolio_content">
                                <Fancybox
                                  href={item.src}
                                  className="portfolio-icon"
                                  data-fancybox="gallery"
                                >
                                  <div className="single_portfolio_icon">
                                    <i className="fa fa-search-plus"></i>
                                  </div>
                                  <div className="single_portfolio_content_inner">
                                    <span>{item.description}</span>
                                    <h2>
                                      <a href="#">{item.title}</a>
                                    </h2>
                                  </div>
                                </Fancybox>
                              </div>
                            </div>
                          </div>
                        </CSSTransition>
                      ))
                    )}
                  </TransitionGroup>
                </TabPanel>

                {portfolioItems.map((category, index) => (
                  <TabPanel key={index}>
                    <TransitionGroup className="row image_load">
                      {category.items.map((item, index) => (
                        <CSSTransition
                          key={index}
                          timeout={300}
                          classNames="fade"
                        >
                          <div className="col-lg-4 col-md-6 col-sm-12 grid-item">
                            <div className="single_portfolio">
                              <div className="single_portfolio_inner">
                                <div className="single_portfolio_thumb">
                                  <a href="#">
                                    <img src={item.src} alt={item.alt} />
                                  </a>
                                </div>
                              </div>
                              <div className="single_portfolio_content">
                                <Fancybox
                                  href={item.src}
                                  className="portfolio-icon"
                                  data-fancybox="gallery"
                                >
                                  <div className="single_portfolio_icon">
                                    <i className="fa fa-search-plus"></i>
                                  </div>
                                  <div className="single_portfolio_content_inner">
                                    <span>{item.description}</span>
                                    <h2>
                                      <a href="#">{item.title}</a>
                                    </h2>
                                  </div>
                                </Fancybox>
                              </div>
                            </div>
                          </div>
                        </CSSTransition>
                      ))}
                    </TransitionGroup>
                  </TabPanel>
                ))}
              </Tabs>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
