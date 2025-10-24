type ButtonProps = {
    label: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
    disabled?: boolean;
    
}

export const BtnGradient: React.FC<ButtonProps> = ({
    label = "Button",
    onClick,
    type = "button",
    className = "",
    disabled= false,
}) => {
  return (
    <button onClick={onClick} type={type} className={`bg-[linear-gradient(136.83deg,#E07522_4.45%,#F8A65D_97.83%)] rounded-full px-5 py-2 cursor-pointer text-white ${className}`} disabled={disabled}>
      {label}
    </button>
  );
};