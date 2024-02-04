import React from "react";
import Filter from "../filter/Filter";
import Roadmap from "../roadmap/Roadmap";

const Sidebar = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url('./public/assets/suggestions/desktop/background-header.png')",
        }}
      >
        <h2>Frontend Mentor</h2>
      </div>
      <h4>Feedback Board</h4>
      <Filter />
      <Roadmap />
    </div>
  );
};

export default Sidebar;
