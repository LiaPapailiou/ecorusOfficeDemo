import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../../services/auth.service';

export class Login extends Component {
  state = {
    username: '',
    password: '',
    loading: false,
    message: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    // console.log('success');
    AuthService.login(this.state.username, this.state.password).then(() => {
      this.props.history.push("/dashboard");
      window.location.reload();
    },
      (err) => {
        const resMsg = (err.response && err.response.data && err.response.data.message);
        this.setState({
          loading: false,
          message: resMsg,
        });
        console.log(resMsg);
      }
    );
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Login</h2>
          <form onSubmit={ this.onSubmit }>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={ username }
                className="form-control"
                onChange={ this.onChange }
                autoComplete
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
                autoComplete
                required
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
