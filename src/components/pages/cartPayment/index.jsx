import { BillingInfo } from "../checkout/BillingInfo"
import Payment from "../Payment"
import AdditionalInfo from "./AdditionalInfo"

export const CartPayment = () => {
    return (
        <>
        <div className="flex">
        <div className="flex flex-col justify-around">
            <BillingInfo />
            <AdditionalInfo />
           {/* <h1>Additional Info</h1> */}
           </div>
         <div className="mt-2 ml-auto p-2 mr-4 border border-b-[#eee] rounded-lg w-[300px] mx-w-[1200px]">
            <h1 className="text-[#1A1A1A] p-1 my-2 font-semibold text-[20px]">Order Summary</h1>
       
        <div className="subtotal flex flex-row justify-between my-3 border-b-2 pb-1">
          <span className="text-[#4D4D4D] text-sm">Subtotal:</span>
          <span>$84.00</span>
        </div>
        <div className="shipping flex flex-row justify-between my-3 border-b-2 pb-1">
          <span className="text-[#4D4D4D]text-sm">Shipping:</span>
          <span>Free</span>
        </div>
        <div className="total flex flex-row justify-between my-3 border-b-2 pb-1">
          <span className="text-[#4D4D4D]text-sm">Total:</span>
          <span>84.00</span>
        </div>
        {/* <div>
          <button className="bg-[#00B207] text-white px-4 py-2 rounded-full w-full">Proceed to checkout</button>
        </div> */}
       
 <Payment /> 
 
     
      
      </div>
      </div>
        </>
    )
}
