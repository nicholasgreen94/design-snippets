import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>designsnippet</title>
            <meta name="description" content="designsnippet" />
            <meta http-equiv="x-ua-compatible" content="ie=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Helmet>
          <a href='#skip' id='skip-nav'>{"Skip Nav"}</a>
          <div id='site-content'>
            <a id='skip'>{''}</a>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
