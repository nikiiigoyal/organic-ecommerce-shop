export const AccountSettings = () => {
    return(
    <>
    <div className="border border-gray-100 font-poppins rounded-lg w-[70%]">
      <div className="flex flex-col border border-b-[#E5E5E5] p-5">
        <h1 className="text-[#1A1A1A] text-[20px] rounded-md font-semibold">Account Settings</h1>
      </div>
      <div className="flex flex-row justify-around my-4">
        <div className="flex flex-col">
            <label>
                <h2 className="text-sm text-[#1A1A1A] my-2">First name</h2>
                <input placeholder="Dianne" className="p-4 text-[#666666] border border-[#E6E6E6] rounded-md"></input>
            </label>
            <label>
                <h2 className="text-sm text-[#1A1A1A] my-2">Last name</h2>
                <input placeholder="Russell" className="p-4 text-[#666666] border border-[#E6E6E6] rounded-md"></input>
            </label>
            <label>
                <h2 className="text-sm text-[#1A1A1A] my-2">Email</h2>
                <input placeholder="dianne.russell@gmail.com" className="p-4 text-[#666666] border border-[#E6E6E6] rounded-md"></input>
            </label>
            <label>
                <h2 className="text-sm text-[#1A1A1A] my-2">Phone number</h2>
                <input placeholder="(603) 555 0123" className="p-4 text-[#666666] border border-[#E6E6E6] rounded-md"></input>
            </label>
            <button className="bg-[#00B207] text-white py-2 px-3 rounded-full my-2">Save Changes</button>
        </div>
        <div className="flex flex-col">
            <img src="/images/avatar.png " className="mb-4"></img>
            <button className="text-[#00B207] border border-[#00B207] rounded-full px-5 py-2 text-sm">Chose Image</button>
        </div>
      </div>
    </div>
    </>
    )
}