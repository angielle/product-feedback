import React from "react";
import Image from "next/image";
import ArrowUpIcon from "public/assets/shared/icon-arrow-up.svg";

interface UpvoteProps {
  count: number;
  size?: "sm" | "md";
}

const Upvote = ({ count, size }: UpvoteProps) => {
  return (
    <div
      className={`inline-flex flex-row items-center rounded-lg px-3 py-3 gap-2 bg-royal-blue-100 hover:bg-royal-blue-200`}
    >
      <Image src={ArrowUpIcon} alt='upvote' />
      <span className='text-sm font-bold text-state-blue-300'>{count}</span>
    </div>
  );
};

export default Upvote;
