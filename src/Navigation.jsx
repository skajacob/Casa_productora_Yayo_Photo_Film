import React from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Portfolio from "./pages/Portfolio";

function AboutNavigation() {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <About />
    </div>
  );
};

function ContactNavigation() {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <Contact />
    </div>
  );
};

function GalleryNavigation() {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <Gallery />
    </div>
  );
};

function PortfolioNavigation() {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <Portfolio />
    </div>
  );
};

export {
  AboutNavigation,
  ContactNavigation,
  GalleryNavigation,
  PortfolioNavigation,
};
