
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/homepage01/Header";
import BannerAndFeatures from "./components/homepage01/Banner01";
import Footer from "./components/homepage01/Footer";
import PopularCategories from "./components/homepage01/PopularCategories";
import SaleImages from "./components/homepage01/SaleImages";
import DiscountBanner from "./components/homepage01/discountBanner";
import LatestNews from "./components/homepage01/LatestNews";
import TestimonialCard from "./components/homepage01/Testimonials";
import Follow from "./components/homepage01/Follow";
import ProductsView from "./components/homepage01/Productsview";
import { products } from "./constants";
import HotDeals from "./components/homepage01/HotDeals";




function App() {
return (
  <Router>
<div className="App">
  <Header />
  <BannerAndFeatures />
  <PopularCategories />
   <ProductsView products={products.slice(0,10)} heading="Popular Products"/>
  <SaleImages />
  <DiscountBanner/>
  <HotDeals />
  <ProductsView products={products.slice(0,5)} heading="Featured Products"/>
  <LatestNews />
  <TestimonialCard/>
  <Follow />
  <Footer />
</div>
</Router>
)
}

export default App;
