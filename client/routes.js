import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, Switch, withRouter} from 'react-router-dom'
import {Login, Signup, UserHome} from './components'
import AllBuildings from './components/owner/all-buildings'
import SingleBuilding from './components/owner/single-building'
import Workers from './components/owner/workers'
import NewResident from './components/resident/new-resident'
import ResidentNews from './components/resident/news'
import ResidentProfile from './components/resident/profile'
import ResidentTickets from './components/resident/tickets'
import AllTickets from './components/worker/all-tickets'
import NewWorker from './components/worker/new-worker'
import {me} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {
      isLoggedIn,
      isOwner,
      isResidentVerified,
      isResident,
      isWorkerVerified
    } = this.props
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={UserHome} />
            <Route path="/new-resident" exact component={NewResident} />
            {isOwner && (
              <Switch>
                <Route path="/buildings" exact component={AllBuildings} />
                <Route path="/workers" exact component={Workers} />
                <Route path="/buildings/:id" component={SingleBuilding} />
              </Switch>
            )}
            {isResidentVerified && (
              <Switch>
                <Route path="/tickets" exact component={ResidentTickets} />
                <Route path="/profile" exact component={ResidentProfile} />
                <Route path="/news" exact component={ResidentNews} />
              </Switch>
            )}
            {isWorkerVerified && (
              <Switch>
                <Route path="/tickets" exact component={AllTickets} />
              </Switch>
            )}
            {!isOwner &&
              !isResident && (
                <Switch>
                  <Route path="/new-worker" exact component={NewWorker} />}
                </Switch>
              )}
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  console.log(state.user)
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    isResidentVerified: state.user.isResidentVerified,
    isOwner: state.user.isOwner,
    isWorker: state.user.isWorker,
    isWorkerVerified: state.user.isWorkerVerified
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
