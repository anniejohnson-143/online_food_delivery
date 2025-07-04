// frontend/src/pages/About.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
export default function About() {
  return (
    <>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login </Link>
        <Link to="/register">Register</Link>
      </nav>
      <div className="about-fullwidth">
        <section className="about-section">
          <div className="about-image-block">
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80" alt="Our Mission" className="about-img" />
          </div>
          <div className="about-text-block">
            <h3>Our Mission</h3>
            <p>
              At SAVORA, our mission is to bring people together through the love of food. We strive to make dining experiences seamless, enjoyable, and accessible for everyone. Whether you crave a quick bite or a gourmet meal, we connect you to the best local restaurants with just a few clicks.
            </p>
          </div>
        </section>
        <section className="about-section reverse">
          <div className="about-text-block">
            <h3>Our Story</h3>
            <p>
              Founded by food enthusiasts, SAVORA was born out of a passion for culinary discovery and community. We believe every meal tells a story, and we are here to help you write yours—one delicious order at a time. Join us as we continue to grow, innovate, and celebrate the joy of food together.
            </p>
          </div>
          <div className="about-image-block">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80" alt="Our Story" className="about-img" />
          </div>
        </section>
      </div>
    </>
  );
}