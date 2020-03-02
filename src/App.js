import React, { Component } from 'react'
import Navigation from './components/NavBar/NavBar'
import Container from './container/Container'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Container />
      </div>
    )
  }
}

export default App