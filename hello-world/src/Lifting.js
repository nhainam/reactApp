import React, { Component} from 'react';
import Calculator from './Calculator';

class Lifting extends Component {
  render() {
    return (
      <div>
        <h1>Lifting State Up:</h1>
        <Calculator />
        <hr />
      </div>
    );
  }
}
export default Lifting;
