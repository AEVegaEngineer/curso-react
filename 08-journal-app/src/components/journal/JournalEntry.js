import React from 'react'

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div 
      className="journal__entry-picture"
      style={{
        backgroundSize: 'cover',
        backgroundImage: 'url(https://lh3.googleusercontent.com/proxy/svZ03aUpWLt762phkNPQM-ejHtBFFJu0zp3bYyc_ByJiYkKbjxvnkFPQodP7zkm7UbuaD_gMA49jPBFtrXjlaZ2-oHqIrk6felSMKYC_sm0SL6Nf2BKWwt_eJIbx0FMV8wdEs2gEKqzjNQwdww26zlIoUBI-5SSN6IX6nnizmqbyRLsDBnuvcQ)'
      }}
      ></div>

      <div className="journal__entry-body">
        <p className="journal__entry-title">
          Un nuevo dia
        </p>
        <p className="journal__entry-content">
          duashd hdash dsjhd sjhd sjh dajhdasjh as asdasdas asdasdas.
        </p>
      </div>

      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  )
}
