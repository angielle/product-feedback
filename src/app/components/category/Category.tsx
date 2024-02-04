import React from "react";

interface CategoryProps {
  name: string;
  disableHover?: boolean;
}

const Category = ({ name, disableHover }: CategoryProps) => {
  return (
    <span className={`inline-block px-4 py-1 mt-3 rounded-lg font-bold text-sm text-royal-blue-300 bg-royal-blue-100 ${disableHover ? '' : 'hover:bg-royal-blue-200'}`}>
      {name}
    </span>
  );
};

export default Category;
