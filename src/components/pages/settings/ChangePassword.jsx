export const ChangePassword = () => {
  return (
    <div className="border border-[#E6E6E6] rounded-md w-full md:w-[90%] lg:w-[70%] mx-auto">
      {/* Header */}
      <div className="border-b border-[#E5E5E5] p-4 md:p-5">
        <h1 className="text-lg md:text-xl font-semibold text-[#1A1A1A]">
          Change Password
        </h1>
      </div>

      {/* Form Content */}
      <div className="p-4 md:p-6 space-y-4">
        {/* Current Password */}
        <label className="block">
          <span className="text-sm md:text-base text-[#1A1A1A] mb-2 block">
            Current Password
          </span>
          <input
            type="password"
            className="w-full p-3 md:p-4 text-sm md:text-base border border-[#E6E6E6] rounded-md focus:outline-none focus:ring-1 focus:ring-[#00B207]"
            placeholder="Current Password"
          />
        </label>

        {/* Password Fields - stacked on mobile, side-by-side on desktop */}
        <div className="flex flex-col md:flex-row gap-4">
          <label className="block flex-1">
            <span className="text-sm md:text-base text-[#1A1A1A] mb-2 block">
              New Password
            </span>
            <input
              type="password"
              className="w-full p-3 md:p-4 text-sm md:text-base border border-[#E6E6E6] rounded-md focus:outline-none focus:ring-1 focus:ring-[#00B207]"
              placeholder="New Password"
            />
          </label>

          <label className="block flex-1">
            <span className="text-sm md:text-base text-[#1A1A1A] mb-2 block">
              Confirm Password
            </span>
            <input
              type="password"
              className="w-full p-3 md:p-4 text-sm md:text-base border border-[#E6E6E6] rounded-md focus:outline-none focus:ring-1 focus:ring-[#00B207]"
              placeholder="Confirm Password"
            />
          </label>
        </div>

        {/* Submit Button */}
        <button className="w-full md:w-auto bg-[#00B207] hover:bg-[#008A05] text-white py-3 px-6 rounded-full text-sm md:text-base transition-colors duration-200 mt-4">
          Change Password
        </button>
      </div>
    </div>
  );
};
