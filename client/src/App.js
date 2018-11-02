import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Profile from './pages/Profile/Profile'
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
            <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800,900" rel="stylesheet" />
          </Helmet>
          <a href='#skip' id='skip-nav'>{"Skip Nav"}</a>
          <div id='site-content'>
            <a id='skip'>{''}</a>
            <Header />
            <Switch>
              <Route path="/profile/:id" component={Profile} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
