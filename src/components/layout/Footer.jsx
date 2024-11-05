
import { Link } from 'react-router-dom';

const Footer = () => {
    const menuSections = [
        {
            title: "My Account",
            items: ["My Account", "Order History", "Shoping Cart", "Wishlist"]
        },
        {
            title: "Helps",
            items: ["Contact", "Faqs", "Terms & Condition", "Privacy Policy"]
        },
        {
            title: "Proxy",
            items: ["About", "Shop", "Product", "Track Order"]
        },
        {
            title: "Categories",
            items: ["Fruit & Vegetables", "Meat & Fish", "Bread & Bakery", "Beauty & Health"]
        }
    ];

    return (
        <footer className="w-full">
            <div className="bg-gray-100 py-8">
                <div className="container mx-auto flex justify-around items-center">
                    <div className="max-w-md">
                        <h2 className="text-2xl font-bold mb-2">Subcribe our Newsletter</h2>
                        <p className="text-gray-600">Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
                    </div>
                    <div className="flex">
                        <input 
                            type="email" 
                            placeholder="Your email address" 
                            className="px-4 py-3 w-80 border border-gray-300 rounded-l-full h-[52px] focus:outline-none"
                        />
                        <button className="bg-[#00B207] text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300">
                            Subscribe
                        </button>
                    </div>
                    <div className="flex">
                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center ml-[15px]">
                            <img src="/images/fb.png"></img>
                        </a>
                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <img src="/images/github.png"></img>
                        </a>
                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <img src="/images/psocial.png"></img>
                        </a>
                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <img src="/images/insta.png"></img>
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-black flex justify-around text-white py-12 mx-auto">
                <div className="container mx-auto grid grid-cols-5 gap-6">
                    <div className="col-span-1 ml-16">
                        <Link to="/" className="flex items-center mb-4">
                            <img src="/images/footerlogo.png" alt="Ecobazar" className="h-8 mr-2" />
                            <span className="text-white font-bold text-2xl">Ecobazar</span>
                        </Link>
                        <p className="text-gray-500 mb-4 text-sm">Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
                        <p className="text-gray-400">
                            <span className="text-white font-semibold border-b-2 border-[#20B526] text-sm">(219) 555-0114</span> or <span className="text-white font-semibold border-b-2 border-[#20B526] text-sm">Proxy@gmail.com</span>
                        </p>
                    </div>
                    
                    {menuSections.map((section, index) => (
                        <div key={index} className="col-span-1">
                            <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                            <ul className="space-y-1">
                                {section.items.map((item, idx) => (
                                    <li key={idx} className="text-gray-400 hover:text-white cursor-pointer text-sm">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-black text-white py-6 border-t border-gray-800">
                <div className="container flex justify-around items-center">
                    <p className="text-sm text-gray-400">Ecobazar eCommerce © 2021. All Rights Reserved</p>
                    <div className="flex space-x-3">
                        <img src="/images/Method=ApplePay.png" alt="Apple Pay" className="h-8" />
                        <img src="/images/Method=Visa.png" alt="Visa" className="h-8" />
                        <img src="/images/Method=Discover.png" alt="Discover" className="h-8" />
                        <img src="/images/Method=Mastercard.png" alt="Mastercard" className="h-8" />
                        <img src="/images/securepay.png" alt="Secure Payment" className="h-8" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;