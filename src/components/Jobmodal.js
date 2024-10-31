import React from 'react';
import styles from './JobModal.module.css';

const JobModal = ({ job, onClose }) => {
  if (!job) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <h2>{job.title}</h2>
        <p><strong>Company:</strong> {job.company}</p>
        <p><strong>Location:</strong> {job.location}</p>
        <p><strong>Job Type:</strong> {job.type}</p>
        <p><strong>Salary:</strong> {job.salary}</p>
        <p><strong>Description:</strong> {job.largeDescription}</p>
      </div>
    </div>
  );
};

export default JobModal;

