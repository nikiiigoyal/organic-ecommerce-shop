import { useState, useEffect } from 'react';
import { supabase } from './supabase';
import { useLocation } from 'react-router-dom';
import ProductCard from './components/pages/homepage/sections/ProductCard';

export function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();

  // Access the passed state
  const searchResults = location.state?.searchResults;

  useEffect(() => {
    if (searchResults) {
      setData(searchResults);
    }
  }, [searchResults]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const { data: tableData, error } = await supabase
        .from('grocery_products')
        .select('*');

      if (error) throw error;

      setData(tableData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Data from Supabase</h1>
      <div>
        <div className="grid grid-cols-5 gap-4">
          {data.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              onQuickView={() => {
                console.log('hi');
              }}
              addToWishlist={() => {
                console.log('hi');
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
