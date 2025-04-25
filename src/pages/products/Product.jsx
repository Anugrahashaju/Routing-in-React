import React, { useState } from 'react';

function Product({ product }) {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionExpanded(prevState => !prevState);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="text-md font-semibold text-gray-800 truncate">{product.title}</h3>
      <p className="text-sm text-gray-500 mt-2">${product.price}</p>
      <p className="text-xs text-gray-600 mt-1">{product.category}</p>

      <p className={`text-sm text-gray-500 mt-3 ${isDescriptionExpanded ? '' : 'line-clamp-3'}`}>
        {product.description}
      </p>

      <button
        onClick={toggleDescription}
        className="text-sm text-purple-600 hover:underline mt-2"
      >
        {isDescriptionExpanded ? 'Show Less' : '... Show More'}
      </button>

      <div className="flex items-center mt-2">
        <span className="text-yellow-500">★</span>
        <span className="ml-1 text-sm text-gray-600">{product.rating.rate} ({product.rating.count} reviews)</span>
      </div>

      <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
        Add To Cart
      </button>
    </div>
  );
}

export default Product;
