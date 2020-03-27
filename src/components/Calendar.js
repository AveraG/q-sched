import React, { Component } from 'react';
//import { render } from 'react-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
//import './month.scss';
import './styles.scss';
import events from '../events'
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar)

class MyCalendar extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      events: events //this needs to look like events:[]
    };
  }

  onEventResize = (type, { event, start, end, allDay }) => {
    this.setState(state => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: state.events };
    });
  };

  onEventDrop = ({ event, start, end, allDay }) => {
    console.log(start);
  };
  //component did mount to fetch events and set state [setState: events:events]

  render() {
    return (
      <DnDCalendar
      defaultDate={moment().toDate()}
      defaultView="month"
      events={this.state.events}
      localizer={localizer}
      onEventDrop={this.onEventDrop}
      onEventResize={this.onEventResize}
      resizable
      style={{ height: "100vh" }}
    />
    );
  }
}

export default MyCalendar;
