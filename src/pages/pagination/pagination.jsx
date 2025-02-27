import React from 'react';

function Pagination({ corent, totel, onPageChange }) {
  function ganrat_pages() {
    const pages = [];
    for (let i = 1; i <= totel; i++) {
      pages.push(i);
    }
    return pages;
  }

  return (
    <div>
      <div className='text-4xl text-center my-5'>pagination</div>

      <div className='flex justify-center'>
        <button
          onClick={() => onPageChange(corent - 1)}
          className='border-2 border-gray-200 rounded-2xl px-4 mr-2.5 bg-emerald-800 text-white '
          disabled={corent === 1}>
          Previ
        </button>

        {ganrat_pages().map((page, i) => {
          return (
            <button
              key={i}
              onClick={() => onPageChange(page)}
              className={`border-0 border-gray-500 rounded-2xl px-4 mx-[0.1rem] ${
                corent === page ? 'bg-red-600' : 'bg-emerald-600'
              } text-white`}>
              {page}
            </button>
          );
        })}

        <button
          onClick={() => onPageChange(corent + 1)}
          className='border-2 border-b-gray-500 rounded-2xl px-4  ml-2.5 bg-emerald-800 text-white'
          disabled={corent === totel}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
