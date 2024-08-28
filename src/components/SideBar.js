function SideBar() {
  return (
    <>
      <div className="col-2">
        <nav className="nav flex-column">
          <a className="nav-link active" aria-current="page" href="#">
            Active
          </a>
          <a className="nav-link" href="#">
            Link
          </a>
          <a className="nav-link" href="#">
            Link
          </a>
          <a className="nav-link disabled" aria-disabled="true">
            Disabled
          </a>
        </nav>
      </div>
    </>
  );
}

export default SideBar;
