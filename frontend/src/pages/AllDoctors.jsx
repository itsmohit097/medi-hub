import React, { useState, useEffect } from "react";
import { axios } from "../import-export/ImportExport";
import DoctorsCard from "../components/DoctorsCard";

function AllDoctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("/user/doctors/getall");
        console.log(response.data); // Checking the structure of the response data
        setDoctors(response.data.data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className="w-full my-20 border border-red-800">
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-4 items-center md:items-start justify-center md:justify-between h-full px-3 py-1">
        {/* Search doctors component */}
        {/* code here */}

        {/* Doctors components */}
        {doctors.map((doctor) => (
          <DoctorsCard key={doctor._id} doctor={doctor} />
        ))}
      </section>
    </div>
  );
}

export default AllDoctors;
