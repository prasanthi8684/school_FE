import React from 'react';
import Banners from "./Banners";
import LatestNews from "./LatestNews";
import BelovedTeachers from "./BelovedTeachers";
import OldMemories from "./OldMemories";
import Testimonials from "./Testimonials";

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <Banners />
      <LatestNews />
      <BelovedTeachers />
      <OldMemories />
      <Testimonials />
    </div>
  );
};

export default Home;
