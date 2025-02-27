import React from 'react';

function Movie_App_Search({ searchQuery, setSearchQuery }) {
  return (
    <div className='mb-6'>
      <input
        type='text'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder='Search for a movie...'
        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
    </div>
  );
}

export default Movie_App_Search;
