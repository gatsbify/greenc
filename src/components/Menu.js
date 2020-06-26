import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={props.onToggleMenu} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/landing">
            Global Partnerships
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/generic">
            Enviromental
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/elements">
            Investment
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/">
            Digital Development
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/landing">
            B2B Online
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/generic">
            Compliance
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/elements">
            Social Development
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/landing">
            Ai R&amp;D
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/generic">
            Operations
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/elements">
            About
          </Link>
        </li>
      </ul>
      <ul className="actions vertical">
        <li>
          <a href="#" className="button special fit">
            Get Started
          </a>
        </li>
        <li>
          <a href="#" className="button fit">
            Log In
          </a>
        </li>
      </ul>
    </div>
    <a className="close" onClick={props.onToggleMenu} href="javascript:;">
      Close
    </a>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
