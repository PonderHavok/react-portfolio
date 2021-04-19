import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Thank you for stopping by.
        </p>
        <div class="footer-logo">
          <Link to="/" className="social-logo">
            Jonny Talbott
            <i class="fas fa-fan"></i>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Footer;
