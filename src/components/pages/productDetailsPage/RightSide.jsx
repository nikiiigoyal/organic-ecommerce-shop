
export const RightSideImage = () => {
    return (
        <div >
            <div className="font-poppins">
                <img src="/src/components/images/RightImg.png"></img>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-row">
                 <img src="/src/components/images/discounticon.png"></img>
                 <div className="flex flex-col"> 
                    <h2 className="font-bold text-black">64% Discount</h2>
                    <p className="text-gray-500">Save your 64% money with us</p>
                 </div>
                </div>
                <div>
                <div className="flex flex-row">
                 <img src="/src/components/images/organicIcon.png"></img>
                 <div className="flex flex-col"> 
                    <h2 className="font-bold text-black">64% Discount</h2>
                    <p className="text-gray-500">Save your 64% money with us</p>
                 </div>
                </div>
                </div>
            </div>
        </div>
    )
}