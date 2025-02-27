import React, { useEffect, useState } from 'react';
import Movie_App_Pagination from './Movie_App_Pagination';
import Movie_App_Watch_List from './Movie_App_Watch_List';
import Movie_App_Search from './Movie_App_Search';

function Movie_App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [watchlist, setWatchlist] = useState([]);
  const [watchlistB, setwatchlistB] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const postsPerPage = 20;
  useEffect(() => {
    Movie_App_Api();
    const storedWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    setWatchlist(storedWatchlist);
  }, []);

  async function Movie_App_Api() {
    try {
      const response = await fetch(
        'https://imdb236.p.rapidapi.com/imdb/top250-movies',
        {
          method: 'GET',
          headers: {
            'x-rapidapi-key': 'b5fbc1698emshb24e44b27a13d44p1059a3jsn72a9c9fb8f1b',
            'x-rapidapi-host': 'imdb236.p.rapidapi.com',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const apiData = await response.json();
      setData(apiData || []);
    } catch (error) {
      setError('Failed to fetch movies. Please try again later.');
      setData([]);
    } finally {
      setLoading(false);
    }
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handelclick = () => {
    setwatchlistB(!watchlistB);
  };

  const toggleWatchlist = (movie) => {
    let updatedWatchlist;
    if (watchlist.some((item) => item.id === movie.id)) {
      updatedWatchlist = watchlist.filter((item) => item.id !== movie.id);
    } else {
      updatedWatchlist = [...watchlist, movie];
    }

    setWatchlist(updatedWatchlist);
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
  };

  const isInWatchlist = (movie) => {
    return watchlist.some((item) => item.id === movie.id);
  };

  const filteredMovies = data.filter((movie) =>
    movie.primaryTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredMovies.length / postsPerPage);
  const currentMovies = filteredMovies.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div className='container mx-auto p-6'>
      <h1 className='text-3xl font-bold text-center mb-6'>🎬 Top 250 Movies</h1>
      <Movie_App_Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {filteredMovies.length > 0 && (
        <div className='mt-6'>
          <Movie_App_Pagination current={currentPage} total={totalPages} handlePageChange={handlePageChange} />
        </div>
      )}
      <button
        type='button'
        onClick={handelclick}
        className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300'>
        {watchlistB ? ' back' : 'Watchlist'}
      </button>

      {watchlistB === true ? (
        <Movie_App_Watch_List />
      ) : loading ? (
        <p className='text-center text-gray-600'>Loading movies...</p>
      ) : error ? (
        <p className='text-center text-red-500'>{error}</p>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {currentMovies.map((movie, index) => (
            <div key={index} className='bg-white shadow-lg rounded-2xl overflow-hidden p-4'>
              <img src={movie.primaryImage || 'https://via.placeholder.com/300'} alt={movie.primaryTitle} className='w-full h-64 object-cover rounded-lg' />
              <div className='mt-4'>
                <h2 className='text-xl font-bold text-gray-800'>{movie.primaryTitle}</h2>
                <p className='text-gray-600 text-sm'>{movie.description || 'No description available.'}</p>
                <div className='mt-3 flex flex-wrap items-center gap-2 text-sm'>
                  <span className='bg-blue-100 text-blue-600 px-2 py-1 rounded-lg'>⭐ {movie.averageRating || 'N/A'} / 10</span>
                  <span className='bg-gray-100 text-gray-700 px-2 py-1 rounded-lg'>⏳ {movie.runtimeMinutes || 'N/A'} min</span>
                  <span className='bg-green-100 text-green-700 px-2 py-1 rounded-lg'>📅 {movie.releaseDate || 'Unknown'}</span>
                  {movie.contentRating && (
                    <span className='bg-red-100 text-red-700 px-2 py-1 rounded-lg'>{movie.contentRating}</span>
                  )}
                </div>
                <div className='mt-3'>
                  {Array.isArray(movie.genres) && movie.genres.length > 0 ? (
                    movie.genres.map((genre, index) => (
                      <span key={index} className='inline-block bg-gray-200 text-gray-800 px-2 py-1 rounded-lg text-xs mr-1'>{genre}</span>
                    ))
                  ) : (
                    <span className='text-gray-500 text-sm'>No Genres Available</span>
                  )}
                </div>
                <div className='mt-4 flex gap-3'>
                  <a href={movie.url} target='_blank' rel='noopener noreferrer' className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold'>IMDb Page</a>
                </div>
                <button onClick={() => toggleWatchlist(movie)} className={`mt-4 w-full px-4 py-2 rounded-lg text-sm font-semibold ${isInWatchlist(movie) ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-green-500 hover:bg-green-600 text-white'}`}>
                  {isInWatchlist(movie) ? 'Remove from Watchlist' : 'Add to Watchlist'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Movie_App;
