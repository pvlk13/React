import React from "react";

function Button({
  children,
  type = "button",
  className = "",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  ...props
}) {
  return (
    <button className={`${bgColor} ${textColor} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
