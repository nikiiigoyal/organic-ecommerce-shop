import BannerAndFeatures from "./Banner01";
import DiscountBanner from "./discountBanner";
import Footer from "./Footer";
import Header from "./Header";
import PopularCategories from "./PopularCategories";
import ProductsView from "./Productsview";
import { products } from "../../constants";
import SaleImages from "./SaleImages";
import HotDeals from "./HotDeals";
import LatestNews from "./LatestNews";
import TestimonialCard from "./Testimonials";
import Follow from "./Follow";

export default function Homepage () {
    return (
        <div>
            <Header />
            <BannerAndFeatures />
            <PopularCategories />
            <ProductsView products={products.slice(0,10)} heading="Popular Products"/>
            <SaleImages />
            <DiscountBanner />
            <HotDeals />
            <ProductsView products={products.slice(0,10)} heading="Popular Products"/>
           <LatestNews />
           <TestimonialCard />
           <Follow />
            <Footer />
        </div>
    )
}