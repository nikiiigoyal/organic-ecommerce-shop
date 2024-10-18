const categories = [
    {
        id: 1,
        name: "Fresh Fruit",
        image: "/src/components/images/popularproduct.png"
    },
    {
        id: 2,
        name: "Fresh Vegetables",
        image: "/src/components/images/popularproduct.png"
    },
    {
        id: 3,
        name: "Meat & Fish",
        image: "/src/components/images/popularproduct.png"
    },
    {
        id: 4,
        name: "Snacks",
        image: "/src/components/images/popularproduct.png"
    },
    {
        id: 5,
        name: "Beverages",
        image: "/src/components/images/popularproduct.png"
    },
    {
        id: 6,
        name: "Beauty & Health",
        image: "/src/components/images/popularproduct.png"
    },
    {
        id: 7,
        name: "Bread & Bakery",
        image: "/src/components/images/popularproduct.png"
    },
    {
        id: 8,
        name: "Baking needs",
        image: "/src/components/images/popularproduct.png"
    },
    {
        id: 9,
        name: "Cooking",
        image: "/src/components/images/popularproduct.png"
    },
    {
        id: 10,
        name: "Diabletic Food",
        image: "/src/components/images/popularproduct.png"
    },
    {
        id: 11,
        name: "Dish Detergent",
        image: "/src/components/images/popularproduct.png"
    },
    {
        id: 12,
        name: "Oil",
        image: "/src/components/images/popularproduct.png"
    },
];

const PopularCategories = () => {
return (
    <div className="conatiner mx-auto px-4 py-8 w-[80%] font-poppins">
       <div className="flex justify-between items-center mb-6">
   <h2 className="text-2xl font-bold">Popular Categories</h2>
   <a href="/categories" className="text-green-500 hover:text-green-600 flex items-center">
          View All
          <img src="/src/components/images/arrow.svg" className="pl-1"></img>
        </a>
       </div>
       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
            <div key={category.id} className="border rounded-lg p-4 hover:shadow-lg hover:border-green-500 transition-duration-300 ease-in-out">
                <img src={category.image} alt={category.name}className="w-full h-32 object-cover mb-2 rounded"></img>
                <p className="text-center">{category.name}</p>
            </div>
        ))}
       </div>
    </div>
)
}
export default PopularCategories;