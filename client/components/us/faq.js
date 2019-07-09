import React from 'react'
import {connect} from 'react-redux'

const FAQ = props => {
  return (
    <div>
      <div className="divider is-centered is-spacer" />

      <h2 className="title is-light is-semibold has-text-centered is-spaced">
        FAQ
      </h2>
      <h4 className="subtitle is-6 is-light has-text-centered is-compact">
        Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea
        labore detraxit. Primis mediocrem necessitatibus an vis. Ut sea pertinax
        perpetua, eruditi volumus quaestio ex mel, has ei tota homero.
      </h4>

      <div className="content-wrapper is-large">
        <div className="columns">
          <div className="column is-5 is-offset-1">
            <div className="accordion">
              <div className="accordion-option">
                <input
                  type="checkbox"
                  id="toggle1"
                  className="accordion-toggle"
                />
                <label className="accordion-title" htmlFor="toggle1">
                  What is Blockchain ?
                </label>
                <div className="accordion-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
                  </p>
                </div>
              </div>

              <div className="accordion-option">
                <input
                  type="checkbox"
                  id="toggle2"
                  className="accordion-toggle"
                />
                <label className="accordion-title" htmlFor="toggle2">
                  What is ICO ?
                </label>
                <div className="accordion-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
                  </p>
                </div>
              </div>

              <div className="accordion-option">
                <input
                  type="checkbox"
                  id="toggle3"
                  className="accordion-toggle"
                />
                <label className="accordion-title" htmlFor="toggle3">
                  Where to get the Whitepaper ?
                </label>
                <div className="accordion-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
                  </p>
                </div>
              </div>

              <div className="accordion-option">
                <input
                  type="checkbox"
                  id="toggle4"
                  className="accordion-toggle"
                />
                <label className="accordion-title" htmlFor="toggle4">
                  What is Krypton Core Innovation ?
                </label>
                <div className="accordion-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
                  </p>
                </div>
              </div>

              <div className="accordion-option">
                <input
                  type="checkbox"
                  id="toggle5"
                  className="accordion-toggle"
                />
                <label className="accordion-title" htmlFor="toggle5">
                  When will be the platform released ?
                </label>
                <div className="accordion-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="column is-5">
            <div className="accordion">
              <div className="accordion-option">
                <input
                  type="checkbox"
                  id="toggle6"
                  className="accordion-toggle"
                />
                <label className="accordion-title" htmlFor="toggle6">
                  How much tokens will be sold ?
                </label>
                <div className="accordion-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
                  </p>
                </div>
              </div>

              <div className="accordion-option">
                <input
                  type="checkbox"
                  id="toggle7"
                  className="accordion-toggle"
                />
                <label className="accordion-title" htmlFor="toggle7">
                  What happens if Soft Cap isn't reached ?
                </label>
                <div className="accordion-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
                  </p>
                </div>
              </div>

              <div className="accordion-option">
                <input
                  type="checkbox"
                  id="toggle8"
                  className="accordion-toggle"
                />
                <label className="accordion-title" htmlFor="toggle8">
                  How much do you want to raise with the ICO ?
                </label>
                <div className="accordion-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
                  </p>
                </div>
              </div>

              <div className="accordion-option">
                <input
                  type="checkbox"
                  id="toggle9"
                  className="accordion-toggle"
                />
                <label className="accordion-title" htmlFor="toggle9">
                  When will the tokens be distributed ?
                </label>
                <div className="accordion-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
                  </p>
                </div>
              </div>

              <div className="accordion-option">
                <input
                  type="checkbox"
                  id="toggle10"
                  className="accordion-toggle"
                />
                <label className="accordion-title" htmlFor="toggle10">
                  Will their be Bounties ?
                </label>
                <div className="accordion-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider is-centered is-spacer" />
    </div>
  )
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(FAQ)
