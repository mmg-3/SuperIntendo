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
          <Link className="navbar-item" to="/">
            <img src="https://serving.photos.photobox.com/417870350dcbba6bc5b20e24b53c78ce07974175fdc30435a49d5a584bf5397931b9f0af.jpg" />
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
                <Link className="navbar-item">Home</Link>

                <Link className="navbar-item" to="/buildings">
                  Buildings
                </Link>
                <div className="navbar-item has-dropdown is-hoverable">
                  <Link to="/tickets" className="navbar-link">
                    Tickets
                  </Link>

                  <div className="navbar-dropdown">
                    <Link className="navbar-item">Actions Needed</Link>
                    <Link className="navbar-item">Closed Tickets</Link>
                  </div>
                </div>

                <div className="navbar-item has-dropdown is-hoverable">
                  <Link className="navbar-link">Users</Link>

                  <div className="navbar-dropdown">
                    <Link className="navbar-item">Residents</Link>
                    <Link className="navbar-item">Workers</Link>
                    <Link className="navbar-item">Admin</Link>
                  </div>
                </div>
                <Link className="navbar-item">FAQs</Link>
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
                <Link className="navbar-item">Home</Link>

                <Link className="navbar-item">My Account</Link>
                <div className="navbar-item has-dropdown is-hoverable">
                  <Link className="navbar-link">Tickets</Link>

                  <div className="navbar-dropdown">
                    <Link className="navbar-item">Current Ticket</Link>
                    <Link className="navbar-item">Archived Tickets</Link>
                  </div>
                </div>
                <Link className="navbar-item">News</Link>
                <Link className="navbar-item">FAQs</Link>
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
                <Link className="navbar-item">Home</Link>

                <Link className="navbar-item">My Account</Link>
                <div className="navbar-item has-dropdown is-hoverable">
                  <Link className="navbar-link">Tickets</Link>

                  <div className="navbar-dropdown">
                    <Link className="navbar-item">Current Ticket</Link>
                    <Link className="navbar-item">Archived Tickets</Link>
                  </div>
                </div>
                <Link className="navbar-item">Payment</Link>
                <Link className="navbar-item">FAQs</Link>
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
              <Link className="navbar-item">Home</Link>

              <Link className="navbar-item">Pricing</Link>
              <div className="navbar-item has-dropdown is-hoverable">
                <Link className="navbar-link">Documentation</Link>

                <div className="navbar-dropdown">
                  <Link className="navbar-item">For Owner</Link>
                  <Link className="navbar-item">For Resident</Link>
                  <Link className="navbar-item">For Worker</Link>
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
