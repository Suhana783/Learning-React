import React,{useState,useEffect} from "react";

function ProductCard () {

const [product,setproduct] = useState([]);
const [loading, setloading] = useState(false);

useEffect(()=>{
    setloading(true);
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((data)=>{
        setproduct(data);
        setloading(false);
    })

    .catch(()=>setloading(false));
},[]);

return (
    <>
    {loading ? (
      <p>Loading...</p>
    ) : (
      <>
      <div>
        {product.map((item)=>(
            <div key={item.id}>
                <img src={item.image} alt={item.title} width="100" />
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <p>{item.description.slice(0,100)}...</p>
            </div>
        ))}
      </div>
      </>
    )}
    </>
)
};

export default ProductCard;