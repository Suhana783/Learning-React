const BASE_URL = "https://fakestoreapi.com/products";

export const getProducts = () =>
  fetch(BASE_URL).then(res => res.json());

export const addProduct = (product) =>
  fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product)
  }).then(res => res.json());

export const updateProduct = (id, product) =>
  fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product)
  }).then(res => res.json());

export const deleteProduct = (id) =>
  fetch(`${BASE_URL}/${id}`, {
    method: "DELETE"
  }).then(res => res.json());
