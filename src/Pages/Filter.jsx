import { useState, useEffect } from "react";

function useFilterProducts(products) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((p) => p.category.name === selectedCategory));
    }
  }, [selectedCategory, products]);

  return { filteredProducts, setSelectedCategory };
}

export default useFilterProducts;
