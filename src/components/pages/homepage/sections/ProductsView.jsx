/* eslint-disable react/prop-types */
import ProductCard from './ProductCard';

const ProductsView = ({ products, heading, onQuickView, addToWishlist }) => {
  return (
    <>
      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-10 w-full max-w-[1320px]">
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold">{heading}</h2>
          {/* <a
            href="/categories"
            className="text-green-500 hover:text-green-600 flex items-center text-sm sm:text-base"
          >
            View All
            <img src="/images/arrow.svg" className="pl-1 w-4 h-4 sm:w-5 sm:h-5" />
          </a> */}
        </div>

        {/* Responsive grid: 2 cols on mobile, 3 on tablet, 4 on small desktop, 5 on large screens */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
              addToWishlist={addToWishlist}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsView;
