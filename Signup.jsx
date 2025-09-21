import React from "react";

function Signup({ onClose, onSwitch }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Close Button */}
        <button className="close-btn" onClick={onClose}>✖</button>

        {/* Logo */}
        <div className="modal-logo">OLX</div>

        {/* Title */}
        <h2 className="modal-title">Create a new OLX account</h2>

        {/* Signup Options */}
        <div className="login-options">
          <button className="login-btn google">
            <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" />
            Join with Google
          </button>

          <button className="login-btn facebook">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
            Join with Facebook
          </button>

          <button className="login-btn email">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" />
            Join with Email
          </button>

          <button className="login-btn phone">
            <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="Phone" />
            Join with Phone
          </button>
        </div>

        {/* Terms & Policy */}
        <p className="modal-footer" style={{ fontSize: "12px", color: "#555", marginTop: "10px" }}>
          When creating a new account you agree to OLX's{" "}
          <a href="#" style={{ fontWeight: "bold", textDecoration: "underline", color: "#002f34" }}>Terms and conditions</a>{" "}
          and{" "}
          <a href="#" style={{ fontWeight: "bold", textDecoration: "underline", color: "#002f34" }}>Privacy Policy</a>
        </p>

        {/* Footer Switch */}
        <p className="modal-footer">
          Already have an account?{" "}
          <span className="modal-link" onClick={onSwitch}>
            Log In
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
