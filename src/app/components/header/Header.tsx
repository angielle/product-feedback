import React from "react";
import Image from "next/image";
import SuggestionIcon from "public/assets/suggestions/icon-suggestions.svg";
import PlusIcon from "public/assets/shared/icon-plus.svg";
import DownIcon from "public/assets/shared/icon-arrow-down.svg";

const Header = () => {
  return (
    <div className='flex items-center rounded-lg px-5 mb-5 h-20 bg-slate-blue-200 '>
      <div className='w-1/4 px-2'>
        <div className='h-full flex items-center'>
          <div className='flex flex-row justify-center items-center gap-3'>
            <Image src={SuggestionIcon} alt='suggestion' />
            <h3 className='ml-2 font-bold text-white'>6 Suggestions</h3>
          </div>
        </div>
      </div>
      <div className='w-2/4 px-2 '>
        <div className='flex flex-row items-center gap-x-1'>
          <h4 className='text-white'>Sort by : &nbsp;</h4>
          <h4 className='font-bold text-white'>Most Upvotes</h4>
          <Image src={DownIcon} alt='most upvotes' />
        </div>
      </div>
      <div className='w-1/4 flex justify-end'>
        <div className='flex flex-row items-center px-5 py-3 gap-3 rounded-lg bg-violet-200 hover:bg-violet-100'>
          <Image src={PlusIcon} alt='add feedback' />
          <span className='text-lg font-bold text-white'>Add Feedback</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
