import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../../services/auth.service';

export class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
    success: false,
    message: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = this.state;

    AuthService.register(username, email, password)
      .then((res) => {
        this.setState({
          message: res.data.message,
          success: true,
        });
      },
        (err) => {
          const resMsg = (err.response && err.response.data && err.response.data.messsage);
          this.setState({
            success: false,
            message: resMsg,
          });
        }
      );
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.state.message);
    const { username, email, password, repeatPassword } = this.state;
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Register</h2>
          <form onSubmit={ this.onSubmit }>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={ username }
                className="form-control"
                onChange={ this.onChange }
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={ email }
                className="form-control"
                onChange={ this.onChange }
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={ password }
                className="form-control"
                onChange={ this.onChange }
                required
              />
            </div>
            <div className="form-group">
              <label>Repeat Password</label>
              <input
                type="password"
                name="repeatPassword"
                value={ repeatPassword }
                className="form-control"
                onChange={ this.onChange }
                required
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Register</button>
            </div>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
