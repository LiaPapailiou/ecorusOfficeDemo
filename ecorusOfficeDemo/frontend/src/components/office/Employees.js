import React, { Component, Fragment } from 'react';
import shortid from 'shortid';
import axios from 'axios';

export class Employees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      spinner: "Loading...",
    };
  }

  fetchData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  };

  handleDelete = (e, id) => {
    axios
      .delete(`/api/persons/${id}/`)
      .then((res) => {
        this.setState((previousState) => {
          return {
            data: previousState.data.filter((p) => p.id !== id)
          };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.fetchData(`/api/persons/`);;
  }
  render() {
    console.log(this.state.data);
    return (
      <Fragment>
        {
          !this.state.data ?
            <p>{ this.state.spinner }</p>
            : (
              <table className="table" style={ { marginTop: 40, marginBottom: 40 } }>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Employee Name</th>
                    <th scope="col">Employee Age</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.data.map((employee) => (
                      <Fragment key={ shortid.generate() }>
                        <tr>
                          <th scope="row">1</th>
                          <td>{ employee.person_name }</td>
                          <td>{ employee.person_age }</td>
                          <td><button type="button" onClick={ e => this.handleDelete(e, employee.id) } className="btn btn-outline-danger">Delete</button></td>
                        </tr>
                      </Fragment>
                    ))
                  }
                </tbody>
              </table>
            )
        }
      </Fragment>
    );
  }
}

export default Employees;
