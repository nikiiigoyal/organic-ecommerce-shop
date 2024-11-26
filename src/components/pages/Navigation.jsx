import { NavLink, Outlet } from "react-router-dom";
import Dashboard from "./userDashboard";
import { OrderHistory } from "./orderHistory";
import { Wishlist } from "./wishlist/Wishlist";
import ShoppingCart from "./shoppingCart/ShoppingCart";
import { Settings } from "./settings";
import { ErrorPage } from "./ErrorPage";

const Navigation = () => {
    return (
        <>
        <div className="flex flex-col border border-[#E6E6E6] p-5 font-poppins w-[300px] h-fit">
        <h1 className="text-[#1A1A1A] text-[20px] mb-2">Navigation</h1>
        <nav className="space-y-2">
          <NavLink 
            to="/pages" 
            end
            className={({ isActive }) => `
              flex items-center space-x-2 p-2 rounded 
              ${isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-200'}
            `}
          >
            <Dashboard className="w-5 h-5" />
            <span>Dashboard</span>
          </NavLink>
          
          <NavLink 
            to="/pages/orderHistory" 
            className={({ isActive }) => `
              flex items-center space-x-2 p-2 rounded 
              ${isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-200'}
            `}
          >
            <OrderHistory className="w-5 h-5" />
            <span>Order History</span>
          </NavLink>
          
          <NavLink 
            to="/pages/wishlist" 
            className={({ isActive }) => `
              flex items-center space-x-2 p-2 rounded 
              ${isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-200'}
            `}
          >
            <Wishlist className="w-5 h-5" />
            <span>Wishlist</span>
          </NavLink>
          
          <NavLink 
            to="/pages/cart" 
            className={({ isActive }) => `
              flex items-center space-x-2 p-2 rounded 
              ${isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-200'}
            `}
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Shopping Cart</span>
          </NavLink>
          
          <NavLink 
            to="/pages/settings" 
            className={({ isActive }) => `
              flex items-center space-x-2 p-2 rounded 
              ${isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-200'}
            `}
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </NavLink>
          
          <NavLink 
            to="/pages/LogOut" 
            className="flex items-center space-x-2 p-2 rounded hover:bg-red-100 hover:text-red-600"
          >
            <ErrorPage className="w-5 h-5" />
            <span>Logout</span>
          </NavLink>
        </nav>
        <div className="flex-1 p-6">
        <Outlet />
      </div>
        </div>
        </>
    )
}
export default Navigation;