/* eslint-disable react/prop-types */
import { supabase } from '@/supabase';
import { useEffect, useState } from 'react';

const ProductCard = ({ product, onQuickView, addToWishlist }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from('grocery_products')
          .select('*');

        if (error) throw error;
        setData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAddToWishlist = () => {
    addToWishlist(product);
    console.log('clickeddd');
  };

  return (
    <div
      key={product.id}
      className="border p-2 sm:p-3 md:p-4 rounded shadow-md relative flex flex-col justify-between hover:border-green-500 transition duration-300 w-full"
    >
      <div className="relative group">
        <img
          src={product.image_urls}
          alt={product.name}
          className="w-full h-auto object-cover mb-2 md:mb-4 transition-transform duration-300 group-hover:scale-105"
        />

        {/* Heart and eye icons - visible on mobile, hover on larger screens */}
        <div className="absolute top-2 right-2 md:opacity-0 md:group-hover:opacity-100 flex flex-col gap-2 sm:gap-3">
          <button
            onClick={handleAddToWishlist}
            className="bg-white bg-opacity-70 rounded-full p-1 hover:bg-opacity-100 transition duration-200"
          >
            <img
              src="/images/Heart.png"
              alt="favorite"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            />
          </button>

          <button
            onClick={() => onQuickView(product)}
            className="bg-white bg-opacity-70 rounded-full p-1 hover:bg-opacity-100 transition duration-200"
          >
            <img
              src="/images/eye.png"
              alt="view"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            />
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mt-1 sm:mt-2">
        <div className="flex-1">
          <h2 className="text-xs sm:text-sm md:text-[14px] text-gray-700 font-semibold truncate">
            {product.name}
          </h2>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <p className="text-[#1A1A1A] text-xs sm:text-sm">
              ${product.new_price}
            </p>
            {product.old_price && (
              <p className="line-through text-gray-400 text-xs sm:text-sm">
                ${product.old_price.toFixed(2)}
              </p>
            )}
          </div>
          {product.sale && (
            <span className="text-white text-center absolute top-1 left-1 sm:top-2 sm:left-2 bg-[#EA4B48] p-0.5 sm:p-1 text-xs sm:text-sm">
              {product.sale}% OFF
            </span>
          )}
          <div className="flex items-center mt-1 sm:mt-2">
            <span className="text-yellow-500 text-xs sm:text-sm">
              {'★'.repeat(product.rating)}
            </span>
          </div>
        </div>

        <div className="ml-2 bg-gray-100 hover:bg-green-500 p-1 rounded-full transition-all duration-300">
          <img
            src="/images/addToCart.png"
            alt="add to cart"
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
