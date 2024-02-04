import React from "react";
import Link from "next/link";

const Roadmap = () => {
  return (
    <div className='rounded-lg bg-white p-5'>
      <div className='flex flex-row justify-between'>
        <h3>Roadmap</h3>
        <Link href='/roadmap'>
          <p className='text-sm font-semibold underline text-royal-blue-400 hover:text-royal-blue-300 self-end '>
            View
          </p>

        </Link>
      </div>
      <div className='mt-5 leading-8'>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row items-center gap-x-3'>
            <div className='w-2 h-2 bg-orange rounded-full' />
            <li className='text-gray-300'>Planned</li>
          </div>
          <span className='text-gray-300 text-lg font-bold'>2</span>
        </div>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row items-center gap-x-3'>
            <div className='w-2 h-2 bg-primary rounded-full' />
            <li className='text-gray-300'>In-Progress</li>
          </div>
          <span className='text-gray-300 text-lg font-bold'>3</span>
        </div>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row items-center gap-x-3'>
            <div className='w-2 h-2 bg-sky-blue rounded-full' />
            <li className='text-gray-300'>Live</li>
          </div>
          <span className='text-gray-300 text-lg font-bold'>1</span>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
