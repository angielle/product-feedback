import React from "react";

interface CategoryProps {
  name: string;
  disable?: boolean;
}

const Category = ({ name, disable }: CategoryProps) => {
  return (
    <span className={`inline-block px-4 py-1 h-min rounded-lg font-bold text-sm text-royal-blue-400 bg-royal-blue-100 ${disable ? '' : 'hover:bg-royal-blue-200'}`}>
      {name}
    </span>
  );
};

export default Category;
