import "./App.css";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <div>
        <Navbar key="navbar" />
        <div className="container">
          <div className="row">
            <SideBar/>
            <div className="col-10">content</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
