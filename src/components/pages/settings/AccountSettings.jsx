export const AccountSettings = () => {
    return(
    <>
    <div className="border border-gray-100 font-poppins rounded-lg">
      <div className="flex flex-col border border-b-[#E5E5E5] p-5">
        <h1 className="text-[#1A1A1A] text-[20px]">Account Settings</h1>
      </div>
      <div className="flex flex-row">
        <div>
            <label>
                <h2 className="text-sm text-[#1A1A1A]">First name</h2>
                <input placeholder="Dianne" className="p-4 text-[#666666] border border-[#E6E6E6]"></input>
            </label>
            <label>
                <h2 className="text-sm text-[#1A1A1A]">Last name</h2>
                <input placeholder="Russell" className="p-4 text-[#666666] border border-[#E6E6E6]"></input>
            </label>
            <label>
                <h2 className="text-sm text-[#1A1A1A]">Email</h2>
                <input placeholder="dianne.russell@gmail.com" className="p-4 text-[#666666] border border-[#E6E6E6]"></input>
            </label>
            <label>
                <h2 className="text-sm text-[#1A1A1A]">Phone number</h2>
                <input placeholder="(603) 555 0123" className="p-4 text-[#666666] border border-[#E6E6E6]"></input>
            </label>
            <button className="bg-[#00B207] text-white p-3 rounded-lg">Save Changes</button>
        </div>
        <div>
            <img src="images/avatar.png"></img>
            <button className="text-[#00B207] border border-[#00B207] rounded-lg p-4 text-sm">Chose Image</button>
        </div>
      </div>
    </div>
    </>
    )
}