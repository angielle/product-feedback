import React from "react";
import Category from "../../category/Category";

const Filter = () => {
  return (
    <div className="sm:w-1/3 md:1/3 lg:w-full rounded-lg bg-white flex flex-wrap gap-x-2 gap-y-2 px-5 py-5 ">
      <Category name='All' />
      <Category name='UI' />
      <Category name='UX' />
      <Category name='Enhancement' />
      <Category name='Bug' />
      <Category name='Feature' />
    </div>
  );
};

export default Filter;
