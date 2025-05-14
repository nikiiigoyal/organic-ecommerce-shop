const BannerAndFeatures = () => {
  return (
    <div className="w-full px-4 py-6 sm:px-6">
      {/* Banner Image - Responsive */}
      <div className="relative w-full overflow-hidden rounded-lg">
        <img
          src="/images/Bannar (2).png"
          className="w-full h-auto object-cover max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px]"
          alt="Banner"
        />
      </div>

      {/* Features Section - Responsive Grid */}
      <div className="features w-full max-w-[1320px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6">
        {/* Feature 1 - Free Shipping */}
        <div className="feature flex items-center bg-white p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="shrink-0">
            <img
              src="/images/delivery-truck 1.png"
              className="w-10 h-10 sm:w-12 sm:h-12 pr-3"
              alt="Delivery truck"
            />
          </div>
          <div>
            <h3 className="font-semibold text-[#1A1A1A] text-sm sm:text-base">
              Free Shipping
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Free shipping on all your order
            </p>
          </div>
        </div>

        {/* Feature 2 - Customer Support */}
        <div className="feature flex items-center bg-white p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="shrink-0">
            <img
              src="/images/headphones.png"
              className="w-10 h-10 sm:w-12 sm:h-12 pr-3"
              alt="Headphones"
            />
          </div>
          <div>
            <h3 className="font-semibold text-[#1A1A1A] text-sm sm:text-base">
              Customer support 24/7
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Instant access to support
            </p>
          </div>
        </div>

        {/* Feature 3 - Secure Payment */}
        <div className="feature flex items-center bg-white p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="shrink-0">
            <img
              src="/images/shoppingBag.png"
              className="w-10 h-10 sm:w-12 sm:h-12 pr-3"
              alt="Shopping bag"
            />
          </div>
          <div>
            <h3 className="font-semibold text-[#1A1A1A] text-sm sm:text-base">
              100% Secure payment
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              We ensure your money is safe
            </p>
          </div>
        </div>

        {/* Feature 4 - Money-back Guarantee */}
        <div className="feature flex items-center bg-white p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="shrink-0">
            <img
              src="/images/moneyback.png"
              className="w-10 h-10 sm:w-12 sm:h-12 pr-3"
              alt="Money back guarantee"
            />
          </div>
          <div>
            <h3 className="font-semibold text-[#1A1A1A] text-sm sm:text-base">
              Money-back guarantee
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              30 days Money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerAndFeatures;
