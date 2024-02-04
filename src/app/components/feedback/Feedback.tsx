import React from "react";
import Link from "next/link";
import Image from "next/image";
import Category from "../category/Category";
import ArrowUpIcon from "public/assets/shared/icon-arrow-up.svg";
import SuggestionIcon from "public/assets/shared/icon-comments.svg";

interface FeedbackProps {
  title: string;
  description: string;
  upvote: number;
  commentsCount: number;
  category: string;
  disable?: boolean;
}

const Feedback = ({
  title,
  description,
  upvote,
  commentsCount,
  category,
  disable = false,
}: FeedbackProps) => {
  return (
    <div className='flex rounded-lg px-5 py-9 mt-5 bg-white'>
      <div className='w-20 h-20 px-2'>
        <div className='h-full flex items-start'>
          <div className='flex flex-col justify-center items-center rounded-lg px-3 py-3 gap-2 bg-royal-blue-100 hover:bg-royal-blue-200'>
            <Image src={ArrowUpIcon} alt='upvote' />
            <span className='text-sm font-bold text-state-blue-300'>
              {upvote}
            </span>
          </div>
        </div>
      </div>
      <div className='flex-1 h-12 px-2'>
        <Link
          href='/feedback/detail'
          className={`${disable ? 'pointer-events-none' : 'hover:text-royal-blue-400'}`}
        >
          <h3 className='font-bold text-state-blue-300'>{title}</h3>
          <p className='mt-1 text-lg text-gray-300'>{description}</p>
          <div className='mt-3'>
            <Category name={category} disable />
          </div>
        </Link>
      </div>
      <div className='w-16 m-auto'>
        <div className='h-full flex items-center'>
          <div className='flex flex-row justify-center items-center rounded-lg gap-4'>
            <Image src={SuggestionIcon} alt='upvote' />
            <span className='text-lg font-bold text-state-blue-300'>
              {commentsCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
