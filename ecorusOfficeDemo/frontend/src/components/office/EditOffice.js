import React, { Component } from 'react';

export class EditOffice extends Component {
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

  componentDidMount() {
    this.fetchData(`/api/persons/${this.props.match.params.id}`);
  }
  // handleEdit = (e, id) => {
  //   console.log(id);
  //   axios.post(`/api/persons/${this.props.match.params.id}/`)
  //     .then((res) => res)
  //     .then((data) => console.log(data.data))
  //     .catch((err) => console.log(err));
  // };
  render() {
    console.log(this.state.data);
    return (
      <div>
        <p>Employees</p>
      </div>
    );
  }
}

export default EditOffice;
