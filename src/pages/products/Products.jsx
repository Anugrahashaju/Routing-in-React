import React from 'react';
import Product from './Product';
import axios from 'axios';

const URL = 'https://fakestoreapi.com/products';

function ProductList() {
  const [products, setProducts] = React.useState([]);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        if (response.status === 200) {
          setProducts(response.data);
        }
      })
      .catch(() => setError(true));
  }, []);

  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex flex-col'> 
    <div className="max-w-6xl mx-auto px-4 py-10 ">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">Featured Products</h2>
      {error && <p className="text-red-500 text-center mb-6">Failed to fetch products...</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((item) => <Product product={item} key={item.id} />)
        ) : (
          <p className="text-center col-span-full">Loading...</p>
        )}
      </div>
    </div>
    </div>
  );
}

export default ProductList;
