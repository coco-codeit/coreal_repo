import React from "react";
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  const renderPageNumbers = (isSmallScreen: boolean) => {
    let pages: (number | string)[] = [];

    if (totalPages <= 9) {
      pages = Array.from({ length: totalPages }, (_, index) => index + 1);
    } else {
      if (isSmallScreen) {
        pages = [1, 2, 3, "...", totalPages];
      } else {
        if (currentPage < 5) {
          pages = [1, 2, 3, 4, 5, "...", totalPages];
        } else if (currentPage >= 5 && currentPage <= totalPages - 4) {
          pages = [
            1,
            "...",
            currentPage - 1,
            currentPage,
            currentPage + 1,
            "...",
            totalPages,
          ];
        } else {
          pages = [
            1,
            "...",
            totalPages - 4,
            totalPages - 3,
            totalPages - 2,
            totalPages - 1,
            totalPages,
          ];
        }
      }
    }

    return pages.map((page, index) =>
      typeof page === "number" ? (
        <button
          key={index}
          className={`flex items-center justify-center w-12 h-12 ${
            currentPage === page ? "text-black" : "text-gray-500"
          }`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ) : (
        <div
          key={index}
          className="flex items-center justify-center w-12 h-12 pb-1.5"
        >
          {page}
        </div>
      ),
    );
  };

  return (
    <div className="flex justify-center space-x-[10px]">
      <button
        className="flex items-center justify-center w-12 h-12 mr-[10px]"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <VscTriangleLeft
          size={20}
          className={`${
            currentPage === 1
              ? "text-gray-500 cursor-not-allowed"
              : "text-black"
          }`}
        />
      </button>

      <div className="hidden md:flex">{renderPageNumbers(false)}</div>
      <div className="flex md:hidden">{renderPageNumbers(true)}</div>

      <button
        className="flex items-center justify-center w-12 h-12 ml-[10px]"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <VscTriangleRight
          size={20}
          className={`${
            currentPage === totalPages
              ? "text-gray-500 cursor-not-allowed"
              : "text-black"
          }`}
        />
      </button>
    </div>
  );
};

export default Pagination;
