import React from 'react'
import { Link, withRouter } from "react-router-dom";
import Conditional from '../user/conditional'
const Header = () => {
  return(
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Nishant's Coupons Hub</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Conditional/>
        </div>
      </div>
    </nav>
    </header>
  )
}

export default withRouter(Header);