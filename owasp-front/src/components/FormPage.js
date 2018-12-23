import React from 'react';

class FormPage extends React.Component {

  render() {
    return (
      <div>
        <form>
          <h1>Submit your details</h1>
          <div>
            <label>Name</label>
            <input label='Username'/>
          </div>
          <div>
            <label>Secret code</label>
            <input label='Secret code'/>
          </div>
          <button>Log in</button>
        </form>
      </div>
    )
  }
}

export default FormPage