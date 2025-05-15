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
      <div className="container mx-auto px-4 py-6 sm:py-8 w-full max-w-[1320px] font-poppins">
        <div className="text-center">Loading news...</div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="container mx-auto px-4 py-6 sm:py-8 w-full max-w-[1320px] font-poppins">
        <div className="text-center text-red-500">
          Failed to load news: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="font-poppins mx-auto px-4 py-6 sm:py-8 w-full max-w-[1320px]">
      <h2 className="text-lg sm:text-xl md:text-2xl text-center text-black font-bold mb-4 sm:mb-6 md:mb-8">
        Latest News
      </h2>

      {/* For smaller screens - vertical scrolling carousel */}
      <div className="block md:hidden">
        <div className="flex overflow-x-auto space-x-3 pb-4 snap-x snap-mandatory scrollbar-hide">
          {news.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 snap-center w-[280px] sm:w-[320px]"
            >
              <div className="relative">
                <img
                  src={item.images}
                  alt={item.title}
                  className="h-40 sm:h-44 w-full object-cover"
                />
              </div>
              <div className="p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2 truncate">
                  {item.category} | {item.author} | {item.comments} Comments
                </p>
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-[#2C742F] line-clamp-2">
                  {item.title}
                </h3>
                <a
                  href={`/news/${item.id}`}
                  className="text-[#00B207] text-sm sm:text-base flex items-center hover:underline"
                >
                  Read More
                  <img
                    src="/images/arrow.svg"
                    alt="arrow"
                    className="ml-1 w-3 h-3 sm:w-4 sm:h-4"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* For medium and larger screens - grid layout */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
        {news.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col"
          >
            <div className="relative">
              <img
                src={item.images}
                alt={item.title}
                className="h-48 w-full object-cover"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <p className="text-sm text-gray-500 mb-2 truncate">
                {item.category} | {item.author} | {item.comments} Comments
              </p>
              <h3 className="text-lg font-semibold mb-2 text-[#2C742F] line-clamp-2 flex-grow">
                {item.title}
              </h3>
              <a
                href={`/news/${item.id}`}
                className="text-[#00B207] flex items-center hover:underline mt-2"
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
