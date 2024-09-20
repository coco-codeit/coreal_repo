"use client";
import { SetStateAction, useState } from "react";

export default function Pagination({
  totalItems,
  itemsPerPage,
  onChange,
}: {
  totalItems: number;
  itemsPerPage: number;
  onChange: React.Dispatch<SetStateAction<number>>;
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleClick = (num: number) => {
    setCurrentPage(num);
    onChange(num);
  };

  return (
    <ul className="flex flex-row gap-1">
      {Array(totalPages)
        .fill(1)
        .map((n, i) => {
          const number = n + i;
          return (
            <li
              key={`pagination-${number}`}
              onClick={() => handleClick(number)}
              data-selected={currentPage === number}
            >
              {number}
            </li>
          );
        })}
    </ul>
  );
}
