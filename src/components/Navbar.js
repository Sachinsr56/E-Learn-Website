import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          e-Learning
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Courses</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Cart</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;


