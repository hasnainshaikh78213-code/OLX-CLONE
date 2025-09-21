import React from "react";


function Login({ onClose, onSwitch }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Close Button */}
        <button className="close-btn" onClick={onClose}>✖</button>

        {/* Logo */}
        <div className="modal-logo">OLX</div>

        {/* Title */}
        <h2 className="modal-title">Login into your OLX account</h2>

        {/* Login Options */}
        <div className="login-options">
          <button className="login-btn google">
            <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" />
            Login with Google
          </button>

          <button className="login-btn facebook">
            <img src="	https://www.olx.com.pk/assets/iconFacebookLogin_noinline.70f71af03bbf63ca01a044ff5c5eb342.svg" alt="Facebook" />
            Login with Facebook
          </button>

          <button className="login-btn email">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" />
            Login with Email
          </button>

          <button className="login-btn phone">
            <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="Phone" />
            Login with Phone
          </button>
        </div>

        {/* Footer */}
        <p className="modal-footer">
          New to OLX?{" "}
          <span className="modal-link" onClick={onSwitch}>
            Create an account
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
