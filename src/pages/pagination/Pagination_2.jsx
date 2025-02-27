import React, { useEffect, useState } from 'react';
import Pagination from './pagination';

function Pagination_2() {
  const [set, setset] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 10;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = set.slice(indexOfFirstPost, indexOfLastPost);

  async function name() {
    try {
      const result = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await result.json();
      setset(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setset([]);
    }
  }

  useEffect(() => {
    name();
  }, []);

  function corentpag(page) {  
    setCurrentPage(page);
  }

  if (set.length === 0) {
    return <h1 className='animate-pulse'>Loading....</h1>;
  }

  return (
    <>
      <div>
        <Pagination
          corent={currentPage}
          totel={Math.ceil(set.length / postsPerPage)}
          onPageChange={corentpag}
        />
      </div>
      <div className='grid grid-cols-2 gap-4 mt-11'>
        {currentPosts.map((post) => (
          <div key={post.id}>
            <div className='border border-gray-300 rounded-lg p-6 mb-4 shadow-lg bg-white'>
              <h2 className='text-2xl font-bold text-gray-800 mb-2'>
                {post.title}
              </h2>
              <p className='text-gray-600 mb-4'>{post.body}</p>
              <small className='text-gray-400'>User ID: {post.userId}</small>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Pagination_2;
