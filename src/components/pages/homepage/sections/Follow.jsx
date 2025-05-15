const Follow = () => {
  return (
    <div className="w-full max-w-[1320px] mx-auto font-poppins px-4 pb-5 sm:pb-8 md:pb-10">
      {/* Brand logos section */}
      <div className="flex flex-wrap justify-center sm:justify-between items-center gap-4 sm:gap-2 py-6 sm:py-8 md:py-10 lg:py-14">
        {/* Use array mapping for better responsiveness and maintenance */}
        {[
          { src: '/images/steps.png', alt: 'steps' },
          { src: '/images/mango-1.png', alt: 'mango-1' },
          { src: '/images/food.png', alt: 'food' },
          {
            src: '/images/bookoff-corporation-logo.png',
            alt: 'bookoff-corporation-logo',
          },
          { src: '/images/series.png', alt: 'series' },
        ].map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-6 sm:h-8 md:h-10 lg:h-[32px] object-contain"
          />
        ))}
      </div>

      {/* Instagram section */}
      <div className="mt-4 sm:mt-6">
        <h2 className="text-black text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-center font-bold pb-4 sm:pb-6 md:pb-8 lg:pb-10">
          Follow us on Instagram
        </h2>

        {/* Instagram posts grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
          {/* Use array mapping for consistency and responsive design */}
          {[
            { src: '/images/instaPost.png', alt: 'Instagram post 1' },
            { src: '/images/InstagramPost.png', alt: 'Instagram post 2' },
            { src: '/images/instaPost.png', alt: 'Instagram post 3' },
            { src: '/images/instaPost.png', alt: 'Instagram post 4' },
            { src: '/images/instaPost.png', alt: 'Instagram post 5' },
            { src: '/images/instaPost.png', alt: 'Instagram post 6' },
          ].map((post, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-xl border"
            >
              <img
                src={post.src}
                alt={post.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Follow;
