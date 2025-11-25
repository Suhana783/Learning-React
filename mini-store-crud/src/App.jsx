import { useState } from "react";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import ProductList from "./components/ProductList";

function App() {
  const [editingProduct, setEditingProduct] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleAdd = () => setRefresh(!refresh);
  const handleUpdate = () => {
    setEditingProduct(null);
    setRefresh(!refresh);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Product Manager</h1>

      {editingProduct ? (
        <EditProduct product={editingProduct} onUpdate={handleUpdate} />
      ) : (
        <AddProduct onAdd={handleAdd} />
      )}

      <ProductList onEdit={setEditingProduct} refresh={refresh} />
    </div>
  );
}

export default App;
