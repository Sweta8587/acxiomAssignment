import React, { useState } from 'react';
import { useEffect } from 'react';
import alstyles from "../Vendor/RequestItem.module.css"
import '../Vendor/RequestItem'
function RequestItem() { // Renamed component name
  const [products, setProducts] = useState([]);

//   // Assuming you have a way to fetch product data (replace with your actual logic)
//   const fetchProducts = async () => {
//     const response = await fetch('https://api.example.com/products');
//     const data = await response.json();
//     setProducts(data);
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []); // Fetch products on component mount

  const handleAddProduct = () => {
    // Implement product addition logic (prompt user for details, send API request, etc.)
    alert('Product added successfully!'); // Placeholder for now
  };

  return (
    <div className={alstyles.inparea}>
            <div className={alstyles.user}>
        <h1>Vendor</h1>
            <button className={alstyles.llabel}>Home</button>
            <button className={alstyles.llabel}>Request item</button>
            <button className={alstyles.llabel}>Log Out</button>
      </div>
      <div className="product-list-container">
        <table>
          <thead>
            <tr>
              <th>Item 1</th>
              <th>Item 2</th>
              <th>Item 3</th>
              <th>Item 4</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td> {/* Assuming product data has a "name" property */}
                <td>{product.email}</td> {/* Assuming product data has an "email" property */}
                <td>{product.address}</td> {/* Assuming product data has an "address" property */}
                <td>{product.status}</td> {/* Assuming product data has a "status" property */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="add-product" onClick={handleAddProduct}>
        Add Product
      </button>
    </div>
  );
}

export default RequestItem; // Renamed exported component
