import React, { Component } from 'react';
//import { render } from 'react-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
//import './month.scss';
import './styles.scss';
import events from '../events'

const localizer = momentLocalizer(moment);

class MyCalendar extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      events: events //this needs to look like events:[]
    };
  }

  //component did mount to fetch events and set state [setState: events:events]

  render() {
    return (
          <Calendar
            events={this.state.events}
            startAccessor="start"
            endAccessor="end"
            defaultDate={moment().toDate()}
            localizer={localizer}
          />
    );
  }
}

export default MyCalendar;
