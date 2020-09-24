import React, { Component, Fragment } from 'react';
import shortid from 'shortid';

export class Offices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      spinner: "Loading...",
    };
  }
  componentDidMount() {
    this.fetchData(`http://localhost:8000/api/offices/`);;
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
              <table className="table" style={ { marginTop: 80, marginBottom: 80, } }>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Office Name</th>
                    <th scope="col">Employees</th>
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
