import React from "react";

const Page = () => {
  const famousModel = [
    {
      id: 1,
      image: "https://cdn.shopify.com/s/files/1/2337/7003/files/summer-lawn-174678432260051.png?width=280",
      description: "Summer Lawn",
    },
    {
      id: 2,
      image: "https://cdn.shopify.com/s/files/1/2337/7003/files/pishwas-174662769035245.png?width=280",
      description: "Pishwas Dress",
    },
    {
      id: 3,
      image: "https://cdn.shopify.com/s/files/1/2337/7003/files/Lehenga-174713645604897.png?width=560",
      description: "Designer Lehenga",
    },
    {
      id: 4,
      image: "https://cdn.shopify.com/s/files/1/2337/7003/files/Mens_Western-174733948526998.png?width=280",
      description: "Men's Western",
    },
    {
      id: 5,
      image: "https://cdn.shopify.com/s/files/1/2337/7003/files/pishwas-174662769035245.png?width=280",
      description: "Traditional Pishwas",
    },
    {
      id: 6,
      image: "https://cdn.shopify.com/s/files/1/2337/7003/files/Lehenga-174713645604897.png?width=560",
      description: "Embroidered Lehenga",
    },
    {
      id: 7,
      image: "https://cdn.shopify.com/s/files/1/2337/7003/files/summer-lawn-174678432260051.png?width=280",
      description: "Printed Lawn",
    },
    {
      id: 8,
      image: "https://cdn.shopify.com/s/files/1/2337/7003/files/Mens_Western-174733948526998.png?width=280",
      description: "Modern Menswear",
    },
  ];

  return (
    <div className="p-6">
      {/* Hero Banner */}
      <div className="w-full max-w-5xl mx-auto mb-8">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-orange-400 to-orange-500 h-64">
          <img
            src="https://cdn.shopify.com/s/files/1/2337/7003/files/free-shipping-pk-mobile_1_-174488988161642.png?width=500"
            alt="Special Offer"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-2">Special Offer</h2>
              <p className="text-lg">Free shipping on all orders!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Collections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {famousModel.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.description}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                    {item.description}
                  </h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">PKR 2,999</span>
                    <button className="px-3 py-1 bg-black text-white text-xs rounded hover:bg-gray-800 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;