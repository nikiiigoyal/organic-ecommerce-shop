/* eslint-disable react/prop-types */
export const BillingAddress = ({address}) => {
    if (!address) {
        return null; // or a placeholder/loading state
    }
    return(
        <>
        <div className="flex flex-col border border-[#E6E6E6] mx-auto p-3">
            <h3 className="text-sm text-[#999999] mb-2">BILLING ADDRESS</h3>
            <h2 className="text-[#1A1A1A] font-semibold mb-1">{address.fullName}</h2>
            <p className="text-[#666666] text-sm mb-1">{address.streetAddress}</p>
      <p className="text-[#666666] text-sm mb-1">{address.city}, {address.state} {address.zipCode}</p>
      
      <p className="text-[#1A1A1A] text-sm mb-1">{address.email}</p>
      <p  className="text-[#1A1A1A] text-sm mb-2">{address.phone}</p>
      <button className="text-[#00B207] text-sm text-left mb-2">Edit Address</button>
        </div>
        </>
    )
}
