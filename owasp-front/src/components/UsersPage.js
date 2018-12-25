import React from 'react'

class UsersPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      userData: []
    }
  }

  componentDidMount() {
    this.setState({isLoading: true})
    fetch('http://localhost:4100/submits')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        this.setState({ userData: data, isLoading: false })
      })
  }

  setHTML = (text) => {
    console.log(text)
    return { __html: text };
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
        {this.state.userData.map((item, index) => (
          <div key={index}>
            <p>-----------</p>
            <p>{item.name}</p>
            <p dangerouslySetInnerHTML={ this.setHTML(item.email) }></p>
            <p>{item.code}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default UsersPage