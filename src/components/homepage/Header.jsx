import { Link } from 'react-router-dom';
const Header = () => {
    return (
      <header className="header font-sans">
        {/* top bar */}
        <div className="top-bar bg-[#f5f5f5] px-4 py-2">
            <div className='flex justify-between items-center w-[70%] mx-auto'>
            <div className='flex items-center text-sm text-gray-600'>
            <img src="/src/components/images/MapPin.jpg" className='mr-2'></img>
          <span>Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
          </div>
          <div className="top-right flex items-center space-x-4 pt text-sm">
            <select className="language-select text-gray-600 flex items-center">
              <option className='text-gray-600 text-[12px] ml-1 bg-none'>Eng</option>
              {/* Add more language options */}
            </select>
            <select className="currency-select text-gray-600 flex items-center">
              <option  className='text-gray-600 ml-1 text-[12px] bg-none'>USD</option>
              {/* Add more currency options */}
            </select>
            <span className='text-gray-100'>|</span>
            <Link to="/signin"  className='text-gray-600 text-[12px]'>Sign In / Sign Up</Link>
          </div>
        </div>
        </div>
        {/* main header */}
        <div className="main-header flex justify-between items-center p-4  w-[70%] mx-auto">
          <div className="logo items-center flex">
            <Link to="/" className='flex items-center flex-row'>
              <img src="/src/components/images/headerLogo.jpg" alt="Ecobazar"className='h-[20px] mr-2' />
              <span className="text-black font-semibold text-[32px]">Ecobazar</span>
            </Link>
          </div>
          <div className="search-bar flex-1 max-w-xl mx-8">
            <div className='relative'>
            <input type="text" placeholder="Search" className='w-full py-2 px-4 pr-12 border border-gray-300 rounded-md' />
            <button type="submit" className='absolute right-0 top-0 px-[20px] py-[10px] bg-[#4CAF50] text-white border-none cursor-pointer rounded-r-md h-full'>Search</button>
          </div>
          </div>
          <div className="cart flex items-center space-x-6">
            <img src="/src/components/images/Heart.png"></img>
            <div className='relative'>
            <Link to="/cart">
              <span className="cart-icon">🛒</span>
              </Link>
              </div>
              <div className='flex items-center'>
              <span className="cart-amount mr-2">$57.00</span>
           </div>
          </div>
        </div>
        {/* navigation */}
        <nav className="main-nav text-white bg-[#333] px-5 py-[10px] flex justify-between items-center">
          <ul className='flex space-x-6 ml-6'>
          <li><Link to="/" className="py-3 px-2 inline-block">Home</Link></li>
              <li><Link to="/shop" className="py-3 px-2 inline-block">Shop</Link></li>
              <li><Link to="/pages" className="py-3 px-2 inline-block">Pages</Link></li>
              <li><Link to="/blog" className="py-3 px-2 inline-block">Blog</Link></li>
              <li><Link to="/about" className="py-3 px-2 inline-block">About Us</Link></li>
              <li><Link to="/contact" className="py-3 px-2 inline-block">Contact Us</Link></li>
          </ul>
          <div className="phone text-white flex items-center gap-[8px]">
            <img src="/src/components/images/vector.png"></img>
            <span>(219) 555-0114</span>
          </div>
          
        </nav>
      </header>
    );
  };
  
  export default Header;