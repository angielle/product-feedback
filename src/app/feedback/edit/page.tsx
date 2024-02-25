import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/button/Button";
import Input from "@/app/components/form/Input";
import TextArea from "@/app/components/form/TextArea";
import EditFeedbackIcon from "public/assets/shared/icon-edit-feedback.svg";
import LeftArrowIcon from "public/assets/shared/icon-arrow-left.svg";

const EditFeedback = () => {
  const category_options = ["Feature", "UI", "UX", "Enhancement", "Bug"];
  const update_status_options = ["Suggestion", "Planned", "In-Progress", "Live"];

  return (
    <div className='flex justify-center mt-8'>
      <div className='w-4/12 px-10'>
        <Link
          href='/'
          className='flex flex-row items-center px-5 py-3 gap-3 mb-16 rounded-lg'
        >
          <Image src={LeftArrowIcon} alt='add feedback' />
          <h4 className='font-bold text-gray-300 hover:underline'>Go Back</h4>
        </Link>
        <div className='container rounded-lg bg-white px-10 py-9'>
          <Image src={EditFeedbackIcon} alt='edit feedback' className='-mt-16' />
          <h1 className='text-state-blue-300 my-10'>
            Editing 'Add a dark theme option'
          </h1>
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
              {category_options.map((option, index) => (
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
              <h4 className='font-bold text-state-blue-300'>Update Status</h4>
              <h4 className='text-gray-300 mb-5'>
                Change feedback status
              </h4>
            </div>
            <select
              id='dropdown'
              className='custom-focus block w-full rounded py-3 px-4 bg-gray-100 hover:border-royal-blue-400  text-tertiary'
            >
              {update_status_options.map((option, index) => (
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

          <div className='flex flex-row items-center justify-between'>
            <div>
              <Link href='/'>
                <Button name='Delete' type='danger' />
              </Link>
            </div>
            <div className='flex flex-row'>
              <Link href='/'>
                <Button name='Cancel' type='tertiary' />
              </Link>
              <Button name='Add Feedback' type='primary' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditFeedback;
