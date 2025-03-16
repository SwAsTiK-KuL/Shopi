import { useState } from "react";
import ProductsList from "../Pages/product";
import Navbar from "../Pages/navbar";
import useFetchProducts from "../Pages/repository"; // Fetch products

function HomeScreen() {
  const { products, loading, error } = useFetchProducts();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      {/* Pass setSelectedCategory to Navbar */}
      <Navbar setSelectedCategory={setSelectedCategory} />
      
      {/* Search Input */}
      <div className="flex flex-col items-center mt-10">
        <div className="text-xl">Home</div>
        <input
          type="text"
          placeholder="Search..."
          className="mt-4 p-2 w-80 border border-black rounded-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Pass selectedCategory & searchQuery to ProductsList */}
      <ProductsList 
        products={products} 
        selectedCategory={selectedCategory} 
        searchQuery={searchQuery} 
        loading={loading}
        error={error}
      />
    </>
  );
}

export default HomeScreen;
