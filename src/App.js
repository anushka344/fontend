import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UnitListing from "./components/Unit/UnitListing";
import AddUnit from "./components/Unit/AddUnit";
import EditUnit from "./components/Unit/EditUnit";
import DeleteUnit from "./components/Unit/DeleteUnit";

const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Inventory Management System
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/units" className="nav-link">
                  Units
                </Link>
              </li>
              {/* Add other navigation links here */}
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/units" element={<UnitListing />} />
          <Route path="/units/add" element={<AddUnit />} />
          <Route path="/units/edit/:id" element={<EditUnit />} />
          <Route path="/units/delete/:id" element={<DeleteUnit />} />
          {/* Add other routes for different controllers here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
