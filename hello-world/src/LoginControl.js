import React, { Component } from 'react';

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function UserGeeting(props) {
  return <h1>Wellcome back!</h1>;
}

function GuestGeeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return <UserGeeting />;
  }
  return <GuestGeeting />;
}

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick= this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: true};
  }

  handleLoginClick() {
    this.setState({isLoggedIn:true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn:false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }

    return (
        <div>
          <Greeting isLoggedIn={isLoggedIn}/>
          {button}
        </div>
    );
  }
}

export default LoginControl;
