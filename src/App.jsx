
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/homepage01/Header";
import BannerAndFeatures from "./components/homepage01/Banner01";
import Footer from "./components/homepage01/Footer";
import PopularCategories from "./components/homepage01/PopularCategories";
import PopularProducts from "./components/homepage01/PopularProducts";
import SaleImages from "./components/homepage01/SaleImages";
import DiscountBanner from "./components/homepage01/discountBanner";
import LatestNews from "./components/homepage01/LatestNews";
import TestimonialCard from "./components/homepage01/Testimonials";
import Follow from "./components/homepage01/Follow";




function App() {
return (
  <Router>
<div className="App">
  <Header />
  <BannerAndFeatures />
  <PopularCategories />
   <PopularProducts /> 
  <SaleImages />
  <DiscountBanner/>
  <LatestNews />
  <TestimonialCard/>
  <Follow />
  <Footer />
</div>
</Router>
)
}

export default App;
