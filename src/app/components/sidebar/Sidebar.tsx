import React from "react";
import Banner from "./banner/Banner";
import Filter from "./filter/Filter";
import Roadmap from "./roadmap/Roadmap";

const Sidebar = () => {
  return (
    <div className='flex sm:flex-row md:flex-row lg:flex-col sm:gap-x-5 md:gap-x-5 lg:gap-y-5 sm:py-5 md:py-5 lg:py-0'>
      <Banner />
      <Filter />
      <Roadmap />
    </div>
  );
};

export default Sidebar;
