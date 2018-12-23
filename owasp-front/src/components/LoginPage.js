import React from 'react';

class LoginPage extends React.Component {

  render() {
    return (
      <div>
        <label>Username</label>
        <input label='Username'/>
        <label>Password</label>
        <input label='Password'/>
        <button>Log in</button>
      </div>
    )
  }
}

export default LoginPage