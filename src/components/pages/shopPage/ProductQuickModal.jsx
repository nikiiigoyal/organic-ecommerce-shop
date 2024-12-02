/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"


export const QuickViewModal = ({product , isOpen, onClose}) => {
    console.log("QuickViewModal received product:", product); // Check if the product data is passed correctly
    console.log("QuickViewModal open status:", isOpen); 

    const [quantity , setQuantity] = useState(5);

    // hands escape key press
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown',handleEscape)
        return () => window.removeEventListener('keydown',handleEscape);
    },[onClose])
    // prevent body scroll

    useEffect (() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    },[isOpen]);

    if (!isOpen || !product){
        console.log("QuickViewModal returning null, modal not visible")
         return null;
    }
return (
    <>
    {/* overlay */}
    <div className="font-poppins fixed inset-0 flex items-center justify-center z-50 ">
    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

{/* modal */}
<div className="flex min-h-full items-center justify-center p-">
    <div className="relative bg-white w-full max-w-[90%] rounded-lg">
   {/* close button */}
   <button className="absolute right-4 top-[-32px] hover:bg-gray-100 bg-black rounded-full z-10" onClick={onClose}><img src="/images/closeicon.svg"></img></button>

   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
    {/* left side image gallry */}
    <div className="flex flex-row-reverse justify-end">
                                <div className="relative">
                                    <img
                                        src={product.image_urls}
                                        alt={product.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="flex gap-2 flex-col">
                                    {[1, 2, 3, 4].map((num) => (
                                        <button 
                                            key={num} 
                                            className="w-20 h-20 border rounded-lg p-1 hover:border-green-500"
                                        >
                                            <img
                                                src={product.image}
                                                alt={`View ${num}`}
                                                className="w-full h-full object-contain"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>
{/* right side  */}
<div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">{product.name}</h2>
                  <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">
                    In Stock
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Star Rating */}
                  <div className="flex text-yellow-400">
                    {'★'.repeat(4)}{'☆'.repeat(1)}
                  </div>
                  <span className="text-gray-600 text-sm">4 Review</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-600 text-sm">SKU: {product.sku}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-green-600">
                    ${product.price}
                  </span>
                  {product.oldPrice && (
                    <>
                      <span className="text-gray-400 line-through">
                        ${product.oldPrice}
                      </span>
                      <span className="bg-[#EA4B481A] text-[#EA4B48] text-sm p-1 rounded-full">
                        {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% Off
                      </span>
                    </>
                  )}
                </div>

                <div className="flex flex-row text-sm justify-between">
                  <div className="flex items-center gap-2 mb-2">
                  <span className="text-gray-600">Brand:</span>
                    
                    <img 
                      
                      src={product.brandImage} 
                      alt={product.brand}
                      className="h-8 w-8 object-contain"
                    />
                    
                  </div>
                  <div className="flex items-center gap-4 ">
                  <span className="text-gray-600">Share item:</span>
                  <div className="flex">
                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center ml-[15px]">
                            <img src="/images/fb.png"></img>
                        </a>
                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <img src="/images/github.png"></img>
                        </a>
                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <img src="/images/psocial.png"></img>
                        </a>
                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <img src="/images/insta.png"></img>
                        </a>
                    </div>
                    </div>
                </div>
                <div>
                  <p className="text-gray-600">{product.description}</p>
                </div>
                

                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded">
                    <button 
                      className="px-3 py-2 hover:bg-gray-50"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                      className="w-16 text-center border-x py-2"
                    />
                    <button 
                      className="px-3 py-2 hover:bg-gray-50"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button className="flex-1 bg-green-500 text-white py-2 rounded hover:bg-green-600">
                    Add to Cart
                  </button>
                  <button className="p-2 border rounded hover:bg-gray-50">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-900 text-sm font-bold">Category:</span>
                    <span className="text-sm text-gray-500">{product.category}</span>
                  </div>
                  <div className="flex justify-normal items-center gap-2">
                    <span className="text-gray-900 text-sm font-bold">Tag:</span>
                    <div className="flex items-center gap-2">
                      {product.tags?.map((tag) => (
                        <span key={tag} className="text-gray-500">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
    </div>

    </>
)
}