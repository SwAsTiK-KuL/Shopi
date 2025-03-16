import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./navbar";

function MyOrder() {
  const location = useLocation();
  const navigate = useNavigate();
  const [order, setOrder] = useState(location.state?.cart || {});

  useEffect(() => {
    if (!location.state?.cart) {
      navigate("/"); // Redirect to home if no order data
    }
  }, [location, navigate]);

  const totalPrice = Object.values(order).reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 0),
    0
  );

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-4 p-6 relative z-[100]">
        {/* Header with Back Arrow */}
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => navigate("/")} className="-ml-28 text-2xl  hover:text-gray-600">
            &#x3c;
          </button>
          <h2 className="text-lg ml-28">My Order</h2>
        </div>

        {Object.values(order).length > 0 ? (
          <div className="rounded-lg p-2 border-black  relative z-50">
            {Object.values(order).map((item) => (
              <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                {/* Product Image */}
                <img
                  src={item.image || item.images?.[0] || "https://via.placeholder.com/150"}
                  alt={item.name || "Product Image"}
                  className="w-16 h-16 object-cover rounded-lg"
                />

                <div className="flex-1">
                <h3 className="text-sm">{item.name || item.title || "No Name"}</h3>
                <p className="text-sm font-semibold">
                    ${item.price?.toFixed(2) || "0.00"}</p>
                <div className="bg-gray-200 text-black px-2 py-1 w-7 self-center     rounded-md">
                    <p>{item.quantity || "1"}</p>
                </div>

                </div>

              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No items in order.</p>
        )}
      </div>
    </>
  );
}

export default MyOrder;
