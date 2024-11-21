/* eslint-disable react/prop-types */
const BillingAddress = ({address}) => {
    return(
        <>
        <div className="flex flex-col border border-[#E6E6E6] mx-auto p-3">
            <h3 className="text-sm text-[#999999]">BILLING ADDRESS</h3>
            <h2 className="text-[#1A1A1A] font-semibold">{address.fullName}</h2>
            <p className="text-[#666666] text-sm">{address.streetAddress}</p>
      <p className="text-[#666666] text-sm">{address.city}, {address.state} {address.zipCode}</p>
      
      <p className="text-[#1A1A1A] text-sm">{address.email}</p>
      <p  className="text-[#1A1A1A] text-sm">{address.phone}</p>
      <button className="text-[#00B207] text-sm">Edit Address</button>
        </div>
        </>
    )
}
export default BillingAddress;