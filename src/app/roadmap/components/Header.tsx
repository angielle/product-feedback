import React from "react";
import Link from "next/link";
import Image from "next/image";
import PlusIcon from "public/assets/shared/icon-plus.svg";
import Lefticon from "public/assets/shared/icon-arrow-left.svg";

const Header = () => {
  return (
    <div className='flex items-center justify-between rounded-lg px-5 mb-5 h-24 bg-slate-blue-200 '>
      <div className='w-1/4 px-2'>
        <div className='h-full'>
          <div className='flex flex-col'>
            <div className='flex flex-row items-center gap-3'>
              <Image src={Lefticon} alt='go back' />
              <Link href='/'>
                <h4 className='font-bold text-white hover:underline'>
                  Go Back
                </h4>
              </Link>
            </div>
            <h1 className='ml-2 font-bold text-white'>Roadmap</h1>
          </div>
        </div>
      </div>
      <div className='w-1/4 flex justify-end'>
        <Link
          href='/feedback/new'
          className='flex flex-row items-center px-5 py-3 gap-3 rounded-lg bg-primary hover:bg-primary-100'
        >
          <Image src={PlusIcon} alt='add feedback' />
          <span className='text-lg font-bold text-white'>Add Feedback</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
