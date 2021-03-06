import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import shortid from 'shortid';
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

export class Offices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      spinner: "Loading...",
    };
  }

  fetchData = (url) => {
    fetch(url).then((res) => res.json()).then((data) => this.setState({ data }));
  };

  handleDelete = (e, id) => {
    axios
      .delete(`/api/offices/${id}/`, config)
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
    this.fetchData(`/api/offices`);
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
                    <th scope="col">Employee Names</th>
                    <th scope="col" colSpan="2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.data.map((office, idx) => (
                      <Fragment key={ shortid.generate() }>
                        <tr>
                          <th scope="row">{ idx + 1 }</th>
                          <td>{ office.office_name }</td>
                          <td>{ office.peopleWorking }</td>
                          <td style={ { whiteSpace: 'nowrap' } }><button type="button" onClick={ e => this.handleDelete(e, office.id) } className="btn btn-outline-danger">Delete</button></td>
                          <td style={ { whiteSpace: 'nowrap', } }>
                            <Link to={ `/dashboard/office/${office.id}` } className="btn btn-outline-info">Edit</Link>
                          </td>
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
