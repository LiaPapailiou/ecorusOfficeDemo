import React, { Component } from 'react';
import axios from 'Axios';

axios.defaults.xsrfHeaderName = "X-CSRFToken";

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
    this.fetchData(`/api/persons/${this.props.match.params.id}/`);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };


  onSubmit = (e) => {
    e.preventDefault();
    const { person_name, person_new_name } = this.state;
    if (person_new_name !== null) {
      axios.post(`/api/persons/${this.props.match.params.id}/changeName/`, { person_name, person_new_name })
        .then((res) => res.json())
        .catch((err) => console.log(err));
    }
    if (person_name !== null) {
      axios.put(`/api/persons/${this.props.match.params.id}/`, { person_name })
        .then((res) => res.json())
        .catch((err) => console.log(err));
    }

    axios.post(`/api/persons/${this.props.match.params.id}/happyBirthday/`, { person_name, })
      .then((res) => res)
      .catch((err) => console.log(err));

    window.location.reload();
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
                      required
                    />
                  </div>
                  <p>Age: { this.state.data.person_age }</p>
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
