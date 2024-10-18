const LatestNews = () => {
    const news =  [
    {
      image: "/src/components/images/news.png",
      date: "18",
      month: "Nov",
      category: "Food",
      author: "Admin",
      comments: "65",
      title: "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
      link: "#"
},
{
    image: "/src/components/images/news.png",
    date: "29",
    month: "Nov",
    category: "Food",
    author: "Admin",
    comments: "65",
    title: "Eget lobortis lorem lacinia. Vivamus pharetra semper,",
    link: "#"
},
{
    image: "/src/components/images/news.png",
    date: "21",
    month: "Nov",
    category: "Food",
    author: "Admin",
    comments: "65",
    title: "Maecenas blandit risus elementum mauris malesuada.",
    link: "#"
},
];
return (

    <div className="font-poppins mx-auto px-4 py-8  w-[80%]">
  <h2 className="text-xl text-center text-black font-bold mb-8 ">Latest News</h2>
  <div className="flex justify-around overflow-x-auto space-x-4  pb-4 mx-auto">
  {news.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 w-80">
                        <div className="relative">
                            <img src={item.image} alt={item.title} className="h-48 object-cover" />
                            <div className="absolute bottom-4 left-2 bg-white rounded-lg px-2 py-1 text-center">
                                <p className="font-bold text-lg">{item.date}</p>
                                <p className="text-xs uppercase">{item.month}</p>
                            </div>
                        </div>
                        <div className="p-4">
                            <p className="text-sm text-gray-500 mb-2">
                                {item.category} | By {item.author} | {item.comments} Comments
                            </p>
                            <h3 className="text-lg font-semibold mb-2 text-[#2C742F]">{item.title}</h3>
                            <a href={item.link} className="text-[#00B207] flex items-center hover:underline">
                                Read More 
                                <img src="/src/components/images/arrow.svg" alt="arrow" className="ml-1 w-4 h-4" />
                            </a>
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
)
}

export default LatestNews