import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() =>
  {fetch("http://localhost:9000/products")
    .then((res) => res.json())
    .then((data) => setProducts(data))}
  , []);

  const buildTable = () => {
    return products.map((element) => (
      <tr key={element.id}>
        <th scope="row">{element.id}</th>
        <td>{element.title}</td>
        <td>{element.category}</td>
        <td>{element.price}</td>
        <td>
          <div className="row">
            <div className="col-4" style={{ textAlign: "center" }}>
              <button className="btn btn-primary btn-sm"> updates</button>
            </div>
            <div className="col-4" style={{ textAlign: "center" }}>
              <button className="btn btn-danger btn-sm"> delete</button>
            </div>

            <div className="col-4" style={{ textAlign: "center" }}>
              <Link to={element.id} className="btn btn-info btn-sm"> view</Link>
            </div>
          </div>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <div>
        <h3 style={{ margin: "20px 0 20px 0" }}>Products</h3>
        <Link
          className="btn btn-success btn-lg"
          style={{ margin: "20px 0 20px 0" }}
          to="/products/add"
        >
          Add new product
        </Link>
        <table className="table table-striped-columns">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
                {buildTable()}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Products;
