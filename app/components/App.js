import React from 'react'
import PasswordInput from './PasswordInput'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {info: 'getting from express..'}
  }

componentDidMount() {
  fetch('https://peaceful-badlands-88229.herokuapp.com/details')
    .then(res => res.json())
    .then(res => this.setState({info:res.info}))
}

  render() {
    return <div>
      <h1>hello world</h1>
      <label>example component</label>
      <PasswordInput />
      <h3>{this.state.info}</h3>
    </div>
  }

}
