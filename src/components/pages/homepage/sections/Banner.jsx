const BannerAndFeatures = () => {
  return (
    <div className="w-full ">
      <img
        src="/images/Bannar (2).png"
        className="max-w-[1320px] h-[600px] pt-4 pb-6 mx-auto"
        alt="Banner"
      />
      <div className="features w-full max-w-[1320px] mx-auto flex justify-around p-[10px]">
        <div className="feature flex">
          <div>
            <img
              src="/images/delivery-truck 1.png"
              className="pr-[10px]"
              alt="Delivery truck"
            />
          </div>
          <div>
            <h3 className="font-semibold text-[#1A1A1A]">Free Shipping</h3>
            <p className="text-gray-600 text-[14px]">
              Free shipping on all your order
            </p>
          </div>
        </div>
        <div className="feature flex">
          <div>
            <img
              src="/images/headphones.png"
              className="pr-[10px]"
              alt="Headphones"
            />
          </div>
          <div>
            <h3 className="font-semibold text-[#1A1A1A]">
              Customer support 24/7
            </h3>
            <p className="text-gray-600 text-[14px]">
              Instant access to support
            </p>
          </div>
        </div>
        <div className="feature flex">
          <div>
            <img
              src="/images/shoppingBag.png"
              className="pr-[10px]"
              alt="Shopping bag"
            />
          </div>
          <div>
            <h3 className="font-semibold text-[#1A1A1A]">
              100% Secure payment
            </h3>
            <p className="text-gray-600 text-[14px]">
              {' '}
              We ensure your money is safe
            </p>
          </div>
        </div>
        <div className="feature flex">
          <div>
            <img
              src="/images/moneyback.png"
              className="pr-[10px]"
              alt="Money back guarantee"
            />
          </div>
          <div>
            <h3 className="font-semibold text-[#1A1A1A]">
              Money-back guarantee
            </h3>
            <p className="text-gray-600 text-[14px]">
              30 days Money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerAndFeatures;
