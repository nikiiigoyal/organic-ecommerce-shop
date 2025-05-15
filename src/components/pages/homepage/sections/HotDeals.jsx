import { products } from '../../../../constants';

const HotDeals = () => {
  const featuredProduct = products.find((product) => product.featured);
  const otherProducts = products.filter((product) => !product.featured);

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8 w-full max-w-[1320px]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold">Hot Deals</h2>
        <a
          href="/categories"
          className="text-green-500 hover:text-green-600 flex items-center text-sm sm:text-base mt-2 sm:mt-0"
        >
          View All
          <img
            src="/images/arrow.svg"
            className="pl-1 w-4 h-4 sm:w-auto sm:h-auto"
            alt="arrow"
          ></img>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4">
        {/* Featured Product Card */}
        {featuredProduct && (
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-2 row-span-1 sm:row-span-2 border border-green-200 rounded-lg p-3 sm:p-4">
            <div className="relative">
              <img
                src={featuredProduct.image}
                alt={featuredProduct.name}
                className="w-full h-48 sm:h-64 object-cover rounded-lg"
              />
              <div className="absolute top-2 left-2 flex gap-1 sm:gap-2">
                <span className="bg-red-500 text-white px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm">
                  Sale 50%
                </span>
                <span className="bg-blue-500 text-white px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm">
                  Best Sold
                </span>
              </div>
            </div>

            {/* button */}
            <div className="mt-3 sm:mt-4 flex justify-around items-center">
              <button className="bg-white p-1 sm:p-2 rounded-full hover:bg-gray-100">
                <img
                  src="/images/Heart.png"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  alt="wishlist"
                ></img>
              </button>
              <button className="bg-[#00B207] text-white text-xs sm:text-sm py-1.5 sm:py-2 w-[60%] rounded-full flex items-center justify-center">
                Add to Cart
                <img
                  src="/images/addToCart.png"
                  className="ml-2 sm:ml-6 w-4 h-4 sm:w-5 sm:h-5"
                  alt="cart"
                ></img>
              </button>
              <button className="bg-white p-1 sm:p-2 rounded-full hover:bg-gray-100">
                <img
                  src="/images/eye.png"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  alt="view"
                ></img>
              </button>
            </div>

            {/*name  */}
            <div className="mt-3 sm:mt-4 flex flex-col items-center">
              <h3 className="text-sm sm:text-[18px] text-[#2C742F] font-semibold text-center">
                {featuredProduct.name}
              </h3>
              <div className="flex flex-col items-center mt-1 sm:mt-2">
                <div>
                  <span className="text-base sm:text-lg font-bold text-[#1A1A1A]">
                    ${featuredProduct.price}
                  </span>
                  <span className="text-xs sm:text-base text-gray-500 line-through ml-1 sm:ml-2">
                    ${featuredProduct.oldPrice}
                  </span>
                </div>
                <div className="flex items-center mt-1 sm:mt-2">
                  <span className="text-yellow-500 text-sm sm:text-base">
                    {'★'.repeat(featuredProduct.rating)}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500 ml-1">
                    (524 feedback)
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-3 sm:mt-4">
              <p className="text-xs sm:text-sm text-gray-500 text-center">
                Hurry up! Offer ends in
              </p>
              <div className="flex justify-around items-center mt-1 sm:mt-2">
                {['01', '23', '34', '57'].map((time, index) => (
                  <div key={index} className="text-center">
                    <span className="block text-xs sm:text-sm font-bold">
                      {time}
                    </span>
                    <span className="text-[10px] sm:text-xs text-gray-500">
                      {['DAYS', 'HOURS', 'MINS', 'SECS'][index]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Other Product Cards */}
        {otherProducts.map((product) => (
          <div
            key={product.id}
            className="border p-3 sm:p-4 rounded shadow-md relative flex flex-col hover:border-green-500 transition duration-300 h-fit"
          >
            <div className="relative group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto mb-2 sm:mb-4 transition-transform duration-300 group-hover:scale-105"
              />

              {/* heart and eye icons - visible on mobile, hover effect on larger screens */}
              <div className="absolute top-2 right-2 flex flex-col gap-2 sm:opacity-0 sm:group-hover:opacity-100">
                <button className="bg-white bg-opacity-70 rounded-full p-1 hover:bg-opacity-100 transition duration-200">
                  <img
                    src="/images/Heart.png"
                    alt="favorite"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </button>
                <button className="bg-white bg-opacity-70 rounded-full p-1 hover:bg-opacity-100 transition duration-200">
                  <img
                    src="/images/eye.png"
                    alt="view"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xs sm:text-[14px] text-gray-700 font-semibold mt-1 sm:mt-2 truncate">
                  {product.name}
                </h2>
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <p className="text-xs sm:text-sm text-[#1A1A1A]">
                    ${product.price.toFixed(2)}
                  </p>
                  {product.oldPrice && (
                    <p className="text-xs sm:text-sm line-through text-gray-400">
                      ${product.oldPrice.toFixed(2)}
                    </p>
                  )}
                </div>
                {product.sale && (
                  <span className="text-white text-center absolute top-1 left-1 sm:top-2 sm:left-2 bg-[#EA4B48] p-0.5 sm:p-1 text-xs">
                    {product.sale}% OFF
                  </span>
                )}
                <div className="flex items-center mt-1 sm:mt-2">
                  <span className="text-yellow-500 text-xs sm:text-sm">
                    {'★'.repeat(product.rating)}
                  </span>
                </div>
              </div>
              <div className="bg-gray-100 hover:bg-green-500 p-1 rounded-full transition-all duration-300">
                <img
                  src="/images/addToCart.png"
                  alt="add to cart"
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 group-hover:opacity-90"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotDeals;
