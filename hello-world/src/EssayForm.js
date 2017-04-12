import React, { Component } from 'react';

class EssayForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      value: 'Please write an assay about your favorite DOM element.'
    };
  }

  handleSubmit() {
    alert("A messay was submitted: " + this.state.value);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Essay Form:</h1>
        <label>
          Name:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input name="submit" type="submit" />
      </form>
    );
  }
}

export default EssayForm;
