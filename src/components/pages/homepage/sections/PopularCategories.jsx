import { supabase } from '@/supabase';
import { useEffect, useState } from 'react';

const PopularCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Fetch categories from Supabase
        const { data, error } = await supabase
          .from('popular_categories') // Make sure this matches your table name
          .select('*')
          .order('id'); // Ensure sorting by ID
        // More detailed logging
        console.log('Supabase Response:', {
          data: data,
          dataLength: data?.length,
          error: error,
        });

        if (error) throw error;

        setCategories(data || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 w-full max-w-[1320px] font-poppins">
        <div className="text-center">Loading categories...</div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 w-full max-w-[1320px] font-poppins">
        <div className="text-center text-red-500">
          Failed to load categories: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="conatiner mx-auto px-4 py-8 w-full max-w-[1320px] font-poppins">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Popular Categories</h2>
        {/* <Link
          to="/categories"
          className="text-green-500 hover:text-green-600 flex items-center"
        >
          View All
          <img src="/images/arrow.svg" className="pl-1"></img>
        </Link> */}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="border rounded-lg p-4 hover:shadow-lg hover:border-green-500 transition-duration-300 ease-in-out"
          >
            <img
              src={category.image_urls}
              alt={category.title}
              className="w-full h-32 object-cover mb-2 rounded"
            ></img>
            <p className="text-center">{category.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PopularCategories;
