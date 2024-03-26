import { Link } from 'react-router-dom';

function Singleproduct(props){
    return(
            <div className="card col-5 col-md-3 col-lg-2 p-0">
                <img src={props.product.image} className="card-img-top" alt="..." style={{height:"200px",objectFit:"contain"}}/>
                <div className="card-body p-1 text-center">
                    <p className="card-text fw-bold">$ {props.product.price}</p>
                    <h5 className="card-title fw-lighter fs-5">{props.product.title}</h5>
                    <Link to={`/productDetails/${props.product.id}`}>details</Link>
                </div>
            </div>
    )
}

export default Singleproduct;