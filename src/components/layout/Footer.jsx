import { Link } from 'react-router-dom';

const Footer = () => {
  const menuSections = [
    {
      title: 'My Account',
      items: ['My Account', 'Order History', 'Shoping Cart', 'Wishlist'],
    },
    {
      title: 'Helps',
      items: ['Contact', 'Faqs', 'Terms & Condition', 'Privacy Policy'],
    },
    {
      title: 'Proxy',
      items: ['About', 'Shop', 'Product', 'Track Order'],
    },
    {
      title: 'Categories',
      items: [
        'Fruit & Vegetables',
        'Meat & Fish',
        'Bread & Bakery',
        'Beauty & Health',
      ],
    },
  ];

  return (
    <footer className="w-full">
      {/* Newsletter Section */}
      <div className="bg-gray-100 py-8 px-4 sm:px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="max-w-md text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">
              Subscribe our Newsletter
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna.
            </p>
          </div>
          <div className="relative w-full md:w-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 w-full sm:w-80 border border-gray-300 rounded-full h-[52px] focus:outline-none"
            />
            <button className="bg-[#00B207] text-white px-4 sm:px-6 py-3 rounded-full absolute right-0 top-1/2 transform -translate-y-1/2 hover:bg-green-600 transition duration-300 text-sm sm:text-base">
              Subscribe
            </button>
          </div>
          <div className="flex gap-2 sm:gap-4">
            {['fb', 'github', 'psocial', 'instagram'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-white hover:bg-gray-200 transition duration-300"
              >
                <img
                  src={`/images/${social}${social === 'instagram' ? ' 1' : ''}.png`}
                  alt={social}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="bg-black text-white py-8 sm:py-12 px-4 sm:px-6">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {/* Logo and Info - Full width on mobile, then first column */}
          <div className="sm:col-span-2 md:col-span-1 text-center sm:text-left">
            <Link
              to="/"
              className="flex items-center justify-center sm:justify-start mb-4"
            >
              <img
                src="/images/footerlogo.png"
                alt="Ecobazar"
                className="h-6 sm:h-8 mr-2"
              />
              <span className="text-white font-bold text-xl sm:text-2xl">
                Ecobazar
              </span>
            </Link>
            <p className="text-gray-500 mb-4 text-xs sm:text-sm">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magna congue nec.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm">
              <span className="text-white font-semibold border-b-2 border-[#20B526]">
                (219) 555-0114
              </span>{' '}
              or{' '}
              <span className="text-white font-semibold border-b-2 border-[#20B526]">
                Proxy@gmail.com
              </span>
            </p>
          </div>

          {/* Menu Sections */}
          {menuSections.map((section, index) => (
            <div key={index} className="text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-gray-400 hover:text-white cursor-pointer text-xs sm:text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright and Payments */}
      <div className="bg-black text-white py-4 sm:py-6 border-t border-gray-800 px-4 sm:px-6">
        <div className="container flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
            Ecobazar eCommerce © 2021. All Rights Reserved
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {['ApplePay', 'Visa', 'Discover', 'Mastercard', 'securepay'].map(
              (method) => (
                <img
                  key={method}
                  src={`/images/Method=${method}.png`}
                  alt={method}
                  className="h-6 sm:h-8"
                />
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
