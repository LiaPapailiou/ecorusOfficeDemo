import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../services/auth.service';

export class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="/#/dashboard">Home</a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item"><Link to="/register" className="nav-link">Register</Link></li>
            <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
            <li className="nav-item"><Link to="/" className="nav-link" onClick={ () => AuthService.logout() }>Logout</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;

