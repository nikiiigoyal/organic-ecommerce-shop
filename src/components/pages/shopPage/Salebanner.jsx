import CountdownTimer from "../shared/Countdown";

export function SaleBanner()  {
    return (
      <>
      <div className="container mx-auto my-8 w-[80%]">
      <div className="relative h-[286px] rounded-xl overflow-hidden">
        {/* Background container */}
        <div className="absolute inset-0 bg-[#1A1A1A]">
          {/* Green vegetables image */}
          <div className="absolute right-0 top-0 h-full w-[55%]">
            <img 
              src="https://s3-alpha-sig.figma.com/img/736a/c341/802327b2806c879e76b9b8612d16e984?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F4BH2BJUFq5eRvYNKv4UIZz44mt9Ohsa~9IaF72zCdVIiCuro29qvwfJTrUorFEpQ7jn0BuU-6GMhT7bW3haC55y3P86emtCuzGKHg4NdqXUhb8JmBIb6IglsFz2trWkecwKwsXjuDM7tj~iJWwhCbUPkfiwLmulo8hEKSA5LjzqL1ElknZY-swWFempqUydZN~uL6cGeROPyljoargkWy3XJw6dPXBi9KTxAOB5QfPSQl2BKCfaZFCNjPZ9St0dqwB6wK1ZnW6tpWPg9VWg2sMDJ4-Y3yXKMb4pUywTfTkuPq78z6d-SfHFL5iRyvBGMvS4HnmiANk1vGlmW-zPdw__"
              alt="Fresh vegetables"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative  h-full flex flex-col justify-center pl-12">
          <div className="text-sm font-semibold text-gray-50 mb-3">
            BEST DEALS
          </div>

          <h2 className="text-4xl font-semibold text-white mb-4">
            Sale of the Month
          </h2>
{/* div off */}
          <div className="rounded-full bg-[#FF8A00] w-[65px] h-[65px] text-center flex items-center p-3 absolute top-[38px] left-[400px]"><span className="text-white font-bold">56% off</span></div>

          {/* Timer */}
          <div className="text-[#00B207] flex space-x-2 font-poppins text-xl mb-5">
        <CountdownTimer />
        </div>

          {/* Shop Now Button */}
          <button className="flex items-center gap-2 bg-[#00B207] text-white px-8 py-3 rounded-full w-fit hover:bg-[#00960A] transition-colors">
            Shop Now
            <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 7.5L1 7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.95001 1.47501L16 7.49501L9.95001 13.515" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
     
    </div>
    </>
    )
}