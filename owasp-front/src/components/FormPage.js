import React from 'react';

class FormPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      code: '',
      submitted: false
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div>
        <form>
          <h1>Submit your details</h1>
          <div>
            <label>Name</label>
            <input
              name='name'
              onChange={this.handleChange}
              value={this.state.name}
              label='Name' 
            />
          </div>
          <div>
            <label>E-mail</label>
            <input 
              name='email'
              onChange={this.handleChange}
              value={this.state.email}
              label='E-mail'
            />
          </div>
          <div>
            <label>Code</label>
            <input 
              name='code'
              onChange={this.handleChange}
              value={this.state.code}
              label='Code'
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default FormPage