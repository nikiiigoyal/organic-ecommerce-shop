/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { SaleBanner } from "./Salebanner";
import { Filters } from "./Filters";
import { products } from "../../../constants";
import ProductCard from "../homepage/sections/ProductCard";

 

export function ShopPage ({onQuickView}) {
    
    return (
        <>
        <div className="container mx-auto px-4 py-2">
      {/* Breadcrumb */}
      <div className="">
        <Link to="/">Home</Link> / <span>Vegetables</span>
      </div>
      </div>
        <SaleBanner />
        <Filters />
       
        <div className="container mx-auto px-4 py-8 w-[80%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} 
            product={product} 
            onQuickView={onQuickView}
            />
          ))}
        </div>
        </div>
        {/* {isQuickViewOpen && (
    <QuickViewModal 
        product={selectedProduct}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)} 
    />
)} */}
        </>
    )
}