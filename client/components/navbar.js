/* eslint-disable complexity */
import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn, isResident, isOwner, isWorker}) => {
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src="/images/superintendo.jpg" />
          </Link>

          <Link
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </Link>
        </div>
        {isLoggedIn &&
          isOwner && (
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <Link to="/home" className="navbar-item">
                  Home
                </Link>

                <Link to="/buildings" className="navbar-item">
                  Buildings
                </Link>
                <div className="navbar-item has-dropdown is-hoverable">
                  <Link to="/tickets" className="navbar-link">
                    Tickets
                  </Link>

                  <div className="navbar-dropdown">
                    <Link className="navbar-item" to="/tickets#actions-needed">
                      Actions Needed
                    </Link>
                    <Link className="navbar-item" to="/tickets#closed">
                      Closed Tickets
                    </Link>
                  </div>
                </div>

                <div className="navbar-item has-dropdown is-hoverable">
                  <Link to="/users" className="navbar-link">
                    Users
                  </Link>

                  <div className="navbar-dropdown">
                    <Link to="/residents" className="navbar-item">
                      Residents
                    </Link>
                    <Link to="/workers" className="navbar-item">
                      Workers
                    </Link>
                  </div>
                </div>
                <Link to="/faqs" className="navbar-item">
                  FAQs
                </Link>
              </div>

              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <Link
                      className="button is-light"
                      to="#"
                      onClick={handleClick}
                    >
                      Log out
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        {isLoggedIn &&
          isResident && (
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <Link to="/home" className="navbar-item">
                  Home
                </Link>
                <Link to="/my-account" className="navbar-item">
                  My Account
                </Link>
                <div className="navbar-item has-dropdown is-hoverable">
                  <Link to="/my-tickets" className="navbar-link">
                    Tickets
                  </Link>
                  <div className="navbar-dropdown">
                    <Link to="/my-tickets/current" className="navbar-item">
                      Current Tickets
                    </Link>
                    <Link to="/my-tickets/archived" className="navbar-item">
                      Archived Tickets
                    </Link>
                    <Link
                      to="/my-tickets/submit-ticket"
                      className="navbar-item"
                    >
                      Submit a New Ticket
                    </Link>
                  </div>
                </div>
                <div className="navbar-item has-dropdown is-hoverable">
                  <Link to="/news" className="navbar-link">
                    News
                  </Link>
                  <div className="navbar-dropdown">
                    <Link to="/news/post" className="navbar-item">
                      Post News
                    </Link>
                    <Link to="/news" className="navbar-item">
                      View News
                    </Link>
                  </div>
                </div>
                <Link to="/faqs" className="navbar-item">
                  FAQs
                </Link>
              </div>

              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <Link
                      className="button is-light"
                      to="#"
                      onClick={handleClick}
                    >
                      Log out
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        {isLoggedIn &&
          isWorker && (
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <Link to="/home" className="navbar-item">
                  Home
                </Link>
                <Link to="/my-account" className="navbar-item">
                  My Account
                </Link>
                <div className="navbar-item has-dropdown is-hoverable">
                  <Link to="/tickets" className="navbar-link">
                    Tickets
                  </Link>

                  <div className="navbar-dropdown">
                    <Link to="/tickets/new" className="navbar-item">
                      New Tickets
                    </Link>
                    <Link to="/tickets/current" className="navbar-item">
                      Current Tickets
                    </Link>
                    <Link to="/tickets/completed" className="navbar-item">
                      Completed Tickets
                    </Link>
                  </div>
                </div>
                <Link to="/payment" className="navbar-item">
                  Payment
                </Link>
                <Link to="/faqs" className="navbar-item">
                  FAQs
                </Link>
              </div>

              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <Link
                      className="button is-light"
                      to="#"
                      onClick={handleClick}
                    >
                      Log out
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        {!isLoggedIn && (
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Link className="navbar-item" to="/">
                Home
              </Link>

              <div className="navbar-item has-dropdown is-hoverable">
                <Link className="navbar-link">Documentation</Link>

                <div className="navbar-dropdown">
                  <a className="navbar-item" href="#owner">
                    For Owner
                  </a>
                  <a className="navbar-item" href="#resident">
                    For Resident
                  </a>
                  <a className="navbar-item" href="#workers">
                    For Worker
                  </a>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <Link className="navbar-link">More</Link>

                <div className="navbar-dropdown">
                  <Link className="navbar-item">About Us</Link>
                  <Link className="navbar-item">Contact</Link>
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <Link className="button is-primary" to="/signup">
                    <strong>Sign up</strong>
                  </Link>
                  <Link className="button is-light" to="/login">
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        {isLoggedIn &&
          !isOwner &&
          !isResident &&
          !isWorker && (
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <Link className="navbar-item" to="/">
                  Home
                </Link>
                <Link className="navbar-item" to="/home">
                  My Account
                </Link>

                <div className="navbar-item has-dropdown is-hoverable">
                  <Link className="navbar-link">Documentation</Link>

                  <div className="navbar-dropdown">
                    <Link className="navbar-item">For Owner</Link>
                    <Link className="navbar-item">For Resident</Link>
                    <Link className="navbar-item">For Worker</Link>
                  </div>
                </div>

                <Link className="navbar-item">About Us</Link>
                <Link className="navbar-item">Contact</Link>
              </div>

              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <Link
                      className="button is-light"
                      to="#"
                      onClick={handleClick}
                    >
                      Log out
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
      </nav>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    isResident: state.user.isResident,
    isOwner: state.user.isOwner,
    isWorker: state.user.isWorker
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
