import React, { Component } from 'react';
import NameForm from './NameForm';
import EssayForm from './EssayForm';
import FlavorForm from './FlavorForm';
import Revervation from './Revervation';

class Forms extends Component {
  render() {
    return (
      <div>
        <NameForm />
        <EssayForm />
        <FlavorForm />
        <Revervation />
      </div>
    );
  }
}

export default Forms;
