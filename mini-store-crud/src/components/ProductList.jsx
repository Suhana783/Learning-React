import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../services/api";

function ProductList({ onEdit, refresh }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(data => setProducts(data));
  }, [refresh]);

  const handleDelete = (id) => {
    deleteProduct(id).then(() =>
      setProducts(products.filter(p => p.id !== id))
    );
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
      {products.map(product => (
        <div key={product.id} style={{
          border: "1px solid #ccc",
          padding: "15px",
          width: "250px",
          borderRadius: "6px"
        }}>
          <img src={product.image} style={{ width: "100%", height: "150px", objectFit: "contain" }} />
          <h3>{product.title}</h3>
          <p>₹{product.price}</p>
          <p>{product.description.slice(0, 80)}...</p>
          <button onClick={() => onEdit(product)}>Edit</button>
          <button onClick={() => handleDelete(product.id)} style={{ marginLeft: "10px" }}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
