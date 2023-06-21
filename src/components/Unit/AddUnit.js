import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const AddUnit = () => {
  const [unit, setUnit] = useState({ name: "", description: "" });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUnit((prevUnit) => ({ ...prevUnit, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Replace with your API endpoint for creating a new unit
    fetch("https://localhost:7240/api/Unit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(unit),
    })
      .then((res) => res.json())
      .then((data) => {
        window.alert("Data submitted successfully!");
        navigate("/units");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  return (
    <div className="container">
      <h2>Add Unit</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="unitName">Unit Name</label>
          <input
            type="text"
            className="form-control"
            id="unitName"
            name="name"
            value={unit.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="unitDesc">Unit Description</label>
          <input
            type="text"
            className="form-control"
            id="unitDesc"
            name="description"
            value={unit.description}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mr-2">
          Submit
        </button>
        <Link to="/units" className="btn btn-secondary">
          Back
        </Link>
      </form>
    </div>
  );
};

export default AddUnit;
