export const ChangePassword = () => {
    return(
        <>
        <div className="border border-#E6E6E6] rounded-md w-[70%]">
            <h1 className="text-lg my-5 p-2 font-semibold text-[#1A1A1A] border border-b-[#E5E5E5]">Change Password</h1>
            <label>
                <h2 className="text-[14px] text-[#1A1A1A] p-2">Current Password</h2>
                <input className="p-2 border border-[#E6E6E6] rounded-md" placeholder="Password"></input>
            </label>
            <div className="flex flex-row justify-between">
            <label>
                <h2 className="text-[14px] text-[#1A1A1A] p-2">New Password</h2>
                <input className="p-2 border border-[#E6E6E6] rounded-md" placeholder="Password"></input>
            </label>
            <label>
                <h2 className="text-[14px] text-[#1A1A1A] p-2">Confirm Password</h2>
                <input className="p-2 border border-[#E6E6E6] mb-2 rounded-md" placeholder="Password"></input>
            </label>
            </div>
            <button className="bg-[#00B207] text-white py-2 px-3 rounded-full my-2">Change Password</button>
        </div>
        </>
    )
}