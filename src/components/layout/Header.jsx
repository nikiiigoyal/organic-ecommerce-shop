import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import { supabase } from '@/supabase';

const Header = () => {
  const { user } = useContext(AuthContext);
  // console.log(user)
  const navigate = useNavigate();

  // search states
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const [error, setError] = useState(null);

  // search handler

  const handleSearch = async (e) => {
    e.preventDefault();

    //reset previous state
    setSearchResults(null);
    setError(null);

    if (!searchTerm.trim()) {
      navigate('/products', { state: { searchTerm: '' } });
      return;
    }

    try {
      setIsLoading(true);

      const { data, error } = await supabase
        .from('grocery_products')
        .select('*')
        .ilike('name', `%${searchTerm}%`)
        .limit(10);

      if (error) throw error;

      // If no results found
      if (!data || data.length === 0) {
        setError(`No products found for "${searchTerm}"`);
        setSearchResults([]);
        navigate('/products', {
          state: {
            searchResults: [],
            searchTerm: searchTerm,
          },
        });
        return;
      }

      navigate('/products', {
        state: {
          searchResults: data,
          searchTerm: searchTerm,
        },
      });
    } catch (error) {
      console.error('Error searching products:', error);
      setError('Failed to search products');
    } finally {
      setIsLoading(false);
    }
  };
  //handler for clearing search
  const handleClearSearch = () => {
    setSearchTerm('');
    setSearchResults(null);
    setError(null);
    navigate('/products', { state: { searchResults: null, searchTerm: '' } });
  };

  return (
    <header className="header font-poppins">
      {/* top bar */}
      <div className="top-bar bg-[#fffff] px-4 py-2">
        <div className="flex justify-between items-center w-[70%] mx-auto">
          <div className="flex items-center text-sm text-gray-600">
            <img src="/images/MapPin.jpg" className="mr-2"></img>
            <span>Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
          </div>
          <div className="top-right flex items-center space-x-4 pt text-sm">
            <select className="language-select flex items-center bg-transparent outline-none">
              <option className="text-gray-600 text-[12px] ml-1 ">Eng</option>
              {/* Add more language options */}
            </select>
            <select className="currency-select text-gray-600 flex items-center bg-transparent outline-none">
              <option className="text-gray-600 ml-1 text-[12px] bg-transparent">
                USD
              </option>
              {/* Add more currency options */}
            </select>
            <span className="text-gray-100">|</span>
            {user?.email ? (
              <p>Welcome! {user.email}</p>
            ) : (
              <Link to="/signin" className="text-gray-600 text-[12px]">
                Sign In / Sign Up
              </Link>
            )}
          </div>
        </div>
      </div>
      {/* main header */}
      <div className="main-header flex justify-between items-center p-4  w-[70%] mx-auto">
        <div className="logo items-center flex">
          <Link to="/" className="flex items-center flex-row">
            <img
              src="/images/headerLogo.jpg"
              alt="Ecobazar"
              className="h-[20px] mr-2"
            />
            <span className="text-black font-semibold text-[32px]">
              Ecobazar
            </span>
          </Link>
        </div>
        <div className="search-bar flex-1 max-w-xl mx-8">
          <div className="relative">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search"
                className="w-full py-2 px-4 pr-12 border border-gray-300 rounded-md outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <div className="flex">
                  <button type="button" onClick={handleClearSearch}>
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>
              )}

              <button
                type="submit"
                className="absolute right-0 top-0 px-[20px] py-[10px] bg-[#4CAF50] text-white border-none cursor-pointer rounded-r-md h-full"
                onClick={handleSearch}
              >
                Search
              </button>
            </form>
            {/* loading indicator */}
            {isLoading && (
              <div className="loader-container">
                <div className="loader"></div>
                <p>Searching products...</p>
              </div>
            )}
            {/* Error Handling */}
            {error && (
              <div className="error-container">
                <p>{error}</p>
              </div>
            )}
          </div>
        </div>
        <div className="cart flex items-center space-x-6">
          <img src="/images/Heart.png"></img>
          <div className="flex">
            <div className="relative flex items-center pl-1">
              <Link to="/cart">
                <span className="cart-icon">
                  <img src="/images/Bag.png"></img>
                </span>
              </Link>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[#4D4D4D] text-[11px]">Shopping cart</h3>
              <span className="text-[#1A1A1A] text-sm font-semibold mr-2">
                $57.00
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* navigation */}
      <nav className="main-nav text-white bg-[#333] px-5 py-[10px] flex justify-between items-center">
        <ul className="flex space-x-6 ml-6">
          <li>
            <Link to="/" className="py-3 px-2 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="py-3 px-2 inline-block">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/pages" className="py-3 px-2 inline-block">
              Pages
            </Link>
          </li>
          <li>
            <Link to="/blog" className="py-3 px-2 inline-block">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/about" className="py-3 px-2 inline-block">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="py-3 px-2 inline-block">
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="phone text-white flex items-center gap-[8px]">
          <img src="/images/phone.png"></img>
          <span>(219) 555-0114</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
