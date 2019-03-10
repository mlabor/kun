import * as React from 'react'
import logo from './logo.svg'
import './App.css'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 3rem;
  color: red;
`
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title>
            Edit <code>src/App.js</code> and save to reload.
          </Title>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
