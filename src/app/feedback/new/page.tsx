import React, { useState } from "react";
import Link from "next/link";
import Button from "@/app/components/button/Button";

const NewFeedback = () => {
  const options = ["Feature", "UI", "UX", "Enhancement", "Bug"];

  return (
    <div className='flex flex-col items-center justify-center h-full mt-20'>
      <Link href='/' className='flex flex-row'>
        <h4>Go Back</h4>
      </Link>
      <div className='container mx-auto w-2/6 bg-white p-10'>
        <h1 className='text-state-blue-300'>Create New Feedback</h1>

        <div className='mt-9'>
          <div className='my-5'>
            <h4 className='font-bold text-state-blue-300'>Feedback Title</h4>
            <h4 className='text-gray-300 mb-5'>
              Add a short, descriptive headline
            </h4>
            <input
              className='block w-full rounded py-3 px-4 bg-gray-100 focus:border-royal-blue-400  text-secondary'
              type='text'
            />
          </div>

          <div className='my-5'>
            <h4 className='font-bold text-state-blue-300'>Category</h4>
            <h4 className='text-gray-300 mb-5'>
              Choose a category for your feedback
            </h4>
          </div>
          <select
            id='dropdown'
            className='custom-focus block w-full rounded py-3 px-4 bg-gray-100 hover:border-royal-blue-400  text-secondary'
          >
            {options.map((option, index) => (
              <option
                key={index}
                value={option}
                className='text-lg text-gray-300 hover:text-white'
              >
                {option}
              </option>
            ))}
          </select>
          <div className='my-5'>
            <h4 className='font-bold text-state-blue-300'>Feedback Detail</h4>
            <h4 className='text-gray-300 mb-5'>
              Include any specific comments on what should be improved, added,
              etc.
            </h4>
            <textarea className='block w-full rounded resize-none py-3 px-4 bg-gray-100 focus:border-royal-blue-400  text-secondary' />
          </div>
        </div>

        <div className='flex flex-row items-center justify-end'>
          <Button name='Cancel' type='secondary' />
          <Button name='Add Feedback' type='primary' />
        </div>
      </div>
    </div>
  );
};

export default NewFeedback;
