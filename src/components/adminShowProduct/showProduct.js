import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ShowProduct = () => {
  
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/product").then((res) => {
      setData(res.data);
    });
  }, []);

  

  const handleDelete = (id) => {
    console.log(id)
    
   
      axios
        .delete('http://localhost:3000/product/'+id)
        .then((response) => {
          console.log("Resource deleted successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error deleting resource:", error);
        });
   
  };

  return (
    <Fragment>
      <div className="container  ">
        <h3 className="mt-5">Product List</h3>
        <hr />
        <div className="table-responsive">
          <table className="table text-center mt-1 table-striped  ">
            <thead>
              <tr className="">
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={i}>
                  <td className="col-1">{item.id}</td>
                  <td className="col-2">{item.productName}</td>
                  <td className="col-1">{item.productPrice}</td>
                  <td className="col-3"><img src={item.productImage} className="img-thumbnail" width={"100px"}  alt="..." /></td>
                  <td className="col-3 row-1">{item.productDescription}</td>
                  <td className="col-2">
                    <button className="btn btn-danger" onClick={e=>handleDelete(item.id)}>
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ShowProduct;
