import React, { useState } from 'react';
import alstyles from "../Vendor/ViewProducts.module.css"


function ViewProducts() { // Renamed component name
  var [products, setProducts] = useState([]); // Assuming you have product data

  // ... (Optional) Logic for fetching product data from API or database
  async function getProds() {
    const response = await fetch("http://localhost:5000/SectionToShowItem", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });

    if (response.status === 200) {
      const prods = await response.json();
      setProducts(prods)
    }
  }

  getProds();
  return (
    <div className={alstyles.inparea}>
      <h1 className={alstyles.llabel}>Vendor Name</h1>

      <nav>
        <ul>
          <button className={alstyles.blabel}>Home</button>
          <button className={alstyles.blabel}>Log Out</button>
          {/* Add more navigation links here if needed */}
        </ul>
      </nav>

      <div className="main-section">
        {/* Optional search bar component here */}
        <table className="vendor-data-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Add to cart</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}> {/* Assuming product data has an "id" property */}
                <td>{product.name}</td>
                <td>{product.sku}</td>
                <td>{product.stock}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Optional pagination controls component here */}
      </div>
      {/* <button className="add-product">Add Product</button> */}
    </div>
  );
}

export default ViewProducts; // Renamed exported component

