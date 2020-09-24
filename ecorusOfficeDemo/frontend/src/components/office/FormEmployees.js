import React, { Component } from 'react';

export class FormEmployees extends Component {
  state = {
    person_name: '',
    person_age: '',
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    const { person_name, person_age } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Employees</h2>
        <form onSubmit={ this.onSubmit }>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="person_name"
              value={ person_name }
              className="form-control"
              onChange={ this.onChange }
              required
            />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input
              type="text"
              name="person_age"
              value={ person_age }
              className="form-control"
              onChange={ this.onChange }
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default FormEmployees;
