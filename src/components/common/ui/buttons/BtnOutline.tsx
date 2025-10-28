import React from 'react';

type ButtonProps = { 
    label: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
    disabled?: boolean;
}


export const BtnOutline: React.FC<ButtonProps> = ({
    label = "button",
    onClick,
    type = "button",
    className = "",
    disabled= false,
}) => {
  return (
    <button onClick={onClick} type={type} className={`border border-[#DC6D18] rounded-full px-5 py-2 cursor-pointer text-[#DC6D18] ${className}`} disabled={disabled}>
        {label}
    </button>
  );
};