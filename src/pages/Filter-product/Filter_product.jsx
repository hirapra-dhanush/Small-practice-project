import React, { useEffect, useState } from 'react';

function FilterProduct() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All'); 

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();
        setProducts(result);
        setFilteredProducts(result);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  function filterByCategory(category) {
    setSelectedCategory(category); 
    if (category === 'All') {
      setFilteredProducts(products); 
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
    }
  }

  if (loading) {
    return (
      <h1 className='animate-pulse text-4xl text-center mt-72 text-blue-600'>
        Loading...
      </h1>
    );
  }

  const categories = [
    'All',
    ...new Set(products.map((product) => product.category)),
  ]; 

  return (
    <div className='bg-gray-100 min-h-screen p-10'>
      <div className='flex flex-wrap gap-4 justify-center mb-10'>
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-6 py-2 text-lg font-semibold border rounded-lg shadow-md transition duration-300
              ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white border-blue-600' 
                  : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-200'
              }`}
            onClick={() => filterByCategory(category)}>
            {category}
          </button>
        ))}
      </div>

      <h1 className='text-3xl font-bold text-center mb-6 text-gray-800'>
        Product List
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className='bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 
              hover:scale-105 hover:shadow-xl border border-gray-200'>
              <img
                className='w-full h-56 object-contain p-4 bg-gray-200'
                src={product.image}
                alt={product.title}
              />
              <div className='p-4'>
                <h2 className='text-lg font-semibold text-gray-800 truncate'>
                  {product.title}
                </h2>
                <p className='text-gray-600 text-sm mt-2 line-clamp-3'>
                  {product.description}
                </p>
                <div className='mt-4 flex justify-between items-center'>
                  <span className='text-lg font-bold text-green-600'>
                    ${product.price}
                  </span>
                  <span className='text-sm text-gray-500'>
                    ⭐ {product.rating.rate} ({product.rating.count} reviews)
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h2 className='text-center text-xl font-semibold text-gray-500 col-span-full'>
            No products found in this category.
          </h2>
        )}
      </div>
    </div>
  );
}

export default FilterProduct;
