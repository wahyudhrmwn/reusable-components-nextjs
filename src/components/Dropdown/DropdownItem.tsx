import React from "react";

interface DropdownItemProps {
  children: React.ReactNode;
  onClick: () => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
    >
      {children}
    </button>
  );
};

export default DropdownItem;
