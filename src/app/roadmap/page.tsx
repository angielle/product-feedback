import React from "react";
import Header from "@/app/roadmap/components/Header";

const RoadmapPage = () => {
  return (
    <div className='flex flex-col min-h-screen mt-20'>
      <div className='container mx-auto'>
        <Header />
        <div className='flex columns-3'>
          <div className='flex-1'>
            <h3 className='text-state-blue-300'>Planned</h3>
            <p className='text-dark-gray'>Ideas prioritized for research</p>
          </div>
          <div className='flex-1'>
            <h3 className='text-state-blue-300'>In-Progress</h3>
            <p className='text-dark-gray'>Currently being developed</p>
          </div>
          <div className='flex-1'>
            <h3 className='text-state-blue-300'>Live</h3>
            <p className='text-dark-gray'>Released features</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;
