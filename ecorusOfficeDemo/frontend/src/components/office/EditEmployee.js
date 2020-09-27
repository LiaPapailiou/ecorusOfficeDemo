import React, { Component } from 'react';
import axios from 'Axios';

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
export class EditEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinner: "Loading...",
      person_name: '',
      person_age: '',
      person_new_name: '',
    };
  }
  fetchData = (url) => {
    fetch(url).then((res) => res.json()).then((data) => this.setState({ data }));
  };

  componentDidMount() {
    this.fetchData(`/api/persons/${this.props.match.params.id}`);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { person_name, person_age, person_new_name } = this.state;
    axios.post(`/api/persons/${this.props.match.params.id}/happyBirthday/`, { person_name, }, config)
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };
  render() {
    const { person_name, person_age, person_new_name } = this.state;
    return (
      <>
        {
          this.state.data ?
            (
              <div className="card card-body mt-4 mb-4">
                <h2>Employees</h2>
                <form onSubmit={ this.onSubmit }>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      name="person_name"
                      value={ person_name }
                      placeholder={ `${this.state.data.person_name}` }
                      className="form-control"
                      onChange={ this.onChange }
                    />
                  </div>
                  <div className="form-group">
                    <label>Age</label>
                    <input
                      type="text"
                      name="person_age"
                      value={ person_age }
                      placeholder={ `${this.state.data.person_age}` }
                      className="form-control"
                      onChange={ this.onChange }
                    />
                  </div>
                  <div className="form-group">
                    <label>Change Name</label>
                    <input
                      type="text"
                      name="person_new_name"
                      value={ person_new_name }
                      className="form-control"
                      onChange={ this.onChange }
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">It's my birthday!</button>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            ) : (<p>{ this.state.spinner }</p>)
        }
      </>
    );
  }
}

export default EditEmployee;
