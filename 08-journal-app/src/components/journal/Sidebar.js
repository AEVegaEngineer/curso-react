import React from 'react';
import { getAuth } from '@firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { JournalEntries } from './JournalEntries';
import { startLogout } from '../../actions/auth';


export const Sidebar = () => {

  const dispatch = useDispatch();

  const state = useSelector(state => state);
  

  const handleLogout = () => {
    dispatch(startLogout());
  }

  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-5">
          <i className="fa fa-moon"></i>
          <span> {state.auth.name}</span>
        </h3>
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="journal__new-entry">
        <i className="far fa-calendar-plus fa-5x"></i>
        <p className="mt-5">New Entry</p>
      </div>

      <JournalEntries/>
    </aside>
  )
}
