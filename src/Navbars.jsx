import "./App.css";
export function Navbars({ count }) {
  return (
    <div>
      <header>
        <nav className="navbar navbar-dark navbar-expand-lg ">
          <div className="container">
            <span className="navbar-brand" href="#">
              <i className="me-2 fa-brands "></i>Jeeva Mart
            </span>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <span
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </span>
                </li>
                <li className="nav-item">
                  <span className="nav-link" href="#">
                    About
                  </span>
                </li>
                <li className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shop
                  </span>
                  <div className="dropdown-menu ">
                    <li>
                      <span className="dropdown-item" href="#">
                        New Products
                      </span>
                    </li>
                    <li>
                      <span className="dropdown-item" href="#">
                        Arrivals
                      </span>
                    </li>
                    <li className="dropdown-divider"></li>
                    <li>
                      <span className="dropdown-item" href="#">
                        Offers
                      </span>
                    </li>
                  </div>
                </li>
                <li className="nav-item">
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    className="btn btn-outline-warning "
                    href="#"
                  >
                    {" "}
                    <i className="fa-solid me-2 fa-cart-plus"></i> Cart {count}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
