export function Contact () {
    return (
        <>
        <div className="flex flex-col bg-gray-50 items-center h-fit font-poppins mb-7">
            <div className="top flex flex-row w-[90%] mx-auto justify-around mt-5 ">
            <div className="left w-[30%] flex flex-col shadow-[0px,0px,56px,0px,#00260314] bg-white rounded-lg">
  <div className="flex flex-col items-center py-4">
    <img src="/src/components/images/Address.png" alt="Map Pin" className="" />
    {/* <p className="text-sm text-gray-800 mt-2 text-center">2715 Ash Dr. San Jose, South Dakota 83475</p> */}
  </div>
  <div className="flex flex-col items-center py-4">
    <img src="/src/components/images/Email.png" className="w-7 h-7" alt="email" />
    <p className="text-sm text-gray-500 mt-2 font-semibold">Proxy@gmail.com<br />Help.proxy@gmail.com</p>
  </div>
  <div className="flex flex-col items-center py-4">
    <img src="/src/components/images/phoneCall.png" className="w-8 h-8" alt="phone" />
    <p className="text-sm text-gray-500 font-semibold mt-2">(219) 555-0114<br />(164) 333-0487</p>
  </div>
</div>
                <div className="right w-[60%]  rounded-lg flex flex-col justify-between p-4 shadow-[0px,0px,56px,0px,#00260314] bg-white">
                    <h2 className="font-bold text-lg text-black py-5">Just Say Hello!</h2>
                    <p className="text-sm text-[#808080] mb-4 w-[50%]"> Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free to contact me.</p>
                    <div className="flex flex-row justify-between mb-5">
                        <input className="border w-[40%] border-[#E6E6E6] text-sm text-gray-600 p-3" placeholder="Template Cookie"></input>
                        <input className="border border-[#E6E6E6] text-sm text-gray-600 p-3 w-[50%]" type="email"placeholder="zakirsoft@gmail.com"></input>
                    </div>
                    <input 
                        className="w-full border border-[#E6E6E6] text-gray-700 p-3 rounded-md mb-5" 
                        placeholder="Hello" 
                        type="email"
                    />
                    <textarea className="w-full border border-[#E6E6E6] text-gray-700 p-3 rounded-md mb-3">Subjects</textarea>
                    <button className="rounded-full py-3 px-2 text-white bg-[#00B207] w-[20%]">Send Message</button>
                </div>
            </div>
            <div className="bottom my-8">
                <img src="/src/components/images/Map image.png"className="w-full"></img>
            </div>
        </div>
        </>
    )
}