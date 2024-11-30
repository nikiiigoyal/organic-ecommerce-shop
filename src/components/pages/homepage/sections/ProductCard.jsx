/* eslint-disable react/prop-types */
import { supabase } from "@/supabase";
import { useEffect,useState } from "react";
const ProductCard = ({ product, onQuickView ,addToWishlist }) => {
    const [data, setData] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

  // Fetch data
  useEffect (() => {
    const fetchData = async () => {
        try {
          const { data, error } = await supabase
            .from('grocery_products')
            .select('*')
            
          if (error) throw error
          setData(data)
        } catch (err) {
          setError(err.message)
        } finally {
          setLoading(false)
        }
      }
      fetchData()
     
  },[])
  console.log(data)
    
    const handleAddToWishlist = () => {
        addToWishlist(product)
        console.log("clickeddd")
    }
    return (
        <div key={product.id} className="border p-4 rounded shadow-md relative flex flex-col hover:border-green-500 transition duration-300">
            <div className="relative group">
                <img src={product.image} alt={product.name} className="mb-4 transition-transform duration-300 group-hover:scale-105" />

                {/* Heart and eye icons */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 flex flex-col justify-around pt-5">
                    <button  onClick={handleAddToWishlist}>
                    <img src="/images/Heart.png" alt="favorite" className="w-6 h-6"
                   
                     />
                    </button>

                    <button 
                        onClick={() => onQuickView(product)} 
                        className="text-white py-2 rounded hover:scale-150 transition duration-200"
                    >
                        <img src="/images/eye.png" alt="view" className="w-6 h-6" />
                    </button>
                </div>
            </div>

            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-[14px] text-gray-700 font-semibold mt-2">{product.name}</h2>
                    <div className="flex items-center space-x-2">
                        <p className="text-[#1A1A1A]">${product.price.toFixed(2)}</p>
                        {product.oldPrice && (
                            <p className="line-through text-gray-400">${product.oldPrice.toFixed(2)}</p>
                        )}
                    </div>
                    {product.sale && (
                        <span className="text-white text-center absolute top-2 left-2 bg-[#EA4B48] p-1">{product.sale}% OFF</span>
                    )}
                    <div className="flex items-center mt-2">
                        <span className="text-yellow-500">{'★'.repeat(product.rating)}</span>
                    </div>
                </div>
                
                <div className="relative group-hover:bg-green-500 p-1 rounded-full transition-all duration-300">
                    <img src="/images/addToCart.png" alt="add to cart" className="w-8 h-8 group-hover:opacity-90" />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
