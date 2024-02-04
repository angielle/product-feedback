import React from "react";
import Button from "@/app/components/button/Button";

const AddComment = () => {
  return (
    <div className='flex flex-col rounded-lg px-5 py-9 mt-5 bg-white'>
      <h3 className='font-bold text-tertiary'>Add Comment</h3>
      <div className='flex items-center justify-center my-5'>
        <textarea className='block w-full rounded resize-none py-3 px-4 bg-gray-100 focus:border-royal-blue-400  text-tertiary' placeholder='Type your comment here' maxLength={250}/>
      </div>
      <div className='flex flex-row justify-between'>
        <p className='text-base text-gray-300'>250 Characters left</p>
        <div className='flex justify-end'>
          <Button name='Post Comment' type='primary' />
        </div>
      </div>
    </div>
  );
};

export default AddComment;
