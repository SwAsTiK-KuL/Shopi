import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emptyCartImage from "../assets/Empty Box.png"; // Ensure this image exists in your assets
import Navbar from "./navbar";

function MyOrderScreen() {
  const navigate = useNavigate();

  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center justify-center ">
      <h2 className="text-lg mb-4 mt-2">My Order</h2>

        <div className="flex flex-col items-center -mt-8">
          <img src={emptyCartImage} alt="Empty Cart" className="w-28 h-28 mb-2" />
          
          <p className="text-black-500 text-md font-semibold">Nothing yet, add some produicts and check them out :)</p>

        </div>
      
        <div>
        </div>
      
    </div>
    </>
  );
  
}

export default MyOrderScreen;
