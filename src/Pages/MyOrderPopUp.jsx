import { useEffect } from "react";
import { XCircleIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom"; 

function MyOrderPopup({ cart, setCart, isOpen, onClose }) {
  const navigate = useNavigate(); 

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto"; 
    }
  }, [isOpen]);

  const updateQuantity = (productId, change) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[productId]) {
        newCart[productId].quantity += change;
        if (newCart[productId].quantity <= 0) {
          delete newCart[productId]; 
        }
      }
      return { ...newCart };
    });
  };

  const totalPrice = Object.values(cart).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`fixed top-20 right-0 w-96 h-5/6 bg-white shadow-lg transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 ">
        <h2 className="text-xl font-semibold">My Order</h2>
        <button onClick={onClose}>
          <XCircleIcon className="h-6 w-6 text-gray-600 hover:text-red-500" />
        </button>
      </div>

      <div className="p-4 space-y-4 overflow-y-auto max-h-[70vh]">
        {Object.values(cart).length > 0 ? (
          Object.values(cart).map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <img
                src={item.image || item.images?.[0]} 
                alt={item.name || item.title}
                className="w-16 h-16 object-cover rounded-lg"
                />

              <div className="flex-1">
                <h3 className="text-sm font-medium">{item.name}</h3>
                <p className="text-sm font-semibold">${item.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="p-1 bg-gray-200 rounded-full hover:bg-gray-300"
                >
                  <MinusIcon className="h-5 w-5 text-black" />
                </button>
                <span className="text-md font-bold">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="p-1 bg-green-500 text-white rounded-full hover:bg-green-600"
                >
                  <PlusIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500"></p>
        )}
      </div>

      <div className="absolute bottom-0 w-full p-4 border-t">
        <div className="flex justify-between text-lg font-semibold mb-2">
          <span>Total:</span>
          <span>${totalPrice}</span>
        </div>
        <button
          onClick={() => {
            console.log("Navigating with cart:", cart); 
            navigate("/my-order", { state: { cart } }); 
          }}
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default MyOrderPopup;
