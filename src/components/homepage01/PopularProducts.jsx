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

const Productcard = ({ product }) => {
    return (
  <div className={`border rounded-lg p-4 relative ${product.featured ? "border-green-500" : ""}`}>

  </div>       
    )
}