import React from "react";
import Link from "next/link";

interface ButtonProps {
  name: string;
  type: "primary" | "secondary" | "tertiary" | "danger";
}

const Button = ({ name, type }: ButtonProps) => {
  let bgColorClass, hoverColorClass;

  switch (type) {
    case "primary":
      bgColorClass = "bg-primary";
      hoverColorClass = "hover:bg-primary-100";
      break;
    case "secondary":
      bgColorClass = "bg-secondary";
      hoverColorClass = "hover:bg-secondary-100";
      break;
    case "tertiary":
      bgColorClass = "bg-tertiary";
      hoverColorClass = "hover:bg-tertiary-100";
      break;
    case "danger":
      bgColorClass = "bg-red-200";
      hoverColorClass = "hover:bg-red-100";
      break;
    default:
      bgColorClass = "bg-primary";
      hoverColorClass = "hover:bg-primary-100";
      break;
  }

  return (
    <div
      className={`flex flex-row items-center px-5 py-3 mx-1 rounded-lg ${bgColorClass} ${hoverColorClass}`}
    >
      <p className='text-lg font-bold text-center text-white'>{name}</p>
    </div>
  );
};

export default Button;
