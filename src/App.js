import "normalize.css"

import React, { Component } from 'react'

import About from './About'
import Main from './Main'
import { Provider } from 'rebass'
import { injectGlobal } from 'styled-components'
import logo from './logo.svg'

injectGlobal`
  @font-face {
      font-family: 'Baskerville';
      src: url('../fonts/Baskerville.ttf');
      src: url('../fonts/Baskerville.woff') format('woff');
    }
  @font-face {
    font-family: 'Baskerville';
    src: url('../fonts/Baskerville-Bold.ttf');
    src: url('../fonts/Baskerville-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }
  
  body {
    font-family: 'Baskerville', 'Arial', 'Sans-serif';
  }
`

const fonts = {
  sans: '"Baskerville", Helvetica, sans-serif',
  mono: '"Pinyon Script", cursive'
}

const theme = {
  fonts,
  fontFamily: fonts.mono
}

class App extends Component {
  render() {
    return (
      <Provider
        theme={theme}>
        <div className="App">
          <Main />
          <About/>
        </div>
      </Provider>
    );
  }
}

export default App;
