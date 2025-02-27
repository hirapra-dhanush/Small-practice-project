import React from 'react';

function Movie_App_Pagination({ current, total, handlePageChange }) {
  function page() {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  return (
    <div className='flex justify-center items-center gap-2 mt-4'>
      <button
        onClick={() => handlePageChange(current - 1)}
        disabled={current === 1}
        className='px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400'>
        Previous
      </button>

      {page().map((val) => (
        <button
          key={val}
          onClick={() => handlePageChange(val)}
          className={`px-4 py-2 rounded-lg ${
            current === val
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}>
          {val}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(current + 1)}
        disabled={current === total}
        className='px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400'>
        Next
      </button>
    </div>
  );
}

export default Movie_App_Pagination;
