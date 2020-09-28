import React, { Component, Fragment } from 'react';
import axios from 'Axios';
import shortid from 'shortid';

axios.defaults.xsrfHeaderName = "X-CSRFToken";

export class EditOffice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      spinner: "Loading...",
      office_name: '',
      employee: '',
      remove: false,
    };
  }
  fetchData = (url) => {
    fetch(url).then((res) => res.json()).then((data) => this.setState({ data }));
  };

  componentDidMount() {
    this.fetchData(`/api/offices/${this.props.match.params.id}/`);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  onChangeRemove = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
    this.setState({ remove: true });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { office_name, employee, remove } = this.state;
    if (remove && employee !== null) {
      axios.post(`/api/offices/${this.props.match.params.id}/finishedWorkingFor/`, { office_name, employee })
        .then((res) => res.json())
        .catch((err) => console.log(err));
    }
    if (!remove && employee !== null) {
      axios.post(`/api/offices/${this.props.match.params.id}/startWorkingFor/`, { office_name, employee })
        .then((res) => res.json())
        .catch((err) => console.log(err));
    }

    axios.put(`/api/offices/${this.props.match.params.id}/`, { office_name, })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    window.location.reload();
  };
  render() {
    if (this.state.data !== null) {
      console.log(this.state.data.peopleWorking);
    }

    const { office_name, employee } = this.state;
    return (
      <>
        {
          this.state.data ?
            (
              <div className="card card-body mt-4 mb-4">
                <h2>Office</h2>
                <form onSubmit={ this.onSubmit }>
                  <div className="form-group">
                    <label>Office name</label>
                    <input
                      type="text"
                      name="office_name"
                      value={ office_name }
                      placeholder={ `${this.state.data.office_name}` }
                      className="form-control"
                      onChange={ this.onChange }
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Add employee</label>
                    <input
                      type="text"
                      name="employee"
                      value={ employee }
                      className="form-control"
                      onChange={ this.onChange }
                    />
                  </div>
                  <div className="form-group">
                    <label>Remove employee</label>
                    <input
                      type="text"
                      name="employee"
                      value={ employee }
                      className="form-control"
                      onChange={ this.onChangeRemove }
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            ) : (<p>{ this.state.spinner }</p>)
        }
        {
          this.state.data && this.state.data.peopleWorking !== null &&
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Current employees</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.data.peopleWorking.map((employee, idx) => (
                  <Fragment key={ shortid.generate() }>
                    <tr>
                      <th scope="row">{ idx + 1 }</th>
                      <td>{ employee }</td>
                    </tr>
                  </Fragment>
                ))
              }
            </tbody>
          </table>
        }
      </>
    );
  }
}

export default EditOffice;
