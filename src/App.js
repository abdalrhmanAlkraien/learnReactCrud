import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <div>
        <Navbar key="navbar" />
        <div className="container">
          <div className="row">
            <SideBar />

            <div className="col-10">
              <Routes>
                <Route path="/" element={<Home />} />
                
                <Route path="products" element={<><Outlet/></>} >
                  <Route path="" element={<Products />}/>
                  <Route path='add' element={<AddProduct />} />
                  <Route path=":productId" element = {<ProductDetails />} />
                 </Route>

                <Route path="/categories" element={<Products />} />
 
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
