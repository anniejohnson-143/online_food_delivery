import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home-background">
      <nav className="navbar">
        <div className="navbar-logo">SAVORA</div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>
      <div className="home-hero">
        <h1>SAVORA</h1>
        <h2>Where hunger ends, flavor begins</h2>
      </div>
      <footer className="home-footer">
        &copy; {new Date().getFullYear()} Savora. All rights reserved.
      </footer>
    </div>
  );
}