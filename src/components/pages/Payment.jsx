const Payment = () => {
    return (
        <>
        <div>
     <h1 className="text-[#1A1A1A] font-semibold text-[20px]">
        Payment Method
     </h1>
     <label>
        <input type="checkbox"></input>
        <h2 className="text-[#4D4D4D]">Cash on Delivery</h2>
     </label>
     <label>
        <input type="checkbox"></input>
        <h2 className="text-[#4D4D4D]">Paypal</h2>
     </label>
     <label>
        <input type="checkbox"></input>
        <h2 className="text-[#4D4D4D]">Amazon Pay</h2>
     </label>
     <button className="bg-[#00B207] text-white w-full p-4">Place Order</button>
        </div>
        </>
    )
}
export default Payment 