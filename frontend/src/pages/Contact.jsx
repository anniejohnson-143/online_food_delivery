// frontend/src/pages/Contact.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
export default function Contact() {
  return (
    <>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login </Link>
        <Link to="/register">Register</Link>
      </nav>
      <div className="contact-fullwidth">
        <div className="contact-flex">
          <div className="contact-info-card">
            <h2>Contact Us</h2>
            <p>
              Have questions, feedback, or need support? We'd love to hear from you!
            </p>
            <ul>
              <li>Email: <a href="mailto:support@savora.com">support@savora.com</a></li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Flavor Street, Food City, Country</li>
            </ul>
          </div>
          <div className="contact-form-card">
            <h3>Send a Message</h3>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required />
              <button type="submit" disabled>Contact Us</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}