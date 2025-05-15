const DiscountBanner = () => {
  return (
    <div className="w-full max-w-[1310px] mx-auto pt-5 font-poppins text-center px-4 sm:px-6">
      <div className="bg-[url(https://s3-alpha-sig.figma.com/img/736a/c341/802327b2806c879e76b9b8612d16e984?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GWd8xb9eiYXlhHv1N~GLs82uE6fF1IL3INu3B7vBC-2TgOwZ8i2Q8PDUScnKAWA-YBw3QxZTnP-6Sx2n98deEI6crrzPg2cylFWvey5gR0j~4rZ-73QCy7w28Rv636U3GOw9GvaxyV2Qo7T2cph8xoWs2QxaRAnsL0HsmKs9y1yZXK~~Ku8L~uN5Gk2ftFR0BPqXDb8jbkY3xSWSh1NrWa45QdMzxubOjm9RMDmL3hLgd~g45TgoCC0TH4j4cmDaYgiPZiSJ-0RgrnxGZIqEP-DHZv5-ogLtDbJu8I5L7iOXKnnd7mkglol5289lBscfZUZcQzI4WRj10CXr2qmF2A__)] bg-cover bg-center p-4 text-white flex flex-col justify-center items-end h-[200px] sm:h-[280px] md:h-[358px] rounded-lg">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4">
          <h3 className="text-xs sm:text-sm text-white pb-1 sm:pb-2">
            SUMMER SALE
          </h3>
          <h1 className="text-4xl sm:text-5xl md:text-[56px] text-[#FF8A00] pb-1 sm:pb-2">
            37% <span className="text-white">OFF</span>
          </h1>
          <p className="text-white text-xs sm:text-sm pb-2 sm:pb-4 max-w-[180px] sm:max-w-[200px]">
            Free on all your order, Free Shipping and 30 days money-back
            guarantee
          </p>

          {/* Button */}
          <button className="bg-[#00B207] text-white py-1 sm:py-2 px-3 sm:px-4 w-[140px] sm:w-[162px] h-[40px] sm:h-[45px] rounded-full flex items-center justify-center space-x-2 hover:bg-[#00960a] transition-colors duration-300 text-sm sm:text-base">
            Shop Now{' '}
            <img src="/images/arrow.svg" alt="arrow" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
