import React, { useState } from 'react';
import '../Vendor/ProductList.css'


function ProductList() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = () => {
    const newProductName = prompt('Enter product name:');
    const newProductPrice = prompt('Enter product price:');

    if (newProductName && newProductPrice) {
      setProducts([...products, {
        name: newProductName,
        price: newProductPrice,
        id: Math.random().toString(36).substring(2, 15), // Generate a unique ID
      }]);
    } else {
      alert('Please enter both product name and price');
    }
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const handleUpdateProduct = (product) => {
    const updatedProductName = prompt(`Enter updated name for "${product.name}":`);
    const updatedProductPrice = prompt(`Enter updated price for "${product.name}":`);

    if (updatedProductName || updatedProductPrice) {
      const updatedProducts = products.map((item) =>
        item.id === product.id
          ? { ...item, name: updatedProductName || item.name, price: updatedProductPrice || item.price }
          : item
      );
      setProducts(updatedProducts);
    }
  };

  return (
    <div className="container">
      <h1>Product Dashboard</h1>
      <div className="header">
        <p>Welcome Vendor Name</p>
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
      <div className="product-list">
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Image</th>
              <th>Product Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td><img src="placeholder.jpg" alt="Product Image" /></td>
                <td>{`$${product.price}`}</td>
                <td>
                  <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                  <button onClick={() => handleUpdateProduct(product)}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;
