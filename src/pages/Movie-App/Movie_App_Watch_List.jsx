import React, { useEffect, useState } from 'react';

function Movie_App_Watch_List() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const storedWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    setWatchlist(storedWatchlist);
  }, []);

  const removeFromWatchlist = (movieId) => {
    const updatedWatchlist = watchlist.filter((movie) => movie.id !== movieId);
    setWatchlist(updatedWatchlist);
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
  };

  return (
    <div className='container mx-auto p-6'>
      <h1 className='text-3xl font-bold text-center mb-6'>🎥 My Watchlist</h1>

      {watchlist.length === 0 ? (
        <p className='text-center text-gray-600'>
          No movies in your watchlist.
        </p>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {watchlist.map((movie, index) => (
            <div
              key={index}
              className='bg-white shadow-lg rounded-2xl overflow-hidden p-4'>
              <img
                src={movie.primaryImage || 'https://via.placeholder.com/300'}
                alt={movie.primaryTitle}
                className='w-full h-64 object-cover rounded-lg'
              />
              <div className='mt-4'>
                <h2 className='text-xl font-bold text-gray-800'>
                  {movie.primaryTitle}
                </h2>
                <p className='text-gray-600 text-sm'>
                  {movie.description || 'No description available.'}
                </p>

                <div className='mt-3 flex flex-wrap items-center gap-2 text-sm'>
                  <span className='bg-blue-100 text-blue-600 px-2 py-1 rounded-lg'>
                    ⭐ {movie.averageRating || 'N/A'} / 10
                  </span>
                  <span className='bg-gray-100 text-gray-700 px-2 py-1 rounded-lg'>
                    ⏳ {movie.runtimeMinutes || 'N/A'} min
                  </span>
                  <span className='bg-green-100 text-green-700 px-2 py-1 rounded-lg'>
                    📅 {movie.releaseDate || 'Unknown'}
                  </span>
                </div>

                <div className='mt-4 flex gap-3'>
                  <a
                    href={movie.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold'>
                    IMDb Page
                  </a>
                  <button
                    onClick={() => removeFromWatchlist(movie.id)}
                    className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold'>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Movie_App_Watch_List;
