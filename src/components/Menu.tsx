// src/components/Menu.tsx
import React from "react";
import Link from "next/link";

interface MenuItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  badge?: string;
  badgeType?: string;
}

interface MenuProps {
  items: MenuItem[];
  orientation?: "vertical" | "horizontal"; // Menu orientation
  className?: string; // Additional classes for styling
}

const Menu: React.FC<MenuProps> = ({ items, orientation = "horizontal", className = "" }) => {
  const orientationClass = orientation === "horizontal" ? "flex-row" : "flex-col";

  return (
    <ul
      className={`menu bg-white p-4 rounded-xl gap-4 flex ${orientationClass} ${className}`}
    >
      {items.map((item, index) => (
        <li key={index} className="p-2 hover:bg-gray-300 rounded-xl">
          <Link href={item.href}>
            <div className="flex items-center gap-2">
              {item.icon && <span className="icon">{item.icon}</span>}
              <span>{item.label}</span>
              {item.badge && (
                <span
                  className={`badge text-xs rounded-full px-2 py-1 ml-2 ${
                    item.badgeType === "warning"
                      ? "bg-yellow-500 text-white"
                      : item.badgeType === "info"
                      ? "bg-blue-500 text-white"
                      : item.badgeType === "success"
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
