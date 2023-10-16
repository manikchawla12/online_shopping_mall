import { Fragment, useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/product").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <Fragment>
      <div className="container">
        <h2 className="fw-bold border-bottom">Products</h2>
        <div className=" d-flex justify-content-around row ">
       
          {data.map((item) => (
            <div className="card p-2 m-2" style={{ width: "18rem" }}  >
              <img src={item.productImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.productName}</h5>
                <p className="card-text">{item.productPrice}</p>
                <a href="#" className="btn btn-primary">
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );

};

export default Product;
