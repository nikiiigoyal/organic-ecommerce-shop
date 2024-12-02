/* eslint-disable react/prop-types */
import BannerAndFeatures from "./Banner";
import PopularCategories from "./PopularCategories";
// import { products } from "../../../../constants";
import SaleImages from "./SaleImages";
import HotDeals from "./HotDeals";
import LatestNews from "./LatestNews";
import TestimonialCard from "./Testimonials";
import Follow from "./Follow";

import DiscountBanner from "./DiscountBanner";
import ProductsView from "./ProductsView";
import { SimplePopup } from "../../NewsLetterPopUp";
import { useEffect, useState } from "react";
import { supabase } from "@/supabase";

export default function Homepage ({onQuickView, addToWishlist}) {
    const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from("grocery_products")
          .select("*");

        if (error) throw error;

        setProducts(data || []);
        setLoading(false);
      } catch (err) {
        console.log("Error fetching products", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error loading products: {error}</div>;

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