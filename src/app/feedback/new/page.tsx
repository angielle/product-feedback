import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/button/Button";
import Input from "@/app/components/form/Input";
import TextArea from "@/app/components/form/TextArea";
import Header from "../components/Header";
import NewFeedbackIcon from "public/assets/shared/icon-new-feedback.svg";
import LeftArrowIcon from "public/assets/shared/icon-arrow-left.svg";

const NewFeedback = () => {
  const options = ["Feature", "UI", "UX", "Enhancement", "Bug"];

  return (
    <div className='flex justify-center mt-20'>
      <div className='w-4/12 px-10'>
        <Header hideAction />
        <div className='container rounded-lg bg-white px-10 py-9'>
          <Image src={NewFeedbackIcon} alt='new feedback' className='-mt-16' />
          <h1 className='text-state-blue-300 my-10'>Create New Feedback</h1>
          <div className='mt-9'>
            <div className='my-5'>
              <h4 className='font-bold text-state-blue-300'>Feedback Title</h4>
              <h4 className='text-gray-300 mb-5'>
                Add a short, descriptive headline
              </h4>
              <Input />

            </div>

            <div className='my-5'>
              <h4 className='font-bold text-state-blue-300'>Category</h4>
              <h4 className='text-gray-300 mb-5'>
                Choose a category for your feedback
              </h4>
            </div>
            <select
              id='dropdown'
              className='custom-focus block w-full rounded py-3 px-4 bg-gray-100 hover:border-royal-blue-400  text-tertiary'
            >
              {options.map((option, index) => (
                <option
                  key={index}
                  value={option}
                  className='text-lg text-gray-300 hover:text-white'
                >
                  {option}
                </option>
              ))}
            </select>
            <div className='my-5'>
              <h4 className='font-bold text-state-blue-300'>Feedback Detail</h4>
              <h4 className='text-gray-300 mb-5'>
                Include any specific comments on what should be improved, added,
                etc.
              </h4>
              <TextArea />

            </div>
          </div>

          <div className='flex flex-row items-center justify-end'>
            <Link href='/'>
              <Button name='Cancel' type='tertiary' />
            </Link>
            <Button name='Add Feedback' type='primary' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFeedback;
