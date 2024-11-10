/* eslint-disable react/prop-types */
import BannerAndFeatures from "./Banner";
import PopularCategories from "./PopularCategories";
import { products } from "../../../../constants";
import SaleImages from "./SaleImages";
import HotDeals from "./HotDeals";
import LatestNews from "./LatestNews";
import TestimonialCard from "./Testimonials";
import Follow from "./Follow";

import DiscountBanner from "./DiscountBanner";
import ProductsView from "./ProductsView";
import { SimplePopup } from "../../NewsLetterPopUp";

export default function Homepage ({onQuickView, addToWishlist}) {
    return (
        <div>
            
            {/* <Header /> */}
            <SimplePopup />
            <BannerAndFeatures />
            <PopularCategories />
            <ProductsView products={products.slice(0,10)} heading="Popular Products" onQuickView={onQuickView}
             addToWishlist={addToWishlist}/>
            <SaleImages />
           <DiscountBanner />
            <HotDeals />
            <ProductsView products={products.slice(0,10)} heading="Popular Products" onQuickView={onQuickView}
              addToWishlist={addToWishlist}
             />
           <LatestNews />
           <TestimonialCard />
           <Follow />
            {/* <Footer /> */}
        </div>
    )
}