import React, { useState } from 'react';
import '../Vendor/ProductStatus'

function ProductStatus() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = () => {
    const newProductName = prompt('Enter product name:');
    const newProductEmail = prompt('Enter product email:');
    const newProductAddress = prompt('Enter product address:');
    const newProductStatus = prompt('Enter product status:');

    if (newProductName && newProductEmail && newProductAddress && newProductStatus) {
      setProducts([...products, {
        name: newProductName,
        email: newProductEmail,
        address: newProductAddress,
        status: newProductStatus,
        id: Math.random().toString(36).substring(2, 15), // Generate a unique ID
      }]);
    } else {
      alert('Please enter all product details');
    }
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const handleUpdateProduct = (product) => {
    const updatedProductName = prompt(`Enter updated name for "${product.name}":`);
    const updatedProductEmail = prompt(`Enter updated email for "${product.name}":`);
    const updatedProductAddress = prompt(`Enter updated address for "${product.name}":`);
    const updatedProductStatus = prompt(`Enter updated status for "${product.name}":`);

    if (updatedProductName || updatedProductEmail || updatedProductAddress || updatedProductStatus) {
      const updatedProducts = products.map((item) =>
        item.id === product.id
          ? {
              ...item,
              name: updatedProductName || item.name,
              email: updatedProductEmail || item.email,
              address: updatedProductAddress || item.address,
              status: updatedProductStatus || item.status,
            }
          : item
      );
      setProducts(updatedProducts);
    }
  };

  return (
    <div className="dashboard">
      <div className="header">
        <h1>Product Status</h1>
        <div className="logout">
          <p>Welcome, Vendor Name</p>
          <button>Log Out</button>
        </div>
      </div>
      <div className="product-list-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>E-Mail</th>
              <th>Address</th>
              <th>Status</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.email}</td>
                <td>{product.address}</td>
                <td>{product.status}</td>
                <td>
                  <button onClick={() => handleUpdateProduct(product)}>Update</button>
                </td>
                <td>
                  <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                </td>
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

export default ProductStatus;
