import React from 'react'
import EventCards from '../Events/EventCard/EventCard';
import classNames from 'classnames';

function HomePage({classes}) {
  return (
    <div>
      <EventCards 
        classes={classes} 
        classNames={classNames} 
       />
    </div>
  )
}

export default HomePage
