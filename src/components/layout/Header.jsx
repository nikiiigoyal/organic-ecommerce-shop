import { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import { supabase } from '@/supabase';
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaShoppingBag,
  FaHeart,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Header = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const [error, setError] = useState(null);
  const [cartTotal, setCartTotal] = useState(0);

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearchResults(null);
    setError(null);

    if (!searchTerm.trim()) {
      navigate('/products', { state: { searchTerm: '' } });
      return;
    }
    // Fetch cart total when component mounts
    useEffect(() => {
      const fetchCartTotal = async () => {
        if (user) {
          const total = await getCartTotal();
          setCartTotal(total);
        }
      };

      fetchCartTotal();

      // Setup realtime listener for cart changes
      const cartChannel = supabase
        .channel('cart_changes')
        .on(
          'postgres_changes',
          {
            event: '*',
            schema: 'public',
            table: 'cart_items',
            filter: user ? `user_id=eq.${user.id}` : undefined,
          },
          () => {
            fetchCartTotal();
          }
        )
        .subscribe();

      return () => {
        supabase.removeChannel(cartChannel);
      };
    }, [user]);

    // Rest of your header code...

    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('grocery_products')
        .select('*')
        .ilike('name', `%${searchTerm}%`)
        .limit(10);

      if (error) throw error;

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

  const handleClearSearch = () => {
    setSearchTerm('');
    setSearchResults(null);
    setError(null);
    navigate('/products', { state: { searchResults: null, searchTerm: '' } });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header font-poppins">
      {/* Top Bar - Hidden on mobile */}
      <div className="top-bar bg-[#fffff] px-4 py-2 hidden md:block">
        <div className="flex justify-between items-center w-full md:w-[70%] mx-auto">
          <div className="flex items-center text-sm text-gray-600">
            <FaMapMarkerAlt className="mr-2" />
            <span>Store Location: Sirol road Gwalior</span>
          </div>
          <div className="top-right flex items-center space-x-4 text-sm">
            <select className="language-select flex items-center bg-transparent outline-none">
              <option className="text-gray-600 text-[12px] ml-1">Eng</option>
            </select>
            <select className="currency-select text-gray-600 flex items-center bg-transparent outline-none">
              <option className="text-gray-600 ml-1 text-[12px] bg-transparent">
                USD
              </option>
            </select>
            <span className="text-gray-100">|</span>
            {user?.email ? (
              <p className="text-xs md:text-sm">Welcome! {user.email}</p>
            ) : (
              <Link to="/signin" className="text-gray-600 text-[12px]">
                Sign In / Sign Up
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header flex flex-col md:flex-row justify-between items-center p-4 w-full md:w-[70%] mx-auto">
        {/* Mobile Menu Button */}
        <div className="flex justify-between items-center w-full md:hidden">
          <div className="logo items-center flex">
            <Link to="/" className="flex items-center flex-row">
              <img
                src="/images/headerLogo.jpg"
                alt="Ecobazar"
                className="h-[20px] mr-2"
              />
              <span className="text-black font-semibold text-xl md:text-[32px]">
                Ecobazar
              </span>
            </Link>
          </div>
          <button onClick={toggleMenu} className="md:hidden text-gray-700">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Search Bar - Full width on mobile */}
        <div className="search-bar w-full md:flex-1 md:max-w-xl mx-0 md:mx-8 mt-4 md:mt-0">
          <div className="relative">
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                placeholder="Search"
                className="w-full py-2 px-4 pr-12 border border-gray-300 rounded-md outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  <FaTimes />
                </button>
              )}
              <button
                type="submit"
                className="px-4 bg-[#4CAF50] text-white border-none cursor-pointer rounded-r-md"
              >
                <FaSearch />
              </button>
            </form>
            {isLoading && (
              <div className="loader-container">
                <div className="loader"></div>
                <p>Searching products...</p>
              </div>
            )}
            {error && (
              <div className="error-container">
                <p>{error}</p>
              </div>
            )}
          </div>
        </div>

        {/* Cart - Hidden on mobile when menu is open */}
        {!isMenuOpen && (
          <div className="cart flex items-center space-x-6 mt-4 md:mt-0">
            <Link to="/wishlist">
              <FaHeart className="text-gray-700 text-xl cursor-pointer" />
            </Link>
            <div className="flex">
              <div className="relative flex items-center pl-1">
                <Link to="/cart">
                  <FaShoppingBag className="text-gray-700 text-xl" />
                </Link>
              </div>
              <div className="flex flex-col ml-2">
                <h3 className="text-[#4D4D4D] text-[11px]">Shopping cart</h3>
                <span className="text-[#1A1A1A] text-sm font-semibold">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation - Mobile menu */}
      <nav
        className={`main-nav text-white bg-[#333] ${isMenuOpen ? 'block' : 'hidden'} md:block`}
      >
        <div className="container mx-auto px-4 py-2">
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <li>
              <Link
                to="/"
                className="py-2 px-2 inline-block"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="py-2 px-2 inline-block"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/pages"
                className="py-2 px-2 inline-block"
                onClick={() => setIsMenuOpen(false)}
              >
                Pages
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="py-2 px-2 inline-block"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="py-2 px-2 inline-block"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="py-2 px-2 inline-block"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {/* Phone - Only visible on mobile */}
        <div className="phone text-white flex items-center gap-2 px-4 py-3 md:hidden">
          <FaPhone />
          <span>(219) 555-0114</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
