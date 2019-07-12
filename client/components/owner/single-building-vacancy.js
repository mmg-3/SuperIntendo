import React from 'react'

export const SingleBuildingVacancy = props => {
  return (
    <div className="body">
      <div>
        {props.vacancies.length === 0 ? (
          <div>This is property is fully occupied.</div>
        ) : (
          <div>
            <h3 className="title is-6">
              Vacant Apartments{' '}
              <span className="tag is-warning">attention</span>
            </h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Apartment No.</th>
                </tr>
              </thead>
              <tbody>
                {props.vacancies.map(apartment => (
                  <tr key={apartment.id}>
                    <th>{apartment.unitNumber}</th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default SingleBuildingVacancy
