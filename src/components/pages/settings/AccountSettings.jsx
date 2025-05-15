export const AccountSettings = () => {
  return (
    <div className="border border-gray-100 font-poppins rounded-lg w-full md:w-[90%] lg:w-[70%] mx-auto">
      {/* Header */}
      <div className="border-b border-[#E5E5E5] p-4 md:p-5">
        <h1 className="text-lg md:text-[20px] text-[#1A1A1A] font-semibold">
          Account Settings
        </h1>
      </div>

      {/* Content Area */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 p-4 md:p-6">
        {/* Form Fields - full width on mobile, 2/3 on desktop */}
        <div className="w-full lg:w-2/3 space-y-4">
          <label className="block">
            <span className="text-sm md:text-base text-[#1A1A1A] mb-1 block">
              First name
            </span>
            <input
              placeholder="Dianne"
              className="w-full p-3 md:p-4 text-sm md:text-base text-[#666666] border border-[#E6E6E6] rounded-md focus:outline-none focus:ring-1 focus:ring-[#00B207]"
            />
          </label>

          <label className="block">
            <span className="text-sm md:text-base text-[#1A1A1A] mb-1 block">
              Last name
            </span>
            <input
              placeholder="Russell"
              className="w-full p-3 md:p-4 text-sm md:text-base text-[#666666] border border-[#E6E6E6] rounded-md focus:outline-none focus:ring-1 focus:ring-[#00B207]"
            />
          </label>

          <label className="block">
            <span className="text-sm md:text-base text-[#1A1A1A] mb-1 block">
              Email
            </span>
            <input
              placeholder="dianne.russell@gmail.com"
              className="w-full p-3 md:p-4 text-sm md:text-base text-[#666666] border border-[#E6E6E6] rounded-md focus:outline-none focus:ring-1 focus:ring-[#00B207]"
            />
          </label>

          <label className="block">
            <span className="text-sm md:text-base text-[#1A1A1A] mb-1 block">
              Phone number
            </span>
            <input
              placeholder="(603) 555 0123"
              className="w-full p-3 md:p-4 text-sm md:text-base text-[#666666] border border-[#E6E6E6] rounded-md focus:outline-none focus:ring-1 focus:ring-[#00B207]"
            />
          </label>

          <button className="bg-[#00B207] hover:bg-[#008A05] text-white py-2 px-4 md:py-3 md:px-6 rounded-full text-sm md:text-base transition-colors duration-200">
            Save Changes
          </button>
        </div>

        {/* Avatar Section - centers on mobile, aligns right on desktop */}
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-end">
          <div className="max-w-[150px] md:max-w-[200px] mb-4">
            <img
              src="/images/avatar.png"
              alt="Profile avatar"
              className="w-full h-auto rounded-full"
            />
          </div>
          <button className="text-[#00B207] hover:bg-[#00B207] hover:text-white border border-[#00B207] rounded-full px-4 py-2 md:px-5 md:py-2 text-sm transition-colors duration-200">
            Choose Image
          </button>
        </div>
      </div>
    </div>
  );
};
