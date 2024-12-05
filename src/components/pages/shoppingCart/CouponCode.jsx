const CouponCode = () => {
  return (
    <>
      <div className="flex items-center border border-[#E6E6E6] mx-3 p-2 rounded-lg ">
        <h3 className="text-[#1A1A1A] text-[20px] mr-2">Coupon Code</h3>
        <label className="flex border border-[#E6E6E6] rounded-full p-2">
          <input
            placeholder="Enter code"
            className="text-sm text-[#999999] p-2 rounded-full border border-[#FFFFFF]  "
          ></input>
          <button className="bg-[#333333] text-white text-[20px] px-9 py-3 rounded-full ">
            Apply Coupon
          </button>
        </label>
      </div>
    </>
  );
};
export default CouponCode;
