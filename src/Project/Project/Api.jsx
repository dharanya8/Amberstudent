
   import React, { useEffect, useState } from "react";


function Products() {
  const [products, setProducts] = useState();
  useEffect(() => {
    fetch(" https://api.escuelajs.co/api/v1/products")   
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Details</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {products.map(product => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "10px" }}>
            <img src={product.image} alt={product.title} width="150" />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <h4>${product.price}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

