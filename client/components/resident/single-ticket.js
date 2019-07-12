import moment from 'moment'
import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {confirmTicket, rejectTicket, getTickets} from '../../store/resident'
import '../css/owner/ticket.scss'

const SingleTicket = props => {
  useEffect(() => {
    props.getTickets()
  }, [])
  const ticket = props.ticket.filter(
    tix => +tix.id === +props.match.params.ticketId
  )[0]
  if (ticket === undefined) {
    return <div>Loading...</div>
  }
  return (
    <div className="column single ticket">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            {/* <img src={ticket.imageUrl} /> */}
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-5">
                {/* #{ticket.id} - {ticket.status} */}
              </p>
              <p className="subtitle is-6">
                {/* Worker: {ticket.worker.firstName} {ticket.worker.lastName} */}
              </p>
              {/* <p className="subtitle">{props.issue}</p> */}
              {/* {actionArea} */}
            </div>
          </div>
          <div className="content">
            {/* {props.body} */}
            <br />
            {/* <p title={time.format('MMMM Do YYYY')}>Opened: {time.fromNow()}</p> */}
            {/* <p title={time.format('MMMM Do YYYY')}> */}
            {/* Last Updated: {updated.fromNow()} */}
            {/* </p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  ticket: state.resident.tickets
})

const mapDispatchToProps = dispatch => ({
  getTickets: () => dispatch(getTickets()),
  confirmTicket: id => dispatch(confirmTicket(id)),
  rejectTicket: id => dispatch(rejectTicket(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleTicket)
