const Navigation = () => {
    return (
        <>
        <div className="flex flex-col border border-[#E6E6E6] p-5 font-poppins w-[300px] h-fit">
        <h1 className="text-[#1A1A1A] text-[20px] mb-2">Navigation</h1>
        <div className="flex flex-row mx-2 p-2 items-center">
            <img src="images/dashboard.png"></img>
            <h2 className="text-sm text-[#666666]">Dashboard</h2>
        </div>
        <div className="flex flex-row mx-1 items-center p-2">
            <img src="images/orderHistory.png"></img>
            <h2 className="text-sm text-[#666666]">Order History</h2>
        </div>
        <div className="flex flex-row mx-1 items-center p-2">
            <img src="images/dashboard.png"></img>
            <h2 className="text-sm text-[#666666]">Wishlist</h2>
        </div>
        <div className="flex flex-row mx-1 items-center p-2">
            <img src="images/cart.png"></img>
            <h2 className="text-sm text-[#666666]">Shopping Cart</h2>
        </div>
        <div className="flex flex-row mx-1 items-center p-2">
            <img src="images/settings.png"></img>
            <h2 className="text-sm text-[#666666]">Settings</h2>
        </div>
        <div className="flex flex-row mx-1 items-center p-2">
            <img src="images/logout.png"></img>
            <h2 className="text-sm text-[#666666]">Log out</h2>
        </div>
        </div>
        </>
    )
}
export default Navigation;