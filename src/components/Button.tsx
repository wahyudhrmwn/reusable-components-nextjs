import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = "primary" }) => {
  const baseStyle = "px-4 py-2 rounded text-white";
  const styles = {
    primary: `${baseStyle} bg-blue-500 hover:bg-blue-600`,
    secondary: `${baseStyle} bg-gray-500 hover:bg-gray-600`,
  };

  return (
    <button className={styles[variant]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
