/* eslint-disable react/prop-types */

import ProductCard from './ProductCard';

const ProductsView = ({ products, heading, onQuickView }) => {
  return (
    <>
      <div className="container mx-auto p-4 w-[80%]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{heading}</h2>
          <a href="/categories" className="text-green-500 hover:text-green-600 flex items-center">
            View All
            <img src="/src/components/images/arrow.svg" className="pl-1" />
          </a>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onQuickView={onQuickView} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsView;