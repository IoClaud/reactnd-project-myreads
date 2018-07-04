import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NoMatch extends Component {
  render() {
    return (
      <div className= "error-page-wrapper">
        <div className= "error-page-content">
          <h1>oops, something went wrong</h1>
          <p>404</p>
          <Link className="close-search" to="/">
            Close
          </Link>
        </div>
      </div>
    )
  }
}

export default NoMatch
