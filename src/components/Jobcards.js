import styles from "./Jobcard.module.css";
import React from "react";

const JobCard = ({ job,onOpenModal }) => {
  return (
    <div className={styles.jobcard}>
      <h2 className={styles.jobtitle}>{job.title}</h2>
      <p className={styles.companyname}>{job.company}</p>
      <p className={styles.location}>{job.location}</p>
      <span className={styles.jobtype}>
        {job.type}
      </span>
      <p className="description">{job.description}</p>
      <button className={styles.moreButton} onClick={() => onOpenModal(job)}>
        +
      </button>
    </div>
  );
};

export default JobCard;