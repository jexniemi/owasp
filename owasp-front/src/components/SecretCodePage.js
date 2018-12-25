import React from 'react'

class SecretCodePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      code: ''
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    if (!window.localStorage.getItem('user')) {
      window.location.href = "http://localhost:3000/form";
    }
    if (JSON.parse(window.localStorage.getItem('user')).isAdmin) {
    fetch('http://localhost:4100/secretcode')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        this.setState({ code: data.winningcode, isLoading: false })
      })
    } else {
      window.location.href = "http://localhost:3000/form";
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <p>Loading....</p>
        </div>
      )
    }
    return (
      <div>
        <p>The winning code is: {this.state.code}</p>
      </div>
    )
  }
}

export default SecretCodePage