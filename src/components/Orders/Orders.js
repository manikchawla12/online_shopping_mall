import axios from "axios";
import { Fragment, useEffect, useState } from "react";

const Orders =()=>{

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

    return(
        <Fragment>
            <div className="container  ">
        <h3 className="mt-5">Orders</h3>
        <hr />
        <div className="table-responsive rounded">
          <table className="table text-center mt-1 table-striped border ">
            <thead>
              <tr className="">
                <th>Order Id</th>
                <th>Customer Name</th>
                <th>Item Id</th>
                <th>Total Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={i}>
                  <td className="col-1">{item.id}</td>
                  <td className="col-2">{item.productName}</td>
                  <td className="col-1">{item.productPrice}</td>
                  <td className="col-3 row-1">{item.productDescription}</td>
                  <td className="col-2">
                  <button className="btn btn-success rounded" >
                      Approve
                    </button>
                    &nbsp;
                    <button className="btn btn-danger rounded">
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
        </Fragment>
    )
}

export default Orders;