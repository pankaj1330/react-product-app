import Singleproduct from "./Singleproduct"
import { useState,useEffect } from "react";

const Products = () =>{
    const [Product,setProduct] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{

        const fetchdata = async()=>{
            setLoading(true);
            const resp = await fetch('https://fakestoreapi.com/products/');
            const data = await resp.json();
            setProduct([...data]);
            setLoading(false)
        };
        fetchdata();
    },[])

    const ProductsHtml = Product.map(item => {
        return <Singleproduct 
            product = {item}
        />
    })

    return(
        <section className="container mx-auto my-4 row justify-content-center gap-3">
            <h1 className="text-center">Products </h1>
            {loading ? <div className="text-center">Loading data ...</div> : ProductsHtml}
        </section>
    )
}

export default Products;