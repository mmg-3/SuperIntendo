import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './scss/core.scss'

const MainHome = props => {
  return (
    <div>
      <section className="hero is-fullheight is-default is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-5 is-offset-1 landing-caption">
                <h1 className="title is-1 is-bold is-spaced">
                  Property Management, Simplified.
                </h1>
                <h2 className="subtitle is-5 is-muted">
                  perform all the duties of a superintendent with few clicks
                </h2>
                <blockquote>
                  <Link
                    to="/signup"
                    className="button cta rounded primary-btn raised"
                  >
                    Get Started
                  </Link>
                </blockquote>
              </div>
              <div className="column is-5 is-offset-1">
                <figure className="image is-4by3">
                  <img
                    src="./images/illustrations/worker.svg"
                    alt="Description"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-foot mb-20">
          <div className="container">
            <div className="tabs is-centered">
              <ul>
                <li>
                  <img
                    className="partner-logo"
                    src="/images/illustrations/icons/fullstack-academy.png"
                  />
                </li>
                <li>
                  <img
                    className="partner-logo"
                    src="/images/illustrations/icons/react.png"
                  />
                </li>

                <li>
                  <img
                    className="partner-logo"
                    src="/images/illustrations/icons/postgresql-logo.png"
                  />
                </li>

                <li>
                  <img
                    className="partner-logo"
                    src="/images/illustrations/icons/redux.png"
                  />
                </li>
                <li>
                  <img
                    className="partner-logo"
                    src="/images/illustrations/icons/bulma-logo.png"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-feature-grey is-medium">
        <div className="container">
          <div className="title-wrapper has-text-centered">
            <h2 className="title is-2">For Everybody</h2>
            <h3 className="subtitle is-5 is-muted">works for every role</h3>
            <div className="divider is-centered" />
          </div>

          <div className="content-wrapper">
            <div className="columns">
              <div className="column is-one-third">
                <div
                  className="feature-card is-bordered has-text-centered revealOnScroll delay-1"
                  data-animation="fadeInLeft"
                >
                  <div className="card-title">
                    <h4>Owner</h4>
                  </div>
                  <div className="card-icon">
                    <img src="/images/illustrations/icons/owner.svg" />
                  </div>
                  <div className="card-text">
                    <blockquote>
                      For property manager to manage buildings and residents
                    </blockquote>
                  </div>
                  <div className="card-action">
                    <Link
                      to="/signup"
                      className="button btn-align-md accent-btn raised"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
              <div className="column">
                <div
                  className="feature-card is-bordered has-text-centered revealOnScroll delay-2"
                  data-animation="fadeInLeft"
                >
                  <div className="card-title">
                    <h4>Residents</h4>
                  </div>
                  <div className="card-icon">
                    <img src="/images/illustrations/icons/resident.svg" />
                  </div>
                  <div className="card-text">
                    <blockquote>
                      For tenant to inquire maintainances, access community news
                      board, and contact property manager
                    </blockquote>
                  </div>
                  <div className="card-action">
                    <Link
                      to="/signup"
                      className="button btn-align-md secondary-btn raised"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
              <div className="column">
                <div
                  className="feature-card is-bordered has-text-centered revealOnScroll delay-3"
                  data-animation="fadeInLeft"
                >
                  <div className="card-title">
                    <h4>Worker</h4>
                  </div>
                  <div className="card-icon">
                    <img src="/images/illustrations/icons/worker.svg" />
                  </div>
                  <div className="card-text">
                    <blockquote>
                      For contractor to find tasks, work on assignments, and get
                      paid
                    </blockquote>
                  </div>
                  <div className="card-action">
                    <Link
                      to="/signup"
                      className="button btn-align-md primary-btn raised"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section is-medium">
        <div className="container">
          <div className="columns">
            <div className="column is-centered-tablet-portrait">
              <h1 className="title section-title">
                You're here because you want peace of mind
              </h1>
              <h3 className="subtitle is-4 is-muted">
                increase producitity and minimize overhead
              </h3>
              <div className="divider" />
            </div>
            <div className="column is-8 mt-60">
              <article className="media icon-box">
                <figure className="media-left">
                  <blockquote className="image">
                    <img src="/images/illustrations/icons/laptop-globe.svg" />
                  </blockquote>
                </figure>
                <div className="media-content mt-50">
                  <div className="content">
                    <blockquote>
                      <span className="icon-box-title">
                        Seamless Integration on Cloud
                      </span>
                      <span className="icon-box-text">
                        all updates are real time, and we safely store your data
                        on the cloud. no more loosing important files. track all
                        history online.
                      </span>
                    </blockquote>
                  </div>
                </div>
              </article>
              <article className="media icon-box">
                <figure className="media-left">
                  <blockquote className="image">
                    <img src="/images/illustrations/icons/doc-sync.svg" />
                  </blockquote>
                </figure>
                <div className="media-content mt-50">
                  <div className="content">
                    <blockquote>
                      <span className="icon-box-title">One Place for All</span>
                      <span className="icon-box-text">
                        manage tenants, store building info, track maintainance
                        tasks, contact contractor, pay for tasks done ... this
                        is the ultimate place for all your needs
                      </span>
                    </blockquote>
                  </div>
                </div>
              </article>
              <article className="media icon-box">
                <figure className="media-left">
                  <blockquote className="image">
                    <img src="/images/illustrations/icons/mobile-feed.svg" />
                  </blockquote>
                </figure>
                <div className="media-content mt-50">
                  <div className="content">
                    <blockquote>
                      <span className="icon-box-title">
                        Cross Device Synchronisation
                      </span>
                      <span className="icon-box-text">
                        whether you are on desktop or on mobile, access
                        SuperIntendo from anywhere. you could check ticket
                        status or update tenant info from the comfort of your
                        office or on the go.
                      </span>
                    </blockquote>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-feature-grey is-medium">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="has-text-centered">
                <img
                  className="pushed-image"
                  src="https://i.imgur.com/7FMmhiq.png"
                />
              </div>
            </div>
          </div>

          <div className="title-wrapper has-text-centered">
            <h2 className="title is-2">One Platform</h2>
            <h3 className="subtitle is-5 is-muted">to rule them all</h3>
          </div>

          <blockquote className="has-text-centered mt-20">
            <Link
              to="/signup"
              className="button cta is-large rounded secondary-btn raised"
            >
              Get Started
            </Link>
          </blockquote>
        </div>
      </section>

      <section className="section is-medium section-secondary">
        <div className="container">
          <div className="title-wrapper has-text-centered">
            <h2 className="title is-2 light-text is-spaced">Meet the Team</h2>
            <h3 className="subtitle is-5 light-text">
              We are the Caulipizzas, full-stack developers.
            </h3>
          </div>

          <div className="content-wrapper">
            <div className="columns is-vcentered">
              <div className="column is-4">
                <figure className="testimonial">
                  <blockquote>I constantly do style updates.</blockquote>
                  <div className="author">
                    <img
                      src="https://media.licdn.com/dms/image/C5603AQHmHAcBEZYuQw/profile-displayphoto-shrink_200_200/0?e=1568246400&v=beta&t=rgSo-7vj5em4TFHK-Xd5YWoDWpmLiNp18JCeOGh2zB0"
                      alt=""
                    />
                    <h5>Constance K.</h5>
                    <span>@republicofkang</span>
                  </div>
                </figure>
              </div>
              <div className="column is-4">
                <figure className="testimonial">
                  <blockquote>
                    I love working on the big backends and enjoy thinking up
                    complicated solutions to problems that no one has.
                  </blockquote>
                  <div className="author">
                    <img
                      src="https://media.licdn.com/dms/image/C4D03AQGkhD1zOz60Kw/profile-displayphoto-shrink_800_800/0?e=1568246400&v=beta&t=JOBV_Rj3tY2jfjYFf_GMnHRN9IypkDX-9R3xFsBoE3Q"
                      alt=""
                    />
                    <h5>Manuel B.</h5>
                    <span>@marvinody</span>
                  </div>
                </figure>
              </div>
              <div className="column is-4">
                <figure className="testimonial">
                  <blockquote>I have nothing to say.</blockquote>
                  <div className="author">
                    <img
                      src="https://media.licdn.com/dms/image/C4D03AQHZ9x4BpHXXKA/profile-displayphoto-shrink_800_800/0?e=1568246400&v=beta&t=gMAJOo-vUK7IdQ3LZgpB0Qu978Ph5YSuBs_D5gbAf7M"
                      alt=""
                    />
                    <h5>Vivian T.</h5>
                    <span>@vivtong</span>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light-grey is-medium">
        <div className="container">
          <div className="title-wrapper has-text-centered">
            <h2 className="title is-2 is-spaced">Drop us a line or two</h2>
            <h3 className="subtitle is-5 is-muted">
              We'd love to hear from You
            </h3>
            <div className="divider is-centered" />
          </div>

          <div className="content-wrapper">
            <div className="columns">
              <div className="column is-6 is-offset-3">
                <form>
                  <div className="columns is-multiline">
                    <div className="column is-6">
                      <input
                        className="input is-medium"
                        type="text"
                        placeholder="Enter your Name"
                      />
                    </div>
                    <div className="column is-6">
                      <input
                        className="input is-medium"
                        type="email"
                        placeholder="Enter your Email"
                      />
                    </div>
                    <div className="column is-12">
                      <textarea
                        className="textarea"
                        rows="10"
                        placeholder="Write someting ..."
                      />
                    </div>
                    <div className="form-footer has-text-centered mt-10">
                      <button
                        type="submit"
                        className="button cta is-large primary-btn raised is-clear"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    createTicket: ticket => {
      dispatch(createTicketThunk(ticket))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainHome)
