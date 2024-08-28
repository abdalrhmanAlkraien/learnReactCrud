import { Link } from "react-router-dom";

function SideBar() {
  return (
    <>
      <div className="col-2">
        <nav className="nav flex-column">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/products">
            Products
          </Link>
          <Link className="nav-link" to="/categories">
          Categories
          </Link>
        </nav>
      </div>
    </>
  );
}

export default SideBar;
