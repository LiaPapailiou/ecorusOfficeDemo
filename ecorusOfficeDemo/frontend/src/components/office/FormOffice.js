import React, { Component } from 'react';
import axios from 'axios';

axios.defaults.xsrfHeaderName = "X-CSRFToken";
const user = JSON.parse(localStorage.getItem('user'));
const config = {
  headers: {
    "Content-Type": "application/json"
  }
};

if (user && user.token) {
  config.headers["Authorization"] = `Token ${user.token}`;
}

export class FormOffice extends Component {
  state = {
    office_name: '',
    peopleWorking: [],
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { office_name, peopleWorking } = this.state;
    const employee = { office_name, peopleWorking: [peopleWorking] };
    console.log(employee);
    axios
      .post(`/api/offices/`, { employee }, config)
      .then((res) => console.log('success', res.data))
      .catch((err) => console.log(err));
  };

  render() {
    const { office_name, peopleWorking } = this.state;
    return (
      <div className="card card-body mt-4 mb-4" >
        <h2>Office</h2>
        <form onSubmit={ this.onSubmit }>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="office_name"
              value={ office_name }
              className="form-control"
              onChange={ this.onChange }
              required
            />
          </div>
          <div className="form-group">
            <label>Employees</label>
            <input
              type="text"
              name="peopleWorking"
              value={ peopleWorking }
              className="form-control"
              onChange={ this.onChange }
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default FormOffice;
