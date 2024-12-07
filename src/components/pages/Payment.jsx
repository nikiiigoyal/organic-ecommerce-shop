const Payment = () => {
  return (
    <>
      <div className="w-[300px] flex flex-col items-right ml-auto">
        <h1 className="text-[#1A1A1A] p-1 my-2 font-semibold text-[20px]">
          Payment Method
        </h1>
        <label className="flex">
          <input type="checkbox"></input>
          <h2 className="text-[#4D4D4D] ml-2">Cash on Delivery</h2>
        </label>
        <label className="flex">
          <input type="checkbox"></input>
          <h2 className="text-[#4D4D4D] ml-2">Paypal</h2>
        </label>
        <label className="flex">
          <input type="checkbox"></input>
          <h2 className="text-[#4D4D4D] ml-2 mb-2">Amazon Pay</h2>
        </label>
        <button className="bg-[#00B207] rounded-full text-white w-full p-2">
          Place Order
        </button>
      </div>
    </>
  );
};
export default Payment;
