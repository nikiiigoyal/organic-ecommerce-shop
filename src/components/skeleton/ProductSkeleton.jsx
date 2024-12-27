const ProductCardSkeleton = () => {
  return (
    <>
      <div className="features w-full max-w-[1320px] mx-auto flex justify-around p-[10px]">
        <div className="feature flex">
          <div></div>
          <div>
            <h3 className="font-semibold text-[#1A1A1A]"></h3>
            <p className="text-gray-600 text-[14px]"></p>
          </div>
        </div>
        <div className="feature flex">
          <div></div>
          <div>
            <h3 className="font-semibold text-[#1A1A1A]"></h3>
            <p className="text-gray-600 text-[14px]"></p>
          </div>
        </div>
        <div className="feature flex">
          <div></div>
          <div>
            <h3 className="font-semibold text-[#1A1A1A]"></h3>
            <p className="text-gray-600 text-[14px]"> </p>
          </div>
        </div>
        <div className="feature flex">
          <div></div>
          <div>
            <h3 className="font-semibold text-[#1A1A1A]"></h3>
            <p className="text-gray-600 text-[14px]"></p>
          </div>
        </div>
      </div>

      <div className="w-full bg-white rounded-lg shadow-md p-4 animate-pulse">
        {/* product image skeelton */}
        <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
        {/* category */}
        <div className="h-3 w-16 bg-gray-200 rounded mb-2"></div>
        {/* product name  */}
        <div className="h-4 w-3/4 bg-gray-200 rounded mb-3"></div>
        {/* rating */}
        <div className="flex gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-4 h-4 bg-gray-200 rounded"></div>
          ))}
        </div>
        {/* price  */}
        <div className="flex items-center gap-2">
          <div className="h-5 w-20 bg-gray-200 rounded"></div>
          <div className="h-4 w-16 bg-gray-200 rounded"></div>
        </div>
      </div>
    </>
  );
};

const ProductGridSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {[...Array(8)].map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
};
export default ProductGridSkeleton;
