import React from 'react'
import './app.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAddressCard,faLocationDot,faVideoCamera,faHospital} from '@fortawesome/free-solid-svg-icons';

const Doctors = ({doctor}) => {
  return (
    <>
      <section  className='card_container'>
        <img src='https://wallpapercave.com/wp/wp2555019.jpg' alt='doctor name'></img>
        <p><span className='q'>Name: </span>{doctor.name}</p>
        <p><span className='w'>Qualification: </span>{doctor.qualification}</p>
        <p><span className='e'>Experience(in Years): </span>{doctor.experience}</p>        
        <p><span className='q'>Main Role: </span>{doctor.title}</p>
        <br></br>
        <div>
          <p><span className='r'>Pay Now - </span></p>
          <b>Rs.{doctor.fees}</b>
        </div>
        <div className='languages_known'>
          <FontAwesomeIcon icon={faAddressCard} />
          <p>{doctor.languages}</p>
        </div>
        <div className='languages_known'>
          <FontAwesomeIcon icon={faLocationDot} />
          <p>{doctor.location}</p>
        </div>
        <div className='digital'>
          <p>Available Tommorrow</p>
          <p>Available within 5-10 Minutes</p>
        </div>
        <div className='hospital'>
          <button className="icon-button1"><FontAwesomeIcon icon={faVideoCamera} /> Book Appointment</button>
          <button className="icon-button2"><FontAwesomeIcon icon={faHospital} /> Book Hospital visit</button>
        </div>
      </section>
    </>
    
  )
}

export default Doctors