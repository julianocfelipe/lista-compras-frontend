import { Outlet, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <div className="d-flex align-items-center pb-3 mb-4 border-bottom">
          <Link
            to="/"
            className="d-flex align-items-center link-body-emphasis text-decoration-none"
          >
            <span className="fs-4">Lista de Compras</span>
          </Link>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
