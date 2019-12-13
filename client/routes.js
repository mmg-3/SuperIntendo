import PropTypes from 'prop-types'
import {Component, default as React} from 'react'
import {connect} from 'react-redux'
import {Route, Switch, withRouter} from 'react-router-dom'
import FAQ from '../client/components/us/faq'
import {Login, Signup, UserHome} from './components'
import AllBuildings from './components/owner/all-buildings'
import AllResidents from './components/owner/all-residents'
import AllUsers from './components/owner/all-users'
import SingleBuilding from './components/owner/single-building'
import OwnerSingleTicket from './components/owner/single-ticket'
import OwnerTickets from './components/owner/tickets'
import Workers from './components/owner/workers'
import NewResident from './components/resident/new-resident'
import ResidentNews from './components/resident/news'
import NewsNew from './components/resident/news-new'
import ResidentProfile from './components/resident/profile'
import TicketArchived from './components/resident/ticket-archived'
import TicketCurrent from './components/resident/ticket-current'
import TicketNew from './components/resident/ticket-new'
import ResidentTickets from './components/resident/tickets'
import MainHome from './components/us/home-main'
import AllTickets from './components/worker/all-tickets'
import NewWorker from './components/worker/new-worker'
import WorkerTicketCompleted from './components/worker/ticket-completed'
import WorkerTicketCurrent from './components/worker/ticket-current'
import WorkerTicketNew from './components/worker/ticket-new'
import WorkerProfile from './components/worker/worker-profile'
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

        <Route exact path="/" component={MainHome} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={UserHome} />
            <Route path="/faqs" component={FAQ} />
            <Route path="/new-resident" exact component={NewResident} />
            {isOwner && (
              <Switch>
                <Route path="/buildings" exact component={AllBuildings} />
                <Route path="/workers" exact component={Workers} />
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
                <Route path="/my-tickets" exact component={ResidentTickets} />
                <Route path="/my-account" exact component={ResidentProfile} />
                <Route path="/news" exact component={ResidentNews} />
                <Route path="/news/post" exact component={NewsNew} />
                <Route
                  path="/my-tickets/current"
                  exact
                  component={TicketCurrent}
                />
                <Route
                  path="/my-tickets/archived"
                  exact
                  component={TicketArchived}
                />
                <Route
                  path="/my-tickets/submit-ticket"
                  exact
                  component={TicketNew}
                />
                <Route path="/my-tickets/:ticketId" />
                <Route path="/my-tickets/:ticketId" />
              </Switch>
            )}
            {isWorkerVerified && (
              <Switch>
                <Route path="/my-account" exact component={WorkerProfile} />
                <Route path="/tickets" exact component={AllTickets} />
                <Route path="/tickets/new" exact component={WorkerTicketNew} />
                <Route
                  path="/tickets/current"
                  exact
                  component={WorkerTicketCurrent}
                />
                <Route
                  path="/tickets/completed"
                  exact
                  component={WorkerTicketCompleted}
                />
                <Route path="/payment" />
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
