import { useState } from "react";
import { addProduct } from "../services/api";

function AddProduct({ onAdd }) {
  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: ""
  });

  const change = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    addProduct(form).then(newProduct => {
      onAdd(newProduct);
      setForm({ title: "", price: "", description: "", category: "", image: "" });
    });
  };

  return (
    <form onSubmit={submit} style={{ display: "flex", gap: "10px" }}>
      <input name="title" value={form.title} onChange={change} placeholder="Title" />
      <input name="price" value={form.price} onChange={change} placeholder="Price" />
      <input name="description" value={form.description} onChange={change} placeholder="Description" />
      <input name="category" value={form.category} onChange={change} placeholder="Category" />
      <input name="image" value={form.image} onChange={change} placeholder="Image URL" />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProduct;
