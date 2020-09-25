import React, { Component, Fragment } from 'react';
import shortid from 'shortid';
import axios from 'axios';

axios.defaults.xsrfHeaderName = "X-CSRFToken";

export class Offices extends Component {
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
      .delete(`/api/offices/${id}/`)
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
    this.fetchData(`/api/offices/`);;
  }
  render() {
    return (
      <Fragment>
        {
          !this.state.data ?
            <p>{ this.state.spinner }</p>
            : (
              <table className="table" style={ { marginTop: 80, marginBottom: 80, } }>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Office Name</th>
                    <th scope="col">Employees</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.data.map((office) => (
                      <Fragment key={ shortid.generate() }>
                        <tr>
                          <th scope="row">1</th>
                          <td>{ office.office_name }</td>
                          <td>{ office.peopleWorking }</td>
                          <td><button type="button" onClick={ e => this.handleDelete(e, office.id) } className="btn btn-outline-danger">Delete</button></td>
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

export default Offices;
