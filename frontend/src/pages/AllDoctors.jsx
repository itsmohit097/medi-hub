import React from 'react';
import Navbar from '../components/Navbar';
import Doctors from '../components/Doctors'; 
import '../components/app.css'


function AllDoctors() {
    const doctorsData = [
        {
          name: 'Nirmal Kolte',
          qualification: 'MBBS, MD - General Medicine',
          title: 'Cardiologist',
          experience:"8 Years",
          languages: 'English, Hindi',
          location: 'Mumbai',
          fees: 500,
          imageUrl: 'https://example.com/doctor-images/nirmal-kolte.jpg',
        },
        {
          name: 'Priya Sharma',
          qualification: 'BDS - Dentistry',
          title: 'Dentist',
          experience:'2 Years',
          languages: 'English, Marathi',
          location: 'Pune',
          fees:1000,
          imageUrl: 'https://example.com/doctor-images/priya-sharma.jpg',
        },
        {
          name: 'Akhil Kapoor',
          qualification: 'MD - Pediatrics',
          title: 'Pediatrician',
          experience:'3 Years',
          languages: 'English, Tamil',
          location: 'Chennai',
          fees:500,
          imageUrl: 'https://example.com/doctor-images/akhil-kapoor.jpg', 
        },
        {
            name: 'Akhil Kapoor',
            qualification: 'MD - Pediatrics',
            title: 'Pediatrician',
            experience:'6 Years',
            languages: 'English, Tamil',
            location: 'Chennai',
            fees:500,
            imageUrl: 'https://example.com/doctor-images/akhil-kapoor.jpg',
          },
          {
            name: 'Nirmal Kolte',
            qualification: 'MBBS, MD - General Medicine',
            title: 'Cardiologist',
            experience:"8 Years",
            languages: 'English, Hindi',
            location: 'Mumbai',
            fees: 500,
            imageUrl: 'https://example.com/doctor-images/nirmal-kolte.jpg',
          }
      ];
      return (
        <>
          {/* <Navbar />  */}
          <div className="all-doctors-container">
            <div className="doctor-cards">
              {doctorsData.map((doctor) => (
                <Doctors key={doctor.name} doctor={doctor} />
              ))}
            </div>
          </div>
        </>
      );    
}

export default AllDoctors;
