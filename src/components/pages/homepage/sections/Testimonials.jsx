const TestimonialCard = () => {
  const testimonials = [
    {
      id: 1,
      text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
      name: 'Robert Fox',
      role: 'Customer',
      avatar: '/images/avatar.png',
    },
    {
      id: 2,
      text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
      name: 'Dianne Russell',
      role: 'Customer',
      avatar: '/images/avatar.png',
    },
    {
      id: 3,
      text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
      name: 'Eleanor Pena',
      role: 'Customer',
      avatar: '/images/avatar.png',
    },
  ];

  return (
    <div className="w-full max-w-[1320px] font-poppins mx-auto px-4 sm:px-6 py-8 sm:py-12 bg-[#F2F2F2]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
        <h2 className="text-black text-lg sm:text-xl font-bold">
          Client testimonials
        </h2>
        <img
          src="/images/bothArrow.png"
          alt="Navigation arrows"
          className="h-8 sm:h-10"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col h-full"
          >
            <div className="mb-4">
              <img
                src="/images/comma.png"
                alt="Quote icon"
                className="w-6 h-6"
              />
            </div>
            <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 flex-grow">
              {testimonial.text}
            </p>
            <div className="flex items-center">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-3 sm:mr-4"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-sm sm:text-base">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm">
                  {testimonial.role}
                </p>
              </div>
              <div className="ml-2">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="text-orange-400 text-sm sm:text-base"
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
