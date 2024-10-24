import CountdownTimer from "../../shared/Countdown";

const SaleImages = () => {


  return (
    <div className="container flex justify-around w-[80%] mx-auto font-poppins space-x-6">
      
      {/* First Banner */}
      <div className="bg-[url('/src/components/images/bannerbg1.png')] bg-cover bg-center p-6 text-white flex flex-col h-[450px] w-[400px]">
        <h3 className="text-sm text-center text-white pb-2">Best Deals</h3>
        <h1 className="text-2xl text-center pb-2">Sale of the Month</h1>
        
        {/* Countdown Timer */}
        <div className="flex justify-center items-center space-x-2 font-poppins text-xl mx-auto">
        <CountdownTimer />
        </div>
        
        {/* Button */}
        <button className="bg-white text-[#00B207]  py-2 px-4 mt-4 w-[162px] h-[45px] mx-auto rounded-full hover:bg-green-600 transition">
          Shop Now <img src="/src/components/images/arrow.svg" alt="arrow" className="inline items-center"/>
        </button>
      </div>

      {/* Second Banner */}
      <div className="bg-[url('/src/components/images/bannerbg2.png')] bg-cover bg-center p-6 text-white flex flex-col h-[450px] w-[400px]">
        <h3 className="text-sm text-center text-white pb-2">85% Fat Free</h3>
        <h1 className="text-2xl text-center text-white pb-2">Low-Fat Meat</h1>
        <p className="text-center text-white text-xl font-bold pb-2">Started at <span className="text-[#FF8A00] text-xl">$79.99</span></p>
        
        {/* Button */}
        <button className="bg-white text-[#00B207]  py-2 px-4 mt-4 w-[162px] h-[45px] mx-auto rounded-full hover:bg-green-600 transition">
          Shop Now <img src="/src/components/images/arrow.svg" alt="arrow" className="inline items-center"/>
        </button>
      </div>

      {/* Third Banner */}
      <div className="bg-[url('/src/components/images/bannerbg3.png')] bg-cover bg-center p-6  flex flex-col h-[450px] w-[400px] ">
        <h3 className="text-sm text-center text-black pb-2">Summer Sale</h3>
        <h1 className="text-2xl text-center text-bold pb-2">100% Fresh Fruit</h1>
        <p className="text-center text-xl font-bold pb-2">Up to <span className="w-[100px] bg-black text-[#FCC900] p-2 text-[18px] text-center ">64% OFF</span></p>
        
         {/* Button */}
         <button className="bg-white text-[#00B207]  py-2 px-4 mt-4 w-[162px] h-[45px] mx-auto rounded-full hover:bg-green-600 transition">
          Shop Now <img src="/src/components/images/arrow.svg" alt="arrow" className="inline items-center"/>
        </button>
      </div>
      
    </div>
  );
};

export default SaleImages;
