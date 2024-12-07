/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { SaleBanner } from './Salebanner';
import { Filters } from './Filters';
// import { products } from "../../../constants";
import ProductCard from '../homepage/sections/ProductCard';
import { useEffect, useState } from 'react';
import { supabase } from '@/supabase';

export function ShopPage({ onQuickView, addToWishlist }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('grocery_products')
          .select('*');
        if (error) {
          throw error;
        }
        data.forEach((product) => {
          console.log('Product Image Details:');
          console.log('Image URL:', product.image);
          console.log('Image Type:', typeof product.image);
          console.log('Is Array:', Array.isArray(product.image));
        });
        setProducts(data || []);
        setLoading(false);
      } catch (err) {
        console.log('error fetching products', err);
        setError(err.message);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (error) {
    return <div>Error LOading Products...{error}</div>;
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
          {loading ? (
            <>Loading...</>
          ) : (
            products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
                addToWishlist={addToWishlist}
              />
            ))
          )}
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
  );
}
