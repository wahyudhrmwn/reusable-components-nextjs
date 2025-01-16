import React from "react";

interface TableColumn {
  key: string;
  header: string;
}

interface TableProps {
  columns: TableColumn[];
  data: Record<string, any>[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-4 py-2 text-left text-sm font-medium text-gray-700"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${
                rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-gray-100`}
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="px-4 py-2 text-sm text-gray-600 border-t border-gray-300"
                >
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;