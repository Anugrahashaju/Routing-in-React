import React, { useState, useEffect } from 'react';
import Product from './Product';
import axios from 'axios';

const URL = 'https://fakestoreapi.com/products';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState('all');

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        if (response.status === 200) {
          setProducts(response.data);
          setFilteredProducts(response.data); // Initially, all products are displayed
        }
      })
      .catch(() => setError(true));
  }, []);

  const handlePriceFilter = (e) => {
    setPriceRange(e.target.value);

    if (e.target.value === 'all') {
      setFilteredProducts(products);
    } else if (e.target.value === 'low') {
      setFilteredProducts(products.filter(product => product.price < 20));
    } else if (e.target.value === 'mid') {
      setFilteredProducts(products.filter(product => product.price >= 20 && product.price <= 50));
    } else if (e.target.value === 'high') {
      setFilteredProducts(products.filter(product => product.price > 50));
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex flex-col'>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">Featured Products</h2>
        
        {error && <p className="text-red-500 text-center mb-6">Failed to fetch products...</p>}
        
        {/* Price Filter */}
        <div className="flex justify-center mb-6">
          <select
            value={priceRange}
            onChange={handlePriceFilter}
            className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option value="all">All Prices</option>
            <option value="low">Under $20</option>
            <option value="mid">$20 - $50</option>
            <option value="high">Above $50</option>
          </select>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => <Product product={item} key={item.id} />)
          ) : (
            <p className="text-center col-span-full">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
