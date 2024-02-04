import Category from "@/app/components/category/Category";
import React from "react";
import Upvote from "@/app/components/upvote/Upvote";
import Comment from "@/app/components/comment/Comment";

interface CardProps {
  title: string;
  description: string;
  upvote: number;
  commentsCount: number;
  category: string;
  status: 'Planned' | 'In-Progress' | 'Live'
}

const Card = ({
  title,
  description,
  upvote,
  commentsCount,
  category,
  status
}: CardProps) => {
  let bgColorClass, borderColorClass;

  switch (status) {
    case "Planned":
      bgColorClass = "bg-orange";
      borderColorClass = "border-orange";
      break;
    case "In-Progress":
      bgColorClass = "bg-primary";
      borderColorClass = "border-primary";
      break;
    case "Live":
      bgColorClass = "bg-sky-blue";
      borderColorClass = "border-sky-blue";
      break;
  }

  return (
    <div className={`rounded-lg bg-white border-t-7 ${borderColorClass} p-7 mb-6`}>
      <div className='flex flex-row items-center gap-3 mb-3'>
        <div className={`w-2 h-2 ${bgColorClass} rounded-full`} />
        <li className='list-none text-gray-300'>{status}</li>
      </div>
      <h3 className='text-secondary'>{title}</h3>
      <p className='mb-5 text-gray-300'>{description}</p>
      <div className='gap-y-4'>
        <Category name={category} disable />
        <div className='flex items-center justify-between mt-5'>
          <Upvote count={upvote} size='sm' />
          <div className='justify-end'>
            <Comment count={commentsCount} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
