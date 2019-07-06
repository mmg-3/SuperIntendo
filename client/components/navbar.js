import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Navbar} from 'react-bulma-components/full'

const NavBar = ({handleClick, isLoggedIn, isResident, isOwner, isWorker}) => {
  const navbar = (
    <div>
      <Link to="/" />
    </div>
  )
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        {isLoggedIn &&
          isOwner && (
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item">Home</a>

                <a className="navbar-item" href="/buildings">
                  Buildings
                </a>
                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">Tickets</a>

                  <div className="navbar-dropdown">
                    <a className="navbar-item">Actions Needed</a>
                    <a className="navbar-item">Closed Tickets</a>
                  </div>
                </div>

                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">Users</a>

                  <div className="navbar-dropdown">
                    <a className="navbar-item">Residents</a>
                    <a className="navbar-item">Workers</a>
                    <a className="navbar-item">Admin</a>
                  </div>
                </div>
                <a className="navbar-item">FAQs</a>
              </div>

              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <a
                      className="button is-light"
                      href="#"
                      onClick={handleClick}
                    >
                      Log out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        {isLoggedIn &&
          isResident && (
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item">Home</a>

                <a className="navbar-item">My Account</a>
                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">Tickets</a>

                  <div className="navbar-dropdown">
                    <a className="navbar-item">Current Ticket</a>
                    <a className="navbar-item">Archived Tickets</a>
                  </div>
                </div>
                <a className="navbar-item">News</a>
                <a className="navbar-item">FAQs</a>
              </div>

              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <a
                      className="button is-light"
                      href="#"
                      onClick={handleClick}
                    >
                      Log out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        {isLoggedIn &&
          isWorker && (
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item">Home</a>

                <a className="navbar-item">My Account</a>
                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">Tickets</a>

                  <div className="navbar-dropdown">
                    <a className="navbar-item">Current Ticket</a>
                    <a className="navbar-item">Archived Tickets</a>
                  </div>
                </div>
                <a className="navbar-item">Payment</a>
                <a className="navbar-item">FAQs</a>
              </div>

              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <a
                      className="button is-light"
                      href="#"
                      onClick={handleClick}
                    >
                      Log out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        {!isLoggedIn && (
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">Home</a>

              <a className="navbar-item">Pricing</a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">Documentation</a>

                <div className="navbar-dropdown">
                  <a className="navbar-item">For Owner</a>
                  <a className="navbar-item">For Resident</a>
                  <a className="navbar-item">For Worker</a>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">More</a>

                <div className="navbar-dropdown">
                  <a className="navbar-item">About Us</a>
                  <a className="navbar-item">Contact</a>
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary" href="/signup">
                    <strong>Sign up</strong>
                  </a>
                  <a className="button is-light" href="/login">
                    Log in
                  </a>
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

export default connect(mapState, mapDispatch)(NavBar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
