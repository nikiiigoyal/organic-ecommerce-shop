const TestimonialCard = () => {
const testimonials = [
{
    id: 1,
    text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    name: "Robert Fox",
    role: "Customer",
    avatar: "/images/avatar.png"
  },
  {
    id: 2,
    text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    name: "Dianne Russell",
    role: "Customer",
    avatar: "/images/avatar.png"
  },
  {
    id: 3,
    text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    name: "Eleanor Pena",
    role: "Customer",
    avatar: "/images/avatar.png"
  }
]
return (
<div className="w-[80%] font-poppins mx-auto px-4 py-12 bg-[#F2F2F2]">
    <div className="flex justify-between">
    <h2 className="text-black text-xl font-bold  mb-8">
        Client testimonials
    </h2>
    <img src="/images/bothArrow.png"className="h-[40px]"></img>
    </div>
    <div className="flex space-x-6 overflow-x-auto rounded-md pb-4">
    {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col min-w-[300px] max-w-[400px]">
            <div className="mb-5"><img src="/images/comma.png" className=""></img></div>
            <p className="text-gray-600 mb-6 flex-grow">{testimonial.text}</p>
            <div className="flex items-center">
              <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full mr-4" />
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
              <div className="ml-auto">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-orange-400">★</span>
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>
</div>
)
}
export default TestimonialCard;