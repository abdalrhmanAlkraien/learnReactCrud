import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function AddProduct() {
  const url = "http://localhost:9000/products/";

  const [product, setProducts] = useState({
    title: "",
    price: 0,
    description: "",
  });

  const warrningMessage = "required";

  const [error, setError] = useState({
    title: "",
    price: "",
    description: ""
  });

  const formPrefventLoad = (event) => {
    event.preventDefault();
  };

  const handleSubmit = () => {
    console.log("submit error " + error);
    console.log("handleValidation " + handleValidation());
    if (handleValidation()) {
      Swal.fire({
        title: "are you sure add product" + product.title,
        text: "Do you want to continue",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "confirm",
      }).then((data) => {
        if (data.isConfirmed) {
          addProduct();
        }
      });
    } else {
      Swal.fire({
        title: "something was wrong",
        text: getErrorDesc(),
        icon: "error",
        confirmButtonText: "confirm",
      });
    }
  };

  const getErrorDesc = () => {

    let errorDetials = ""
    
    if(error.title > 0) {

      errorDetials = errorDetials.concat(error.title).concat(" ")
    }

    console.log("getErrorDesc befor update");
    console.log("getErrorDesc product.price " + error.price);
    if(error.price.length > 0) {

      errorDetials = errorDetials.concat(error.price).concat(" ")
    } 

    if(error.description.length > 0) {

      errorDetials = errorDetials.concat(error.description)

    }

    console.log("errorDetials " + errorDetials)

    setError({
      title: "",
      price: "",
      description: ""
    })
    return errorDetials
  }

  const handleValidation = () => {

    let validationFlag = true;
    const errors = {
      title: "",
      price: "",
      description: ""
    };

    if (product.title.length < 0) {
      
      errors.title = "title is required"
      validationFlag = false
    }

    if (product.price < 1) {
      errors.price = "price is required"
      validationFlag = false
    }

    if (product.description.length < 20) {
      errors.price = "we need more desc info"
      validationFlag = false

    }

    console.log("handleValidation check errors" + errors)

    if (validationFlag) {
      return true;
    } else {
      setError({
        title: errors.title,
        price: errors.price,
        description: errors.description
      })
      return false;
    }
  };

  let navigate = useNavigate();

  const addProduct = () => {

    axios.post(url, product)
    .then(data=> {
      console.log("executed post request" + data)
      navigate("/products")
    })
  };

  return (
    <>
      <div>
        <h3>Add product</h3>

        <form onSubmit={formPrefventLoad}>
          <div className="mb-3">
            <label htmlFor="productTitle" className="form-label">
              Product Title
            </label>
            <input
              type="text"
              className="form-control"
              id="productTitle"
              placeholder="Product Title"
              required
              value={product.title}
              onChange={(e) => {
                setProducts({
                  title: e.target.value,
                  price: product.price,
                  description: product.description,
                });

                console.log("product title is" + JSON.stringify(product));
              }}
            />

            {error.title && (
              <span className="error-message">{error.title.trim()}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="productPrice" className="form-label">
              Product price
            </label>
            <input
              type="text"
              className="form-control"
              id="productPrice"
              placeholder="Product price"
              required
              value={product.price}
              onChange={(e) => {
                setProducts({
                  title: product.title,
                  price: e.target.value,
                  description: product.description,
                });

                console.log("product" + JSON.stringify(product));
              }}
            />
            {error.price && (
              <span className="error-message">{error.price}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              placeholder="your description"
              required
              value={product.description}
              onChange={(e) => {
                setProducts({
                  title: product.title,
                  price: product.price,
                  description: e.target.value,
                });
              }}
            ></textarea>

            {error.description && (
              <span className="error-message">{error.description}</span>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={()=>handleSubmit()}
          >
            Add Product
          </button>
        </form>
      </div>
    </>
  );
}

export default AddProduct;
