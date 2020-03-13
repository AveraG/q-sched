import React from 'react';
import Calendar from "react-big-calendar";
import moment from "moment";
import events from '../events'

import "react-big-calendar/lib/css/react-big-calendar.css";
import './Calendar.scss';

const localizer = Calendar.momentLocalizer(moment);

function MyCalendar() {
  return (
    <div className='Cal'>
      <Calendar localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      />
    </div>
  )
}

 export default MyCalendar;

