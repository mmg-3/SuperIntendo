import React from 'react'
const phoneNumber = phoneStr =>
  phoneStr.slice(0, 3) + '-' + phoneStr.slice(3, 6) + '-' + phoneStr.slice(6)

const UnverifiedResident = props => {
  return (
    <div className="body">
      <div className="profile-media">
        <article className="media">
          <figure className="media-left">
            <p className="image is-128x128">
              <img className="is-rounded" src={props.photoUrl} />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>
                  {props.firstName} {props.lastName}
                </strong>{' '}
                <br />
                <p>
                  {props.buildingAddress} - {props.number}
                </p>
              </p>
            </div>
          </div>
        </article>
      </div>
      <div>
        <div className="columns is-half-desktop" />
        <div className="columns">
          <form className="form-ticket">
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Contact</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control is-expanded">
                    <input
                      className="input"
                      type="text"
                      value={props.firstName}
                      readOnly={true}
                    />
                  </p>
                </div>
                <div className="field">
                  <p className="control is-expanded">
                    <input
                      className="input"
                      type="text"
                      value={props.lastName}
                      readOnly={true}
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label" />
              <div className="field-body">
                <div className="field is-expanded">
                  <div className="field has-addons">
                    <p className="control">
                      <a className="button is-static">+1</a>
                    </p>
                    <p className="control is-expanded">
                      <input
                        className="input"
                        type="tel"
                        value={phoneNumber(props.phoneNumber)}
                        readOnly={true}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label" />
              <div className="field-body">
                <div className="field is-expanded">
                  <div className="field has-addons">
                    <p className="control is-expanded">
                      <input
                        className="input"
                        type="email"
                        value={props.user.email}
                        readOnly={true}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="columns">
          <form className="form-ticket">
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Address</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control is-expanded">
                    <input
                      className="input"
                      type="text"
                      placeholder="Address"
                      value={props.address1}
                      readOnly={true}
                    />
                  </p>
                </div>
                <div className="field">
                  <p className="control is-expanded">
                    <input
                      className="input"
                      type="text"
                      placeholder="Unit No."
                      value={props.address2}
                      readOnly={true}
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label" />
              <div className="field-body">
                <div className="field">
                  <p className="control is-expanded">
                    <input
                      className="input"
                      type="tel"
                      placeholder="City"
                      value={props.city}
                      readOnly={true}
                    />
                  </p>
                </div>
                <div className="field">
                  <p className="control is-expanded">
                    <input
                      className="input"
                      type="tel"
                      placeholder="State"
                      value={props.state}
                      readOnly={true}
                    />
                  </p>
                </div>
                <div className="field">
                  <p className="control is-expanded">
                    <input
                      className="input"
                      type="tel"
                      placeholder="Zipcode"
                      value={props.zipcode}
                      readOnly={true}
                    />
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="columns">
          <form className="form-ticket">
            <div className="field is-horizontal">
              <div className="field-label" />
              <a
                className="button is-success"
                onClick={() => props.verifyUser(props.bId, props.id)}
              >
                <span className="icon is-small">
                  <i className="fas fa-check" />
                </span>
                <span>Approve</span>
              </a>

              <a
                className="button is-danger is-outlined"
                onClick={() => props.rejectUser(props.bId, props.id)}
              >
                <span>Reject</span>
                <span className="icon is-small">
                  <i className="fas fa-times" />
                </span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UnverifiedResident
