import React, { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full space-y-1">
      {items.map((item, index) => (
        <div
          key={index}
          className="border rounded-lg overflow-hidden bg-base-200"
        >
          <button
            onClick={() => handleToggle(index)}
            className="w-full text-left p-4 text-xl font-medium bg-gray-100 hover:bg-gray-300 focus:outline-none"
          >
            {item.title}
          </button>
          <div
            className={`transition-all duration-300 ${
              activeIndex === index
                ? "max-h-[500px] p-4 bg-white"
                : "max-h-0 overflow-hidden"
            }`}
          >
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
