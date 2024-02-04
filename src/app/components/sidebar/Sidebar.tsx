import React from "react";
import Banner from "./banner/Banner";
import Filter from "./filter/Filter";
import Roadmap from "./roadmap/Roadmap";

const Sidebar = () => {
  return (
    <div className='flex flex-col gap-y-5'>
      <Banner />
      <Filter />
      <Roadmap />
    </div>
  );
};

export default Sidebar;
