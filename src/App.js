import React, { Component } from 'react'
import Navbar from './components/NavBar/NavBar'
import Container from './container/Container'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Container />
      </div>
    )
  }
}

export default App