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
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit() {
    const name = this.state.name
    const email = this.state.email
    const code = this.state.code
    const data = {
      name, email, code
    }
    fetch('http://localhost:4100/submits', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => console.log(response.json()))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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