export const BillingInfo = () => {
    return (
    <>
    <div className="flex flex-col font-poppins">
        <h1 className="text-[#1A1A1A] text-[24px] mb-4 font-semibold">Billing Information</h1>
        <div className="flex justify-around">
        <label className="">
            <h3 className="text-[#1A1A1A] text-sm mb-2"> First name</h3>
            <input className="px-4 py-3 text-sm text-[#999999] border border-gray-100 rounded-sm" placeholder="Your first name"></input>
        </label>
        <label className="">
            <h3 className="text-[#1A1A1A] text-sm "> Last name</h3>
            <input className="p-4 text-sm text-[#999999] border border-gray-100 rounded-sm" placeholder="Your last name"></input>
        </label>
        <label className="">
            <h3 className="text-[#1A1A1A] text-sm"> Company name<span className="text-gray-500">(optional)</span></h3>
            <input className="p-4 text-sm text-[#999999] border border-gray-100 rounded-sm" placeholder="Company name"></input>
        </label>
        </div>
        <div className="flex justify-around">
        <label className="">
            <h3 className="text-[#1A1A1A] text-sm mb-2"> Country / Region</h3>
            <select className="px-10 py-3 text-sm text-[#999999] border border-gray-100 rounded-sm">
                <option>Select</option>
                <option>India</option>
                <option>China</option>
                <option>Japan</option>
                </select>
               
        </label>
        <label className="">
            <h3 className="text-[#1A1A1A] text-sm ">States</h3>
            <select className="p-4 text-sm text-[#999999] border border-gray-100 rounded-sm">
                <option>Select</option>
                <option>M.p</option>
                <option>U.p</option>
                <option>Bihar</option>
                </select>
        </label>
        <label className="">
            <h3 className="text-[#1A1A1A] text-sm">Zip code</h3>
            <input className="p-4 text-sm text-[#999999] border border-gray-100 rounded-sm" placeholder="Zip code"></input>
        </label>
        </div>

    </div>
        
    </>
    )
}