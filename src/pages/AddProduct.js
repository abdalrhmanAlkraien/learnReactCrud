
function AddProduct() {
  
  const url = "http://localhost:9000/products/"

  const addProduct = (productData)=>{

    fetch(url, {
      method: "POST",
      body: productData
    }).then(res=> res.json())
    .then(data=> {
      console.log("executed delete response" + data)
    })
  }

  return (
    <>
      <div>
        <h3>Add product</h3>

        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
