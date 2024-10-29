import { Link } from "react-router-dom";
import { SaleBanner } from "./Salebanner";
import { Filters } from "./Filters";
import { products } from "../../../constants";
import ProductCard from "../homepage/sections/ProductCard";
import { useState } from "react";
import { QuickViewModal } from "../shared/ProductQuickModal";
 

export function ShopPage () {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isQuickViewOpen ,setIsQuickViewOpen] = useState(false);

    
    const handleQuickView = (product) => {
        console.log("Quick View clicked for:", product); 
        setSelectedProduct(product)
        setIsQuickViewOpen(true)
        console.log("Modal open status:", isQuickViewOpen);
    }
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
            onQuickView={handleQuickView}
            />
          ))}
        </div>
        </div>
        {isQuickViewOpen && (
    <QuickViewModal 
        product={selectedProduct}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)} 
    />
)}
        </>
    )
}