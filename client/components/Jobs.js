import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Jobs() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch('/api/jobs')
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      {jobs.length !== 0 &&
        jobs.map((job) => {
          return (
            <div className='job-card' key={job.id}>
              <div id='jobCard'>
                {job.company_logo}
                <br></br>
                {job.title}
                <br></br>
                {job.company_name}
                <br></br>
                {job.publication_date}
                <br></br>
                {job.category}
                <br></br>
                {job.job_type}
                <br></br>
                <br></br>
                <br></br>
                <Link to='/applications' state={{ ...job }}>
                  <Button variant='outlined'>Start application</Button>
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Jobs;
