import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditUnit = () => {
  const { unitId } = useParams();
  const navigate = useNavigate();

  const [unit, setUnit] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    fetch(`https://localhost:7240/api/Unit/${unitId}`)
      .then((res) => res.json())
      .then((data) => {
        setUnit(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [unitId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUnit((prevUnit) => ({ ...prevUnit, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://localhost:7240/api/Unit/${unitId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(unit),
    })
      .then((res) => res.json())
      .then((data) => {
        window.alert("Data updated successfully!");
        navigate("/units");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2>Edit Unit</h2>
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
          Update
        </button>
        <Link to="/units" className="btn btn-secondary">
          Back
        </Link>
      </form>
    </div>
  );
};

export default EditUnit;
