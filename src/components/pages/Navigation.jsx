import { NavLink, Outlet, useParams } from 'react-router-dom';

const Navigation = () => {
  const { pageType } = useParams();

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile Header (visible only on small screens) */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-[#E6E6E6]">
        <h1 className="text-[#1A1A1A] text-lg font-medium">Menu</h1>
        {/* Mobile menu button would go here */}
      </div>

      {/* Sidebar Navigation - hidden on mobile by default */}
      <div className="hidden lg:flex flex-col border-r border-[#E6E6E6] p-5 font-poppins w-[250px] lg:w-[300px] h-screen sticky top-0">
        <h1 className="text-[#1A1A1A] text-xl lg:text-[20px] mb-4">
          Navigation
        </h1>
        <nav className="space-y-2">
          <NavLink
            to="/pages"
            end
            className={({ isActive }) => `
              flex items-center space-x-3 p-3 text-[#666666] rounded-lg
              ${isActive ? 'bg-[#EDF2EE] border-l-4 border-l-[#00B207] text-black' : 'hover:bg-gray-100'}
            `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="text-sm lg:text-base">Dashboard</span>
          </NavLink>

          {/* Other NavLinks with the same pattern */}
          {/* Order History */}
          <NavLink
            to="/pages/orderHistory"
            className={({ isActive }) => `
              flex items-center space-x-3 p-3 rounded-lg
              ${isActive ? 'bg-[#EDF2EE] border-l-4 border-l-[#00B207] text-black' : 'hover:bg-gray-100'}
            `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
            <span className="text-sm lg:text-base">Order History</span>
          </NavLink>

          {/* Wishlist */}
          <NavLink
            to="/pages/wishlist"
            className={({ isActive }) => `
              flex items-center space-x-3 p-3 rounded-lg
              ${isActive ? 'bg-[#EDF2EE] border-l-4 border-l-[#00B207] text-black' : 'hover:bg-gray-100'}
            `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span className="text-sm lg:text-base">Wishlist</span>
          </NavLink>

          {/* Shopping Cart */}
          <NavLink
            to="/pages/cart"
            className={({ isActive }) => `
              flex items-center space-x-3 p-3 rounded-lg
              ${isActive ? 'bg-[#EDF2EE] border-l-4 border-l-[#00B207] text-black' : 'hover:bg-gray-100'}
            `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="text-sm lg:text-base">Shopping Cart</span>
          </NavLink>

          {/* Settings */}
          <NavLink
            to="/pages/settings"
            className={({ isActive }) => `
              flex items-center space-x-3 p-3 rounded-lg
              ${isActive ? 'bg-[#EDF2EE] border-l-4 border-l-[#00B207] text-black' : 'hover:bg-gray-100'}
            `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-sm lg:text-base">Settings</span>
          </NavLink>

          {/* Logout */}
          <NavLink
            to="/pages/LogOut"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-red-100 hover:text-red-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span className="text-sm lg:text-base">Logout</span>
          </NavLink>
        </nav>
      </div>

      {/* Mobile Menu (would be toggled) */}
      {/* You would implement the mobile menu toggle functionality here */}

      {/* Main Content Area */}
      <div className="flex-1 p-4 lg:p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Navigation;
