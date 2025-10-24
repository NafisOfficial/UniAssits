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
    <button onClick={onClick} type={type} className={` ${className}`} disabled={disabled}>
        {label}
    </button>
  );
};