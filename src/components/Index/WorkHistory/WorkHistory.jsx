import React from 'react';
import './workHistory.css';
import Job from './Job';
let history = [
  {
    name: 'All in All Convenience Store',
    position: 'Cashier, Baker, Pizza Maker, Stocking, Ordering',
    location: 'Frazee, MN',
    start: 'July, 2014',
    end: 'August, 2016'
  }, {
    name: 'Olive Garden',
    position: 'Busser',
    location: 'Brainerd, MN',
    start: 'August, 2016',
    end: 'January, 2017'
  }, {
    name: 'Lakes Cafe',
    position: 'Server',
    location: 'Perham, MN',
    start: 'March, 2017',
    end: 'October, 2017'
  }, {
    name: 'Cook Systems',
    position: 'Apprentice Software Developer',
    location: 'Memphis, TN',
    start: 'October, 2017',
    end: 'December, 2017'
  }, {
    name: 'Magenic',
    position: 'Associate Consultant I',
    location: 'Minneapolis, MN',
    start: 'January, 2018',
    end: 'August, 2018'
  }, {
    name: 'Daugherty Business Solutions',
    position: 'Associate Consultant / Software Engineer I',
    location: 'Minneapolis, MN',
    start: 'September, 2018'
  }
]

function WorkHistory() {
  return (
    <div className="single-page">
      <h3>Where I've been</h3>
      <div id='history'>
      {history.map((job, index) => (<Job job={job} key={index} />))}
      </div>
    </div>
  )
}

export default WorkHistory
