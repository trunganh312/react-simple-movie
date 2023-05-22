import React from "react";

const Button = ({
  type = "button",
  onClick,
  className,
  background = "primary",
  children,
  disabled,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={` p-3 mt-auto font-bold text-white rounded-lg  ${
        background ? `bg-${background}` : ""
      } ${className} ${disabled ? "bg-slate-400 cursor-not-allowed" : ""}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
