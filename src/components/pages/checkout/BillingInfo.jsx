export const BillingInfo = () => {
    return (
      <div className="my-6 ml-4 border border-gray-100 flex flex-col justify-between font-poppins w-[70%]">
        <h1 className="text-[#1A1A1A] text-[24px] mb-4 font-semibold">
          Billing Information
        </h1>
        <div className="flex justify-between">
          <div className="">
            <label className="">
              <h3 className="text-[#1A1A1A] text-[16px] mb-2">First name</h3>
              <input
                className="px-4 py-3 text-[14px] text-[#999999] border border-[#E5E5E5] rounded-lg"
                placeholder="Your first name"
              ></input>
            </label>
          </div>
          <div className="w-[40%]">
            <label className="">
              <h3 className="text-[#1A1A1A] text-[16px] mb-2">Last name</h3>
              <input
                className="px-4 py-3 text-[14px] text-[#999999] border border-[#E5E5E5] rounded-sm"
                placeholder="Your last name"
              ></input>
            </label>
          </div>
          <div className="w-[40%]">
            <label className="">
              <h3 className="text-[#1A1A1A] text-[16px] mb-2">
                Company name<span className="text-[#999999]">(optional)</span>
              </h3>
              <input
                className="px-4 py-3 text-[14px] text-[#999999] border border-[#E5E5E5] rounded-sm"
                placeholder="Company name"
              ></input>
            </label>
          </div>
        </div>
        <div>
          <label className="">
            <h3 className="text-[#1A1A1A] text-[16px] mb-2">Street Address</h3>
            <input
              className="w-full px-4 py-3 text-[14px] text-[#999999] border border-[#E5E5E5] rounded-sm"
              placeholder="Email"
            ></input>
          </label>
        </div>
        <div className="flex justify-between">
          <div className="w-[40%]">
            <label className="">
              <h3 className="text-[#1A1A1A] text-[16px] mb-2">Country / Region</h3>
              <select className="px-4 py-3 text-[14px] text-[#999999] border border-[#E5E5E5] rounded-sm">
                <option>Select</option>
                <option>India</option>
                <option>China</option>
                <option>Japan</option>
              </select>
            </label>
          </div>
          <div className="w-[40%]">
            <label className="">
              <h3 className="text-[#1A1A1A] text-[16px] mb-2">States</h3>
              <select className="px-6 py-4 text-[14px] text-[#999999] border border-[#E5E5E5] rounded-sm text-center">
                <option>Select</option>
                <option>M.p</option>
                <option>U.p</option>
                <option>Bihar</option>
              </select>
            </label>
          </div>
          <div className="w-[40%]">
            <label className="">
              <h3 className="text-[#1A1A1A] text-[16px] mb-2">Zip code</h3>
              <input
                className="px-4 py-3 text-[14px] text-[#999999] border border-[#E5E5E5] rounded-sm"
                placeholder="Zip code"
              ></input>
            </label>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="">
            <label className="">
              <h3 className="text-[#1A1A1A] text-[16px] mb-2">Email</h3>
              <input
                className="px-5 py-3  text-[14px] text-[#999999] border border-[#E5E5E5] rounded-sm"
                placeholder="Email Address"
              ></input>
            </label>
          </div>
          <div className="">
            <label className="">
              <h3 className="text-[#1A1A1A] text-[16px] mb-2">Phone</h3>
              <input
                className="px-5 py-3 text-[14px] text-[#999999] border border-[#E5E5E5] rounded-sm"
                placeholder="Phone number"
              ></input>
            </label>
          </div>
        </div>
      </div>
    );
  };