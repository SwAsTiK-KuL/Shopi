import { useState, useEffect } from "react";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";
import MyOrderPopup from "./MyOrderPopUp";

function ProductsList({ products, selectedCategory, searchQuery, loading, error }) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [cart, setCart] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((product) => product.category.name === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, searchQuery]);

  const toggleCart = (product) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (!newCart[product.id]) {
        newCart[product.id] = { ...product, quantity: 1 };
      } else {
        delete newCart[product.id];
      }
      return newCart;
    });

    setIsPopupOpen(true);
  };

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <div className="container mx-auto p-4 flex w-3/4 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex-grow">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden relative w-full h-64 cursor-pointer"
            >
              <div className="relative h-3/5">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-black text-white text-xs px-3 py-1 rounded-lg">
                  {product.category.name}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleCart(product);
                  }}
                  className={`absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-md 
                  ${cart[product.id] ? "bg-green-500 text-white" : "hover:bg-gray-200"}`}
                >
                  {cart[product.id] ? (
                    <CheckIcon className="h-5 w-5 text-white" />
                  ) : (
                    <PlusIcon className="h-5 w-5 text-black" />
                  )}
                </button>
              </div>

              <div className="p-3 flex justify-between items-end h-2/5">
                <h2 className="text-sm font-semibold">{product.title}</h2>
                <p className="text-black font-bold">${product.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No products found.</p>
        )}
      </div>

      <MyOrderPopup
        cart={cart}
        setCart={setCart}
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
}

export default ProductsList;
