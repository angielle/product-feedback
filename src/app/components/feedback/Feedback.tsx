import React from "react";

interface FeedbackProps {
  title: string;
  description: string;
  vote: number;
  commentsCount: number;
  category: string;
}

const Feedback = ({
  title,
  description,
  vote,
  commentsCount,
  category,
}: FeedbackProps) => {
  return (
    <div className='bg-white flex rounded-lg px-10 py-5'>
      <div className='w-1/5 h-12'>
        <p>{vote}</p>
      </div>
      <div className='w-3/5 h-12'>
        <h1 className='text-med-blue'>{title}</h1>
        <h2 className='text-dark-gray'>{description}</h2>
      </div>
      <div className='w-1/5 h-12'>
        <p>{commentsCount}</p>
      </div>
    </div>
  );
};

export default Feedback;
