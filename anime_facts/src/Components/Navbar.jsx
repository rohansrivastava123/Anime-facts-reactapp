import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className="items">
        <ul className="navbar">
          <Link className="link" to="/">
            <li> Home </li>
          </Link>
          <Link className="link" to="/Home">
            <li> Anime's </li>
          </Link>
          <Link className="link" to="/">
            <li> Team </li>
          </Link>
          <Link className="link" to="/">
            <li> Story </li>
          </Link>
          <Link className="link" to="/">
            <li> Contact </li>
          </Link>
        </ul>
      </div>
  )
}
export default Navbar
