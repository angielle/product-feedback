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
      className='sm:w-1/3 md:w-1/3 lg:w-full lg:h-32 flex bg-no-repeat bg-cover rounded-lg'
    >
      <div className='self-end px-5 pb-5'>
        <h2 className='font-bold text-white'>Frontend Mentor</h2>
        <h4 className='text-white'>Feedback Board</h4>
      </div>
    </div>
  );
};

export default Banner;
