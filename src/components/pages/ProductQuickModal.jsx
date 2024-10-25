/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"

// eslint-disable-next-line react/prop-types
export const QuickViewModal = ({products , isOpen, onClose}) => {

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

    if (!isOpen || !products) return null;
return (
    <>
    {/* overlay */}
    <diV className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={onClose}>
</diV>
{/* modal */}
<div className="flex min-h-full items-center justify-center p-4">
    <div className="relative bg-white w-full max-w-4xl rounded-lg">
   {/* close button */}
   <button className="absolute right-4 top-4 p-1 hover:bg-gray-100 rounded-full z-10" onClick={onClose}><img src="closeicon.svg"></img></button>

   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
    {/* left side image gallry */}
    <div className="space-y-4">
                                <div className="aspect-square relative">
                                    <img
                                        src={products.image}
                                        alt={products.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4].map((num) => (
                                        <button 
                                            key={num} 
                                            className="w-20 h-20 border rounded-lg p-1 hover:border-green-500"
                                        >
                                            <img
                                                src={products.image}
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
                  <h2 className="text-2xl font-semibold">{products.name}</h2>
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
                  <span className="text-gray-600 text-sm">SKU: {products.sku}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-green-600">
                    ${products.price}
                  </span>
                  {products.oldPrice && (
                    <>
                      <span className="text-gray-400 line-through">
                        ${products.oldPrice}
                      </span>
                      <span className="text-red-500 text-sm">
                        {Math.round(((products.oldPrice - products.price) / products.oldPrice) * 100)}% Off
                      </span>
                    </>
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <img 
                      
                      src={products.brandImage} 
                      alt={products.brand}
                      className="h-8 w-8 object-contain"
                    />
                    <span className="text-gray-600">Brand:</span>
                    <span className="font-medium">{products.brand}</span>
                  </div>
                  <p className="text-gray-600">{products.description}</p>
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

                <div className="flex items-center gap-4 pt-4 border-t">
                  <span className="text-gray-600">Share item:</span>
                  {['Facebook', 'Twitter', 'Pinterest', 'Instagram'].map((social) => (
                    <button 
                      key={social}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      {/* Simple letter icons - replace with proper social icons if needed */}
                      {social[0]}
                    </button>
                  ))}
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">Category:</span>
                    <span>{products.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">Tags:</span>
                    <div className="flex gap-2">
                      {products.tags?.map((tag) => (
                        <span key={tag} className="text-gray-600">
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

    </>
)
}