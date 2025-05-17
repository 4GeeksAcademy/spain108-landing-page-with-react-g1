
// 2.- Creo el componente (función)
export const Navbar = () => {
  // 3.- Codigo de JS

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container d-flex">
        <span className="navbar-text text-white">
          Start Bootstrap
        </span>
        <div className="justify-content-end">
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}