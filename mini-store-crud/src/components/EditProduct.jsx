import { useState } from "react";
import { updateProduct } from "../services/api";

function EditProduct({ product, onUpdate }) {
  const [form, setForm] = useState(product);

  const change = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    updateProduct(form.id, form).then(updated => {
      onUpdate(updated);
    });
  };

  return (
    <form onSubmit={submit} style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <input name="title" value={form.title} onChange={change} />
      <input name="price" value={form.price} onChange={change} />
      <input name="description" value={form.description} onChange={change} />
      <input name="category" value={form.category} onChange={change} />
      <input name="image" value={form.image} onChange={change} />
      <button type="submit">Update</button>
    </form>
  );
}

export default EditProduct;
