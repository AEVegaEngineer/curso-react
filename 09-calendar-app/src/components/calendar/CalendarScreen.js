import React from 'react'
import moment from 'moment'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css"

import { Navbar } from '../ui/Navbar'
import { messages } from '../../helpers/calendar-messages-es'

import 'moment/locale/es';
moment.locale('es');


const localizer = momentLocalizer(moment)
const myEventsList = [{
  title: 'Cumple del jefe',
  start: moment().toDate(),// new Date()
  end: moment().add(2, 'hours').toDate(),
  bgcolor: '#fafafa',
  notes: 'comprar el pastel'
}];



export const CalendarScreen = () => {
  const eventStyleGetter = (event, start, end, isSelected) => {
    
    const style = {
      backgroundColor: '#367CF7',
      borderRadius: '0px',
      opacity: 0.8,
      display: 'block',
      color: 'white',
    }
    return {
      style
    }
  }
  return (
    <div className="calendar-screen">
      <Navbar/>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        messages={ messages }
        eventPropGetter={eventStyleGetter}
      />
    </div>
  )
}
