export function SignInForm () {
    return (
        <div>
        <div className="w-[520px] p-8 rounded-lg flex flex-col items-center border border-[#F2F2F2] shadow-[#00260314] bg-white font-poppins justify-around mx-auto my-6">
              <h1 className="text-black text-lg text-center text-bold">Sign in</h1>
        <form className="w-full space-y-4">
            <div>
            <input 
                        className="w-full border border-[#E6E6E6] text-gray-700 p-3 rounded-md" 
                        placeholder="Email" 
                        type="email"
                    />
                </div>
                <div className="relative">
                    <input 
                        className="w-full border border-[#E6E6E6] text-gray-700 p-3 pr-10 rounded-md" 
                        placeholder="Password" 
                        type="password"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        👁️
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <label className="flex items-center">
                        <input className="w-5 h-5 mr-2" type="checkbox" />
                        <span className="text-sm text-gray-600">Remember me</span>
                    </label>
                    <a href="#" className="text-gray-600 text-sm hover:underline">Forgot Password?</a>
                </div>
                <button className="bg-[#00B207] text-white text-sm rounded-full font-semibold hover:bg-green-600 w-full p-3" type="submit">
            Login
        </button>
            </form>
        
        <p className="mt-6 text-sm text-gray-600">
                Don&apos;t have account? <a href="#" className="text-black font-semibold hover:underline">Register</a>
            </p>
        </div>
        </div>
    )
}