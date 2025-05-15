/* eslint-disable react/prop-types */
export const BillingAddress = ({ address }) => {
  if (!address) {
    return null; // or a placeholder/loading state
  }
  return (
    <div className="flex flex-col border border-[#E6E6E6] rounded-md mx-auto w-full p-4 md:p-6">
      <h3 className="text-xs md:text-sm text-[#999999] mb-2 md:mb-3">
        BILLING ADDRESS
      </h3>
      <h2 className="text-base md:text-lg text-[#1A1A1A] font-semibold mb-2 md:mb-3">
        {address.fullName}
      </h2>
      <p className="text-xs md:text-sm text-[#666666] mb-1 md:mb-2">
        {address.streetAddress}
      </p>
      <p className="text-xs md:text-sm text-[#666666] mb-1 md:mb-2">
        {address.city}, {address.state} {address.zipCode}
      </p>

      <div className="mt-3 md:mt-4">
        <p className="text-xs md:text-sm text-[#1A1A1A] mb-1 md:mb-2">
          {address.email}
        </p>
        <p className="text-xs md:text-sm text-[#1A1A1A] mb-3 md:mb-4">
          {address.phone}
        </p>
      </div>

      <button className="text-xs md:text-sm text-[#00B207] hover:text-[#008A05] hover:underline self-start transition-colors duration-200">
        Edit Address
      </button>
    </div>
  );
};
