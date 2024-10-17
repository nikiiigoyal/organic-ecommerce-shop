const products = [
    {id: 1,
     name: "Green Apple",
     price: 14.99,
     oldPrice: 20.99,
     image: "/src/components/images/popularproduct.png",
     rating: 4,
     sale: 50
 },
 {id: 2,
    name: "Fresh Indian malta",
    price: 20.00,
    image: "/src/components/images/popularproduct.png",
    rating: 4
   },
{id: 3,
    name: "Chinese cabbage",
    price: 12.00,
    image: "/src/components/images/popularproduct.png",
    rating: 4,
   featured: true
},
{id: 4,
    name: "Green Lettuce",
    price: 9.00,
    image: "/src/components/images/popularproduct.png",
    rating: 4
   },
   {id: 5,
    name: "Eggplant",
    price: 34.00,
    image: "/src/components/images/popularproduct.png",
    rating: 4
   },
   {id: 6,
    name: "Big Potatoes",
    price: 20.00,
    image: "/src/components/images/popularproduct.png",
    rating: 4
   },
   {id: 7,
    name: "Corn",
    price: 20.00,
    image: "/src/components/images/popularproduct.png",
    rating: 4
   },
   {id: 8,
    name: "Fresh Cauliflower",
    price: 12.00,
    image: "/src/components/images/popularproduct.png",
    rating: 4
   },
   {id: 9,
    name: "Green Capsicum",
    price: 9.00,
    oldPrice: 20.99,
    image: "/src/components/images/popularproduct.png",
    rating: 4,
    sale: 50
   },
   {id: 10,
    name: "Green chilli",
    price: 34.00,
    image: "/src/components/images/popularproduct.png",
    rating: 4
   },
]

const StarRating = ({ rating }) => (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
  
  const ProductCard = ({ product }) => {
    return (
      <div className={`border rounded-lg p-4 relative ${product.featured ? 'border-green-500' : ''}`}>
        {product.sale && (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
            Sale {product.sale}%
          </span>
        )}
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
        {product.featured && (
          <div className="absolute top-2 right-2 flex flex-col space-y-2">
            <button className="p-2 bg-white rounded-full hover:bg-gray-100">
              <img src="/src/components/images/Heart.png" alt="Favorite" className="w-5 h-5" />
            </button>
            <button className="p-2 bg-white rounded-full hover:bg-gray-100">
              <img src="/src/components/images/eye.png" alt="View" className="w-5 h-5" />
            </button>
          </div>
        )}
        <h3 className="font-semibold mb-2">{product.name}</h3>
        <div className="mb-2">
          <span className="font-semibold text-[#1A1A1A]">${product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <span className="text-gray-400 line-through ml-2">${product.oldPrice.toFixed(2)}</span>
          )}
        </div>
        <div className="flex justify-between items-center">
        <StarRating rating={product.rating} />
        <div className="mt-4 flex justify-between items-center">
          <button className={`p-2 rounded-full ${product.featured ? 'bg-green-500 text-white' : 'border border-gray-300'}`}>
            {product.featured ? (
              <img src="/src/components/images/addToCart.png" alt="Add to cart" className="w-5 h-5 " />
            ) : (
              <img src="/src/components/images/shoppingBag.png" alt="Add to cart" className="w-5 h-5" />
            )}
          </button>
        </div>
        </div>
      </div>
    );
  };
  
  const PopularProducts = () => {
    return (
      <div className="container w-[80%] mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Popular Products</h2>
          <a href="/products" className="text-green-500 hover:text-green-600 flex items-center">
            View All
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  };
  
  export default PopularProducts;
