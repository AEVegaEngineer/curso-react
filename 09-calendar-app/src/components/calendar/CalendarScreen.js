import React, { useState } from 'react'
import moment from 'moment'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css"

import { Navbar } from '../ui/Navbar'
import { messages } from '../../helpers/calendar-messages-es'
import { CalendarEvent } from './CalendarEvent'
import { CalendarModal } from './CalendarModal'
import { useDispatch } from 'react-redux';

import 'moment/locale/es';
import { uiOpenModal } from '../../actions/ui'
import { eventSetActive } from '../../actions/events'
import { AddNewFab } from '../ui/AddNewFab'
moment.locale('es');



const localizer = momentLocalizer(moment)
const myEventsList = [{
  title: 'Cumple del jefe',
  start: moment().toDate(),// new Date()
  end: moment().add(2, 'hours').toDate(),
  bgcolor: '#fafafa',
  notes: 'comprar el pastel',
  user: {
    _id: '123',
    name: 'Fernando',
  }
}];



export const CalendarScreen = () => {

  const dispatch = useDispatch();
  
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

  const onDoubleClick = (e) => {
    //console.log("abrir modal")
    dispatch(uiOpenModal());
  }

  const onSelect = (e) => {
    //console.log(e)
    dispatch(eventSetActive(e));
  }

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem('lastView', e);
  }  

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
        components={{event: CalendarEvent}}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChange}
        view={lastView}
      />
      <AddNewFab/>
      <CalendarModal/>
    </div>
  )
}
