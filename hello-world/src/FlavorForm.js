import React, { Component } from 'react';

class FlavorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: "lime"};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('a Flavor was submitted: ' + this.state.value);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Flavor Form: </h1>
        <label>
          Name:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" name="submit" value="Submit" />
      </form>
    );
  }
}

export default FlavorForm;
