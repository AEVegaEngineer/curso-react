import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css"

import { Navbar } from '../ui/Navbar'
import { messages } from '../../helpers/calendar-messages-es'
import { CalendarEvent } from './CalendarEvent'
import { CalendarModal } from './CalendarModal'
import { useDispatch, useSelector } from 'react-redux';

import 'moment/locale/es';
import { uiOpenModal } from '../../actions/ui'
import { eventClearActive, eventSetActive, eventStartLoading } from '../../actions/events'
import { AddNewFab } from '../ui/AddNewFab'
import { DeleteEventFab } from '../ui/DeleteEventFab'
moment.locale('es');
const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {

  const dispatch = useDispatch();

  const { events, activeEvent } = useSelector(state => state.calendar);
  const { uid } = useSelector(state => state.auth);
  
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

  useEffect(() => {
    dispatch(eventStartLoading())
    //console.log(events)
  }, [dispatch])

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

  const onSelectSlot = (e) => {
    //console.log(e)
    dispatch(eventClearActive(e))
  }

  

  const eventStyleGetter = (event, start, end, isSelected) => {   
    


    const style = {
      backgroundColor: (uid === event.user._id) ? '#367CF7' : '#465660',
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
        events={events}
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
        onSelectSlot={onSelectSlot}
        selectable={true}
      />
      <AddNewFab/>
      {(activeEvent) && <DeleteEventFab/>}
      <CalendarModal/>
    </div>
  )
}
