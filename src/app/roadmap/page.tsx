import React from "react";
import Header from "@/app/roadmap/components/Header";
import Card from "./components/Card";

const RoadmapPage = () => {
  return (
    <div className='flex items-center justify-center h-full mt-20'>
      <div className='container mx-auto w-7/12'>
        <Header />
        <div className='flex columns-3 gap-x-5'>
          <div className='flex-1'>
            <h3 className='text-state-blue-300'>Planned (2)</h3>
            <p className='text-gray-300 mb-7'>Ideas prioritized for research</p>
            <div>
              <Card
                title='More comprehensive reports'
                description='It would be great to see a more detailed breakdown of solutions.'
                upvote={123}
                commentsCount={2}
                category='Feature'
                status='Planned'
              />
            </div>
          </div>
          <div className='flex-1'>
            <h3 className='text-state-blue-300'>In-Progress (3)</h3>
            <p className='text-gray-300 mb-7'>Currently being developed</p>
              <Card
                title='More comprehensive reports'
                description='It would be great to see a more detailed breakdown of solutions.'
                upvote={123}
                commentsCount={2}
                category='Feature'
                status='In-Progress'
              />
              <Card
                title='Learning paths'
                description='Sequenced projects for different goals to help people improve.'
                upvote={28}
                commentsCount={2}
                category='Feature'
                status='In-Progress'
              />
          </div>
          <div className='flex-1'>
            <h3 className='text-state-blue-300'>Live (1)</h3>
            <p className='text-gray-300 mb-7'>Released features</p>
            <div>
              <Card
                title='More comprehensive reports'
                description='It would be great to see a more detailed breakdown of solutions.'
                upvote={123}
                commentsCount={2}
                category='Feature'
                status='Live'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;
