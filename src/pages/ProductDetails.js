import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const param = useParams();

  const [product, setProduct] = useState({});

  const url = "http://localhost:9000/products/";
  
  useEffect(()=> {

    fetch(url + param.productId)
    .then((response) => response.json())
    .then((data) => setProduct(data))
  }
  , []);

  return (
    <>
     <div>
     <h1>{param.productId}</h1>
     <h2>{product.title}</h2>
     </div>
    </>
  );
}

export default ProductDetails;
