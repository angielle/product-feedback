import React from "react";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('/assets/suggestions/desktop/background-header.png')",
        position: "relative",
        color: "white",
      }}
      className='flex bg-no-repeat bg-cover h-32 rounded-lg'
    >
      <div className='self-end px-5 pb-5'>
        <h2 className='font-bold text-white'>Frontend Mentor</h2>
        <h4 className='text-white'>Feedback Board</h4>
      </div>
    </div>
  );
};

export default Banner;
