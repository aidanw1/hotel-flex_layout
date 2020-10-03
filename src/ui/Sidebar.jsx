import React from "react";

const Sidebar = () => (
  <>
    <nav className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item side-nav__item--active">
          <a href="#test" className="side-nav__link">
            <img
              src="img/SVG/home.svg"
              className="side-nav__icon"
              alt="Home icon"
            />
            <span>Hotel</span>
          </a>
        </li>

        <li className="side-nav__item">
          <a href="#test" className="side-nav__link">
            <img
              src="img/SVG/aircraft-take-off.svg"
              className="side-nav__icon"
              alt="Flight icon"
            />
            <span>Flight</span>
          </a>
        </li>

        <li className="side-nav__item">
          <a href="#test" className="side-nav__link">
            <img
              src="img/SVG/key.svg"
              className="side-nav__icon"
              alt="Rental icon"
            />
            <span>Car rental</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#test" className="side-nav__link">
            <img
              src="img/SVG/map.svg"
              className="side-nav__icon"
              alt="Tours icon"
            />
            <span>Tours</span>
          </a>
        </li>
      </ul>

      <div class="legal">&copy; 2017 by trillo. All rights reserved.</div>
    </nav>
  </>
);

export default Sidebar;
