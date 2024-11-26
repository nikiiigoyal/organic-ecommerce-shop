export const ChangePassword = () => {
    return(
        <>
        <div className="border border-#E6E6E6]">
            <h1 className="text-sm text-[#1A1A1A]">Change Password</h1>
            <label>
                <h2 className="text-[14px] text-[#1A1A1A]">Current Password</h2>
                <input className="p-2 border border-[#E6E6E6]" placeholder="Password"></input>
            </label>
            <div>
            <label>
                <h2 className="text-[14px] text-[#1A1A1A]">New Password</h2>
                <input className="p-2 border border-[#E6E6E6]" placeholder="Password"></input>
            </label>
            <label>
                <h2 className="text-[14px] text-[#1A1A1A]">Confirm Password</h2>
                <input className="p-2 border border-[#E6E6E6]" placeholder="Password"></input>
            </label>
            </div>
            <button className="text-[#00B207] border border-[#00B207] rounded-lg p-4 text-sm">Change Password</button>
        </div>
        </>
    )
}