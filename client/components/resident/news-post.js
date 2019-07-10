import React from 'react'
import moment from 'moment'

export const NewsPost = props => {
  const time = moment(props.expDay)

  return (
    <div className="column">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={props.photoUrl} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-5">{props.title}</p>
              <p className="subtitle is-6">
                Author:{' '}
                {props.resident
                  ? `${props.resident.firstName} ${props.resident.lastName}`
                  : 'Management'}
              </p>
            </div>
          </div>
          <div className="content">
            {props.body}
            <br />
            <p className="exp">Expires: {time.fromNow()}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
