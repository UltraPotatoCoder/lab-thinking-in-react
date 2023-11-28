import { useState } from 'react';
import jsonData from './data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  // Filter the products based on the search term and in-stock filter:
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!inStockOnly || (inStockOnly && product.inStock))
  );

  // Handle input change:
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchTerm(inputValue);

    // Filter products based on the current input value and in-stock filter:
    const updatedProducts = jsonData.filter(
      (product) =>
        product.name.toLowerCase().includes(inputValue.toLowerCase()) &&
        (!inStockOnly || (inStockOnly && product.inStock))
    );

    setProducts(updatedProducts);
  };

  // Handle in-stock filter change:
  const handleInStockChange = (event) => {
    setInStockOnly(event.target.checked);
    // Filter products based on the current in-stock filter:
    const updatedProducts = jsonData.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!event.target.checked || (event.target.checked && product.inStock))
    );

    setProducts(updatedProducts);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        onChange={handleInputChange}
        onInStockChange={handleInStockChange}
        inStockOnly={inStockOnly}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
