import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/button/Button";
import Lefticon from "public/assets/shared/icon-arrow-left.svg";

const Header = () => {
  return (
    <div className='flex items-center justify-between rounded-lg px-5 mb-5 h-24'>
      <div className='w-1/4 px-2'>
        <div className='h-full'>
          <div className='flex flex-col'>
            <div className='flex flex-row items-center gap-3'>
              <Image src={Lefticon} alt='go back' />
              <Link href='/'>
                <h4 className='font-bold text-gray-300 hover:underline'>
                  Go Back
                </h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='w-1/4 flex justify-end'>
        <Link href='/feedback/edit'>
          <Button name='Edit Feedback' type='secondary' />
        </Link>
      </div>
    </div>
  );
};

export default Header;
