import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import MyOrderPopup from "./MyOrderPopup";

function Navbar({ setSelectedCategory }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [cart, setCart] = useState([]);

  return (
    <div className="bg-white shadow-md p-4 w-full">
      <div className="container mx-auto flex items-center justify-between ">
        <h1 className="text-xl font-bold text-black hover:text-blue-600 -ml-20">
          <a href="/">Shopi</a>
        </h1>

        <nav className="flex-1 flex justify-center mr-40">
          <ul className="flex space-x-6 text-black text-sm mr-96">
            {["All", "Clothes", "Electronics", "Furniture", "Toys"].map((category) => (
              <li
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="hover:text-blue-600 cursor-pointer"
              >
                {category}
              </li>
            ))}
          </ul>
        </nav>

        <nav>
          <ul className="flex items-center space-x-6 text-black text-sm -mr-16">
            <li className="text-gray-600">userintheapp@test.com</li>
            <li className="hover:text-blue-600 cursor-pointer"><a href="/EmptyBox">My Orders </a></li>
            <li className="hover:text-blue-600 cursor-pointer">
              <a href="/my-account">My Account</a>
            </li>
            <li
              className="flex items-center space-x-1 hover:text-blue-600 cursor-pointer"
              onClick={() => setIsPopupOpen(true)}
            >
              <ShoppingCartIcon className="h-5 w-5" />
            </li>
          </ul>
        </nav>
      </div>

      {isPopupOpen && (
        <MyOrderPopup
          cart={cart}
          setCart={setCart}
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
        />
      )}
    </div>
  );
}

export default Navbar;
