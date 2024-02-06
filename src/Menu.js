import React from 'react'
import logo from './images/logo.png';

import { Link } from "react-router-dom"
import "./Menu.css"
function Menu() {
  return (
    <>

      <nav className="navbar navbar-expand-lg bg-white" >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img src={logo} height={"50px"} alt='.'></img></Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/aboutus">About us</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Courses
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="./java">JAVA</Link></li>
                  <li><Link className="dropdown-item" to="/python">PYTHON</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/.net">.NET</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Certificate">Certificate</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Placement">Placement</Link>
              </li>
              <li className="nav-item">
                <Link className="btn bg-warning text-dark" to="/ContactUs">ContactUs</Link>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Menu


