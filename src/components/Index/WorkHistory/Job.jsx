import React from 'react'
import PropTypes from 'prop-types'

function Job(props) {
  return (
    <div className='job'>
      <div className='details'>
        <span className='position'>{props.job.position}</span>,&nbsp;
        <div>
          <span className='employer'>{props.job.name}</span>,&nbsp;
        <span className='location'>{props.job.location}</span>
        </div>
      </div>
      <div className='dates'>
        <div className='start'>{props.job.start}</div>
        <div className='end'>{props.job.end || 'Present'}</div>
      </div>
    </div>
  )
}

Job.propTypes = {
  job: PropTypes.object
}

export default Job

