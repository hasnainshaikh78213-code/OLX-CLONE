import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="navbar">
      {/* Top Navbar */}
      <div className="navbar-top">
        <div className="logo">OlX</div>

        <div className="categories-nav-a">
          <img
            src="https://www.olx.com.pk/assets/iconMotors.6bf280165e43e55b173d0a53551e2bfb.png"
            alt=""
          />
          <a href="#">Motors</a>
          <img
            src="https://www.olx.com.pk/assets/iconProperty.d09c6d2e3621f900c17c9e8330a1a37b.png"
            alt=""
          />
          <a href="#">Property</a>
        </div>

        <div className="actions">
          <button className="login" onClick={() => setShowLogin(true)}>
            Login
          </button>
          <button className="sell-btn">+ Sell</button>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="navbar-bottom">
        <select className="location">
          <option>Pakistan</option>
          <option>Karachi</option>
          <option>Lahore</option>
          <option>Islamabad</option>
        </select>

        <input
          type="text"
          className="search-input"
          placeholder="Find Cars, Mobile Phones and more..."
        />
        <button className="search-btn">🔍 Search</button>
      </div>

      {/* Modal Logic */}
      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onSwitch={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
        />
      )}

      {showSignup && (
        <Signup
          onClose={() => setShowSignup(false)}
          onSwitch={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
        />
      )}
    </div>
  );
}

export default Navbar;
