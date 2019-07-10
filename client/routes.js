import PropTypes from 'prop-types'
import {Component, default as React} from 'react'
import {connect} from 'react-redux'
import {Route, Switch, withRouter} from 'react-router-dom'
import {Login, Signup, UserHome} from './components'
import AllBuildings from './components/owner/all-buildings'
import SingleBuilding from './components/owner/single-building'
import OwnerSingleTicket from './components/owner/single-ticket'
import OwnerTickets from './components/owner/tickets'
import Workers from './components/owner/workers'
import NewResident from './components/resident/new-resident'
import ResidentNews from './components/resident/news'
import ResidentProfile from './components/resident/profile'
import ResidentTickets from './components/resident/tickets'
import MainHome from './components/us/home-main'
import Pricing from './components/us/pricing'
import AllTickets from './components/worker/all-tickets'
import NewWorker from './components/worker/new-worker'
import AllResidents from './components/owner/all-residents'
import {me} from './store'
import AllUsers from './components/owner/all-users'
import SingleResident from './components/owner/single-resident'
import FAQ from '../client/components/us/faq'

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

        <Route path="/pricing" component={Pricing} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/faqs" component={FAQ} />
        <Route exact path="/" component={MainHome} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={UserHome} />
            <Route path="/new-resident" exact component={NewResident} />
            {isOwner && (
              <Switch>
                <Route path="/buildings" exact component={AllBuildings} />
                <Route path="/workers" exact component={Workers} />
                <Route
                  path="/buildings/:id/residents/:residentId"
                  exact
                  component={SingleResident}
                />
                <Route path="/buildings/:id" component={SingleBuilding} />
                <Route path="/tickets" exact component={OwnerTickets} />
                <Route
                  path="/tickets/:id"
                  exact
                  component={OwnerSingleTicket}
                />
                <Route path="/workers" exact component={Workers} />
                <Route path="/residents" exact component={AllResidents} />
                <Route path="/users" exact component={AllUsers} />
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
