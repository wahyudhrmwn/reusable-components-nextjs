// import React from "react";
// import { FaFolder, FaFolderOpen, FaFile } from "react-icons/fa";

// interface FileTreeItem {
//   name: string;
//   type: string;
//   icon?: React.ReactNode;
//   children?: FileTreeItem[];
// }

// interface FileTreeProps {
//   items: FileTreeItem[];
// }

// const FileTree: React.FC<FileTreeProps> = ({ items }) => {
//   const renderTree = (items: FileTreeItem[]) => {
//     return (
//       <ul className="menu menu-xs bg-base-200 rounded-lg w-full max-w-xs">
//         {items.map((item, index) => (
//           <li key={index} className="ml-4"> {/* Add margin for children */}
//             {item.type === "folder" ? (
//               <details open className="group">
//                 <summary className="flex items-center gap-2 cursor-pointer">
//                   {/* Show folder icon, change only the style */}
//                   <FaFolderOpen className="text-yellow-500" />
//                   <span>{item.name}</span>
//                 </summary>
//                 {item.children && (
//                   <div className="ml-6">
//                     {renderTree(item.children)} {/* Indent children */}
//                   </div>
//                 )}
//               </details>
//             ) : (
//               <a className="flex items-center gap-2">
//                 <FaFile className="text-blue-500" />
//                 <span>{item.name}</span>
//               </a>
//             )}
//           </li>
//         ))}
//       </ul>
//     );
//   };

//   return <>{renderTree(items)}</>;
// };

// export default FileTree;
import React from "react";
import { FaFolder, FaFolderOpen, FaFile } from "react-icons/fa";

interface FileTreeItem {
  name: string;
  type: string;
  children?: FileTreeItem[];
}

interface FileTreeProps {
  items: FileTreeItem[];
}

const FileTree: React.FC<FileTreeProps> = ({ items }) => {
  const renderTree = (items: FileTreeItem[], isRoot = false) => {
    return (
      <ul className={`${isRoot ? "" : "relative border-l-2 border-gray-200 pl-4 -ml-2"}`}>
        {items.map((item, index) => (
          <li key={index} className="relative">
            {/* Horizontal Line to Parent */}
            {!isRoot && (
              <div
                className={`absolute bg-gray-300`}
              ></div>
            )}

            {/* Folder or File Rendering */}
            <div className="flex items-center gap-2">
              {item.type === "folder" ? (
                <details open className="group">
                  <summary className="flex items-center gap-2 cursor-pointer">
                    <span className="text-yellow-500">
                      {item.children ? <FaFolderOpen /> : <FaFolder />}
                    </span>
                    <span>{item.name}</span>
                  </summary>

                  {item.children && (
                    <div className="ml-4">
                      {renderTree(item.children)}
                    </div>
                  )}
                </details>
              ) : (
                <div className="flex items-center gap-2">
                  <FaFile className="text-blue-500" />
                  <span>{item.name}</span>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return <>{renderTree(items, true)}</>;
};

export default FileTree;
