import React from "react";

const Header = () => (
  <>
    <header className="header">
      {/* ICON + FORM */}
      <img src="img/logo.png" alt="trillo logo" className="logo" />
      <form action="#" className="search" placeholder="Search hotels">
        <input
          type="text"
          className="search__input"
          placeholder="Search hotels"
        />
        <button className="search__button">
          <img src="img/SVG/magnifying-glass.svg" alt="trillo logo" />
        </button>
      </form>

      {/* NAV ICONS */}
      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <img
            src="img/SVG/bookmark.svg"
            className="user-nav__icon"
            alt="bookmark icon"
          />
          <span className="user-nav__notification">7</span>
        </div>
        <div className="user-nav__icon-box">
          <img
            src="img/SVG/chat.svg"
            className="user-nav__icon"
            alt="bookmark icon"
          />
          <span className="user-nav__notification">7</span>
        </div>
        <div className="user-nav__user">
          <img
            src="img/aidan.jpg"
            className="user-nav__user-photo"
            alt="bookmark icon"
          />
          <span className="user-nav__user-name">Aidan</span>
        </div>
      </nav>
    </header>
  </>
);

export default Header;
