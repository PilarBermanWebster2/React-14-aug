import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import "../Navbar.css"; // Import CSS untuk styling

const months = [
  { value: "All", label: "All Movies" },
  { value: "January", label: "January" },
  { value: "February", label: "February" },
  { value: "March", label: "March" },
  { value: "April", label: "April" },
  { value: "May", label: "May" },
  { value: "June", label: "June" },
  { value: "July", label: "July" },
  { value: "August", label: "August" },
  { value: "September", label: "September" },
  { value: "October", label: "October" },
  { value: "November", label: "November" },
  { value: "December", label: "December" },
];

const Navbar = ({ setCategory, isAuthenticated, setIsAuthenticated }) => {
  const [selectedOption, setSelectedOption] = useState({
    value: "All",
    label: "All Movies",
  });

  const handleMonthChange = (option) => {
    setSelectedOption(option);
    setCategory(option.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          MovieApp
        </Link>
        <div className="navbar-links">
          {!isAuthenticated ? (
            <Link to="/login" className="navbar-link">
              Login
            </Link>
          ) : (
            <>
              <button
                className="navbar-button"
                onClick={() => setIsAuthenticated(false)}
              >
                Logout
              </button>
            </>
          )}
          <div className="navbar-category">
            <Select
              value={selectedOption}
              onChange={handleMonthChange}
              options={months}
              className="month-dropdown"
              classNamePrefix="react-select"
              isSearchable={false}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
