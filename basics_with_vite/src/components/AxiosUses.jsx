import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosUses = () => {
  const [products, setProducts] = useState([]);
  const[error,setError] = useState('')

  useEffect(() => {
    fetchData();
  }, []);

 const fetchData =async()=>{
 
  try {
    const response = await axios.get('https://dummyjson.com/products');
    console.log(response);
    setProducts(response.data.products) 
  } catch (error) {
    setError(error.message)
  }
 }

  return (
    <>
        {error !== '' && error}
      {products.map((product, index) => (
        <h3 key={index}>
          {product.title} - ${product.price}
        </h3>
      ))}
    </>
  );
};

export default AxiosUses;

// const fetchData = () => {
//     axios.get("https://dummyjson.com/products").then((response) => {
//     //   console.log(response);
//       setProducts(response.data.products);
//     }).catch((error)=>{
//         console.log(error)
//         setError(error.message)
//     })
//   };
