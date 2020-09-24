import React, { Component, Fragment } from 'react';
import shortid from 'shortid';

export class Employees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      spinner: "Loading...",
    };
  }
  componentDidMount() {
    this.fetchData(`http://localhost:8000/api/persons/`);;
  }
  fetchData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  };

  render() {
    console.log(this.state.data);
    return (
      <Fragment style={ { overflow: 'auto' } }>
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
