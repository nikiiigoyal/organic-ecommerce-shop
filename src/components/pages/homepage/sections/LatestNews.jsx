import { supabase } from '@/supabase';
import { useEffect, useState } from 'react';

const LatestNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Fetch categories from Supabase
        const { data, error } = await supabase
          .from('latest_news') // Make sure this matches your table name
          .select('*')
          .order('id'); // Ensure sorting by ID
        // More detailed logging
        console.log('Supabase Response:', {
          data: data,
          dataLength: data?.length,
          error: error,
        });

        if (error) throw error;

        setNews(data || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
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
    <div className="font-poppins mx-auto px-4 py-8 w-full max-w-[1320px]">
      <h2 className="text-xl text-center text-black font-bold mb-8">
        Latest News
      </h2>
      <div className="flex justify-around overflow-x-auto space-x-4 pb-4 mx-auto">
        {news.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 w-80"
          >
            <div className="relative">
              <img
                src={item.images}
                alt={item.title}
                className="h-48 w-full object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-2">
                {item.category} | {item.author} | {item.comments} Comments
              </p>
              <h3 className="text-lg font-semibold mb-2 text-[#2C742F]">
                {item.title}
              </h3>
              <a
                href={`/news/${item.id}`}
                className="text-[#00B207] flex items-center hover:underline"
              >
                Read More
                <img
                  src="/images/arrow.svg"
                  alt="arrow"
                  className="ml-1 w-4 h-4"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
