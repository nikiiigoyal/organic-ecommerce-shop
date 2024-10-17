const SaleImages = () => {
  return (
    <div className="container flex justify-around w-[80%] mx-auto font-poppins space-x-6">
      
      {/* First Banner */}
      <div className="bg-[url('/src/components/images/bannerbg1.png')] bg-cover bg-center p-6 text-white flex flex-col h-[350px]">
        <h3 className="text-sm text-center">Best Deals</h3>
        <h1 className="text-2xl text-center">Sale of the Month</h1>
        
        {/* Countdown Timer */}
        <div className="flex justify-center items-center space-x-4 font-mono text-xl">
          <div className="flex flex-col items-center">
            <span className="font-bold">00</span>
            <span className="text-sm text-gray-500">Days</span>
          </div>
          <span className="font-bold">:</span>
          <div className="flex flex-col items-center">
            <span className="font-bold">02</span>
            <span className="text-sm text-gray-500">Hours</span>
          </div>
          <span className="font-bold">:</span>
          <div className="flex flex-col items-center">
            <span className="font-bold">18</span>
            <span className="text-sm text-gray-500">Mins</span>
          </div>
          <span className="font-bold">:</span>
          <div className="flex flex-col items-center">
            <span className="font-bold">46</span>
            <span className="text-sm text-gray-500">Secs</span>
          </div>
        </div>
        
        {/* Button */}
        <button className="bg-white text-[#00B207] font-bold py-2 px-4 mt-4 rounded-lg hover:bg-green-600 transition">
          Shop Now <img src="/src/components/images/arrow.svg" alt="arrow" className="inline"/>
        </button>
      </div>

      {/* Second Banner */}
      <div className="bg-[url('/src/components/images/bannerbg2.png')] bg-cover bg-center p-6 text-white flex flex-col h-[350px]">
        <h3 className="text-sm text-center">85% Fat Free</h3>
        <h1 className="text-2xl text-center">Low-Fat Meat</h1>
        <p className="text-center text-yellow-500 text-xl font-bold">Started at $79.99</p>
        
        {/* Button */}
        <button className="bg-white text-[#00B207] font-bold py-2 px-4 mt-4 rounded-lg hover:bg-green-600 transition">
          Shop Now <img src="/src/components/images/arrow.svg" alt="arrow" className="inline"/>
        </button>
      </div>

      {/* Third Banner */}
      <div className="bg-[url('/src/components/images/bannerbg3.png')] bg-cover bg-center p-6 text-white flex flex-col h-[350px] ">
        <h3 className="text-sm text-center">Summer Sale</h3>
        <h1 className="text-2xl text-center">100% Fresh Fruit</h1>
        <p className="text-center text-yellow-500 text-xl font-bold">Up to 64% OFF</p>
        
        {/* Button */}
        <button className="bg-white text-[#00B207] font-bold py-2 px-4 mt-4 rounded-lg hover:bg-green-600 transition">
          Shop Now <img src="/src/components/images/arrow.svg" alt="arrow" className="inline"/>
        </button>
      </div>
      
    </div>
  );
};

export default SaleImages;
