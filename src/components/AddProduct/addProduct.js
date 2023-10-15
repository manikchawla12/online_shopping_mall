import { Fragment, useEffect, useState } from "react";

const AddProduct = () => {
  const [data, setData] = useState({
    productName: "",
    productPrice: "",
    productImage: "",
    productDescription: "",
  });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState("");

  const validateValues = (data) => {
    let error = {};
    if (data.productName.length < 4) {
      error.productName = "Please enter a valid name";
    }
    if (!data.productPrice) {
      error.productPrice = "Enter the price";
    }
    if (!data.productImage) {
      error.productImage = "Paste the URL";
    }
    if (!data.productDescription) {
      error.productDescription = "Please fill the description";
    }
    return error;
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validateValues(data));
    console.log(error);
    setSubmitting(true);
  };

  const finalSubmit = () => {
    console.log(data);
    
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && submitting) {
      finalSubmit();
    }
  }, [error]);

  return (
    <Fragment>
      <div className="d-flex mb-2">
        <div className="container">
          <h3 className="mt-5">Add Product</h3>
          {Object.keys(error).length === 0 && submitting ? (
            <span className="success">Successfully submitted ✓</span>
          ) : null}
          <hr />
          <form className="row" onSubmit={handleSubmit}>
            <div className="form-group p-2 col-6 ">
              <input
                type="text"
                name="productName"
                placeholder="Product Name"
                className="form-control"
                value={data.productName}
                onChange={handleChange}
              />

              {error.productName ? (
                <p className="error text-danger">{error.productName}</p>
              ) : undefined}
            </div>
            <div className="form-group p-2 col-6">
              <input
                type="number"
                name="productPrice"
                id="productPrice"
                placeholder="Price"
                className="form-control"
                value={data.productPrice}
                onChange={handleChange}
              />
              {error.productPrice ? (
                <p className="error text-danger">Enter the price!</p>
              ) : null}
            </div>
            <div className="form-group p-2 ">
              <input
                type="text"
                placeholder="Product Image"
                name="productImage"
                id="productImage"
                className="form-control"
                value={data.productImage}
                onChange={handleChange}
              />
              {error.productImage ? (
                <p className="error text-danger">Paste the URL!</p>
              ) : null}
            </div>
            <div className="form-group p-2 ">
              <textarea
                rows="4"
                cols="50"
                placeholder="Description"
                name="productDescription"
                id="productDescription"
                className="form-control"
                value={data.productDescription}
                onChange={handleChange}
              />
              {error.productDescription ? (
                <p className="error text-danger">Please fill the description</p>
              ) : null}
            </div>{" "}
            <div className="form-group p-2">
              <button className="btn btn-success" type="submit">
                Submit
              </button>
              &nbsp;
              <button className="btn btn-info" type="reset">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default AddProduct;
