// Jobs.js
import React, { useEffect, useState } from 'react';
import JobCard from './Jobcards.js';
import JobModal from './Jobmodal.js';
import styles from './Jobs.module.css';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const jobsPerPage = 4;

  useEffect(() => {
    fetch('/jobData.json')
      .then(response => response.json())
      .then(data => setJobs(data));
  }, []);

  const filteredJobs = jobs.filter(job => 
    filter === 'All' || job.type === filter
  );

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setCurrentPage(1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const openModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setIsModalOpen(false);
  };

  return (
    <div className={styles.JOBOPENINGS}>
      <div className={styles.Heading}><h1>Job Openings</h1></div>
      <div className={styles.filterDropdown}>
        <label htmlFor="jobTypeFilter" className={styles.lab}>Filter by Job Type: </label>
        <select id="jobTypeFilter" value={filter} onChange={handleFilterChange} className={styles.drop}>
          <option value="All">All</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
        </select>
      </div>

      <div className={styles.jobscontainer}>
        {paginatedJobs.map(job => (
          <JobCard key={job.id} job={job} onOpenModal={openModal} />
        ))}
      </div>
      <div className={styles.pagination}>
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Prev
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>

      {isModalOpen && <JobModal job={selectedJob} onClose={closeModal} />}
    </div>
  );
};

export default Jobs;
