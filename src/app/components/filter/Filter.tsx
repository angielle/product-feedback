import React from "react";
import Category from "../category/Category";

const Filter = () => {
  return (
    <div className="rounded-lg bg-white flex flex-wrap gap-x-2 p-5">
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
