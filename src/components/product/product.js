import { Fragment } from "react";
import ProductData from "./productData"

const Product = () => {
  return (
    <Fragment>
        <div className="container">
            <h2 className="fw-bold border-bottom">Products</h2>
            <div className=" d-flex justify-content-around row ">
{
        ProductData.map((item)=>
        
      <div className="card p-2 m-2" style={{"width": "18rem"}}>
        <img src={item.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.Title}</h5>
          <p className="card-text">
           {item.price}
          </p>
          <a href="#" className="btn btn-primary">
            Buy Now
          </a>
        </div>
      </div>
      )}
      </div>
      </div>
    </Fragment>
  );
};

export default Product;