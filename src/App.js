import React from 'react'
import { Router, Link } from '@reach/router'
import './App.css'
import Search from './Search'
import Details from './Details'

export default function App() {
  return (
    <div className="app">
      <Link to="/">
        <header>
          <h1>RickFinder</h1>
        </header>
      </Link>

      <Router>
        <Search path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  )
}
