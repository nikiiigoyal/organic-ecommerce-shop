import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="w-[1920px] h-[530px]">
         <div className="h-[162px] bg-[f7f7f7] mx-auto flex justify-center items-center border-[#E6E6E6] border">
            <div className="newsleter w-[448px]">
                <h2 className="text-2xl text-[#1A1A1A] font-semibold mb-2">Subscribe our newsletter</h2>
                <p className="text-sm  text-gray-400">Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
            </div>
            <div className="search w-[536px] border-[#E6E6E6] border flex">
          <input type="email" placeholder="Your email address"className="flex-grow border border-[#E6E6E6] rounded-l-full px-4 py-2 focus:outline-none">
          <button className="w-[162px] px-6 py-2 rounded-r-full bg-[#00B207] text-white text-center hover:bg-green-600 transition duration-300">Subscribe</button>
          </input>
            </div>
            <div className="social flex space-x-4 w-[184px]">
                <img src="/src/components/images/fb.png"></img>
                <img src="/src/components/images/github.png"></img>
                <img src="/src/components/images/psocila.png"></img>
                <img src="/src/components/images/insta.png"></img>
            </div>
         </div>
         <div className="h-[368px] text-white py-12 bg-[#1A1A1A]">
            <div className="h-[168px] mx-auto grid grid-cols-5 gap-8">
            <div className="logo items-center flex">
            <Link to="/" className='flex items-center flex-row'>
              <img src="/src/components/images/headerLogo.jpg" alt="Ecobazar"className='h-[20px] mr-2' />
              <span className="text-white font-semibold text-2xl">Ecobazar</span>
            </Link>
            <p className='text-gray-400 mb-4'>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
            <p className="text-gray-400"><span className="text-white">(219) 555-0114</span> or <span className="text-white">proxy@gmail.com</span></p>
          </div>
                <div>
                    <h2>My Account</h2>
                    <ul>
                        <li>My Account</li>
                        <li>Order History</li>
                        <li>Shopping Cart</li>
                        <li>Wishlist</li>
                        
                    </ul>
                </div>
                <div> 
                    <h2>Help</h2>
                    <ul>
                        <li>Contact</li>
                        <li>FAqs</li>
                        <li>Terms & Condition</li>
                        <li>Privacy policy</li>
                        
                    </ul>
                    </div>
                <div> 
                    <h2>Proxy</h2>
                    <ul>
                        <li>About</li>
                        <li>Shop</li>
                        <li>Product</li>
                        <li>Track order</li>
                        
                    </ul>
                    </div>
                <div>
                    <h2>Categories</h2>
                    <ul>
                        <li>Fruits & Vegetables</li>
                        <li>Meat & Fish</li>
                        <li>Bread & Bakery</li>
                        <li>Beauty & Health</li>
                        
                    </ul>
                    </div>
            </div>
            
            <div className="bg-[#1A1A1A] text-white py-6 border-t border-gray-700">
                <div className="container mx-auto flex justify-between items-center">
                    <div>
                        <p className="text-sm text-gray-400">Ecobazar eCommerce © 2021. All Rights Reserved</p>
                    </div>
                    <div className="flex space-x-3">
                        <img src="/src/components/images/Method=ApplePay.png" alt="Apple Pay" className="h-6" />
                        <img src="/src/components/images/Method=Visa.png" alt="Visa" className="h-6" />
                        <img src="/src/components/images/Method=Discover.png" alt="Discover" className="h-6" />
                        <img src="/src/components/images/Method=Mastercard.png" alt="Mastercard" className="h-6" />
                        <img src="/src/components/images/Cart.png" alt="Cart" className="h-6" />
                    </div>
                </div>
            </div>
         </div>
        </div>
    )
}
export default Footer