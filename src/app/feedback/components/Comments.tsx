import React from "react";
import Button from "@/app/components/button/Button";

const Comments = () => {
  return (
    <div className='flex flex-col rounded-lg px-5 py-9 mt-5 bg-white'>
      <h3 className='font-bold text-tertiary'>4 Comments</h3>
      <div className='flex items-center justify-center my-5'>
      </div>
      <div className='flex flex-row justify-between'>
        <textarea
          className='block w-full rounded resize-none py-3 px-4 bg-gray-100 focus:border-royal-blue-400  text-tertiary'
          placeholder='Type your reply here'
          maxLength={250}
        />
        <div className='flex justify-end pl-3'>
          <Button name='Post Reply' type='primary' />
        </div>
      </div>
    </div>
  );
};

export default Comments;
