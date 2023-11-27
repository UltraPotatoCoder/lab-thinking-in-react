import { useState } from 'react';
import jsonData from './data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter the products based on the search term:
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle input change:
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar onChange={handleInputChange} />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
