import React, { Component } from 'react';

class NameForm extends Component {
  constructor(props) {
      super(props);
      this.state = {value: ""};
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
  }

  handleChange(event) {
    this.setState({value: event.target.value.toUpperCase()});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Name Form:</h1>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default NameForm;
