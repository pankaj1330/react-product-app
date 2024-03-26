import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

const Detailpage =() => {
    const { id } = useParams();
    const [product, setProduct] = useState(1);
    const [loading,setLoading] = useState(true);
  
    useEffect(() => {
      const fetchProduct = async () => {
        setLoading(true);
        try {
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          console.log(response);
          const data = await response.json();
          setProduct({...data});
          setLoading(false)
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      };
  
      fetchProduct();
    }, [id]);

    return(
        <>
            {loading ? 
                <div className="text-center">Loding data ...</div> : 
                <div className="container mx-auto my-5 row align-items-center justify-content-center">
                    <div className="col-10 col-sm-3 p-1">
                        <img src={product.image} alt="a" style={{width:"100%",objectFit:"contain"}} />
                    </div>
                    <div className="col-10 col-sm-6 p-1">
                        <h1>{product.title}</h1>
                        <h1>$ {product.price}</h1>
                        <h6>Category : {product.category}</h6>
                        <p>{product.description}</p>
                        <p className="m-0">Rating : ⭐ {product.rating.rate}</p>
                        <p className="m-0">Reviews : {product.rating.count}</p>
                    </div>
                </div>
            }
        </>
    )
}

export default Detailpage;