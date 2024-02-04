import React from "react";
import Link from "next/link";

const NewFeedback = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen mt-20'>
      <Link href='/' className='flex flex-row'>
        <h4>Go Back</h4>
      </Link>
      <div className='container mx-auto w-2/5 bg-white p-10'>
        <h1 className='text-med-blue'>Create New Feedback</h1>

        <div className='mt-9'>
          <h4 className='font-bold text-med-blue'>Feedback Title</h4>
          <h4 className='text-med-blue'>Add a short, descriptive headline</h4>

          <h4 className='font-bold text-med-blue'>Category</h4>
          <h4 className='text-med-blue'>Choose a category for your feedback</h4>

          <h4 className='font-bold text-med-blue'>Feedback Detail</h4>
          <h4 className='text-med-blue'>
            Include any specific comments on what should be improved, added,
            etc.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default NewFeedback;
