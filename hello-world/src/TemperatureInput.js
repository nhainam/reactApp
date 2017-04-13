import React, { Component } from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {temperature: ""};
  }

  handleInputChange(event) {
    this.props.onTemperatureChange(event.target.value);
  }

  render() {
    const scale = this.props.scale;
    const temperature = this.props.temperature;

    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}</legend>
        <input type="text" value={temperature}
          onChange={this.handleInputChange}/>
      </fieldset>
    );
  }
}
export default TemperatureInput;
