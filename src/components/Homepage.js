import React, { useEffect, useState } from "react";
import styles from "./Homepage.module.css";
import photo from "./jobphoto.jpg";
import JobModal from "./Jobmodal"; 
import ErrorModal from "./Errormodal.js";

export default function Homepage() {
  const [jobData, setJobData] = useState([]);
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [foundJob, setFoundJob] = useState(null);

  useEffect(() => {
    fetch("/jobData.json")
      .then((response) => response.json())
      .then((data) => setJobData(data))
      .catch((error) => console.error("Error fetching job data:", error));
  }, []);

  const handleSearch = () => {
    const job = jobData.find(
      (job) =>
        job.title.toLowerCase().split(" ")[0] === role.toLowerCase().split(" ")[0] &&
        job.location.toLowerCase().split(",")[0] === location.toLowerCase().split(",")[0]
    );
    if (job) {
        setFoundJob(job);
      }
      else
    {
        let job = jobData.find(
            (job) =>
              job.title.toLowerCase().split(" ")[0] === role.toLowerCase().split(" ")[0]
          );
        
        if(job){
            setFoundJob(job);
        }
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFoundJob(null);
    setLocation("");
    setRole("");
  };

  return (
    <>
      <div className={styles.Homepage}>
        <div className={styles.tex}>
          <h1>Find Jobs</h1>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className={styles.inputField}
            />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className={styles.inputField}
            />
            <button onClick={handleSearch} className={styles.searchButton}>
              Search
            </button>
          </div>
        </div>
        <img src={photo} alt="Jobs" />
      </div>

      {isModalOpen && foundJob && <JobModal job={foundJob} onClose={closeModal} />}
      {isModalOpen && !foundJob && <ErrorModal message={"No job found matching your search."} onClose={closeModal} />}
    </>
  );
}
