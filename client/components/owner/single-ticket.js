import moment from 'moment'
import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {
  approveTicket,
  closeTicket,
  getTicket,
  rejectTicket
} from '../../store/owner'
import '../css/owner/ticket.scss'
const needSelfActionList = ['pending', 'confirmed']
const needOtherActionList = ['assigned', 'in-progress', 'finished']
const noActionList = ['closed']
const coolButton = (name, click) => {
  return (
    <a
      className="button is-success"
      onClick={e => {
        e.stopPropagation()
        click()
      }}
    >
      <span className="icon is-small">
        <i className="fas fa-check" />
      </span>
      <span>{name}</span>
    </a>
  )
}

const notCoolButton = (name, click) => {
  return (
    <a
      className="button is-danger is-outlined"
      onClick={e => {
        e.stopPropagation()
        click()
      }}
    >
      <span className="icon is-small">
        <i className="fas fa-times" />
      </span>
      <span>{name}</span>
    </a>
  )
}

const SingleTicket = props => {
  useEffect(() => {
    props.getTicket(props.match.params.id)
  }, [])
  if (!props.id) {
    return (
      <div className="column single ticket">
        <span>Loading ticket....</span>
      </div>
    )
  }
  const resName = props.resident.firstName + ' ' + props.resident.lastName
  const aptUnit = props.apartment.unitNumber
  const time = moment(props.createdAt)
  const updated = moment(props.updatedAt)
  let statusMsg = 'Archived'
  let actionArea = <div />
  if (needSelfActionList.includes(props.status)) {
    statusMsg = 'Need Action'
    if (props.status === 'pending') {
      actionArea = (
        <div>
          {coolButton('Approve', () => props.approveTicket(props.id))}
          {notCoolButton('Reject', () => props.rejectTicket(props.id))}
        </div>
      )
    } else if (props.status === 'confirmed') {
      actionArea = (
        <div>{coolButton('Close', () => props.closeTicket(props.id))}</div>
      )
    }
  } else if (needOtherActionList.includes(props.status)) {
    statusMsg = 'Waiting on Others'
  }
  return (
    <div className="column single ticket">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={props.photoUrl} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-5">
                #{props.id} - {props.status} - {statusMsg}
              </p>
              <p className="subtitle is-6">
                By: {resName} - {aptUnit}
              </p>
              <p className="subtitle">{props.issue}</p>
              {actionArea}
            </div>
          </div>
          <div className="content">
            {props.body}
            <br />
            <p title={time.format('MMMM Do YYYY')}>Opened: {time.fromNow()}</p>
            <p title={time.format('MMMM Do YYYY')}>
              Last Updated: {updated.fromNow()}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  ...state.owner.selectedTicket
})

const mapDispatchToProps = dispatch => ({
  getTicket: id => dispatch(getTicket(id)),
  approveTicket: id => dispatch(approveTicket(id)),
  rejectTicket: id => dispatch(rejectTicket(id)),
  closeTicket: id => dispatch(closeTicket(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleTicket)
