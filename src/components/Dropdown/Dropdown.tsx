import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface DropdownProps {
  label: string;
  placeholder: string;
  items: string[];
  value: string | null; // Mirip v-model untuk menyimpan nilai terpilih
  onChange: (value: string) => void; // Mirip event @update:modelValue di Vue
  validationMessage?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  placeholder,
  items,
  value,
  onChange,
  validationMessage,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (item: string) => {
    onChange(item); // Memperbarui nilai terpilih menggunakan onChange
    setIsOpen(false);
  };

  return (
    <div className="w-full min-w-80 mx-auto">
      {/* Label */}
      <label
        htmlFor="dropdown"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>

      {/* Dropdown Button */}
      <div className="relative">
        <button
          id="dropdown"
          type="button"
          onClick={toggleDropdown}
          className="w-full px-4 py-2 text-left text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <span className="block truncate">
            {value || <span className="text-gray-400">{placeholder}</span>}
          </span>
          <FiChevronDown className="absolute right-3 top-3.5 text-gray-500" />
        </button>

        {/* Dropdown List */}
        {isOpen && (
          <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
            {items.map((item) => (
              <button
                key={item}
                onClick={() => handleSelect(item)}
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Validation Message */}
      {validationMessage && (
        <p className="mt-1 text-sm text-red-600">{validationMessage}</p>
      )}
    </div>
  );
};

export default Dropdown;
