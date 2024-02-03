import React from "react";
import Category from "./category/Category";
import Roadmap from "./roadmap/Roadmap";

const Sidebar = () => {
  return (
    <div>
      <div className='bg-desktop-bg'>
        <h2>Frontend Mentor</h2>
      </div>
      <h4>Feedback Board</h4>
      <Category />
      <Roadmap />
    </div>
  );
};

export default Sidebar;
