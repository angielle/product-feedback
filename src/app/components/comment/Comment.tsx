import React from "react";
import Image from "next/image";
import SuggestionIcon from "public/assets/shared/icon-comments.svg";

interface CommentProps {
  count: number;
}

const Comment = ({ count }: CommentProps) => {
  return (
    <div className='flex flex-row justify-center items-center rounded-lg gap-4'>
      <Image src={SuggestionIcon} alt='upvote' />
      <span className='text-lg font-bold text-state-blue-300'>{count}</span>
    </div>
  );
};

export default Comment;
