// import React from 'react';

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utilities/localStorage";
import JobsApplied from "./JobsApplied";
import { IoIosArrowDown } from "react-icons/io";


const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter => {
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote'); 
            setDisplayJobs(remoteJobs);
        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }


    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length) {
            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));

            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job);
                }
            }
            setDisplayJobs(jobsApplied);
            setAppliedJobs(jobsApplied);
            // console.log(jobs, storedJobIds,jobsApplied);
        }
    }, [jobs])
    return (
        <div>
            <div className="p-20">
                <h2 className="text-center font-bold text-3xl text-black">Applied Jobs</h2>
            </div>
           
           <div className="flex flex-col items-end">
           <details className="dropdown ">
                <summary className="m-1  bg-white border-0 btn flex text-black hover:text-white items-center">Filter By<span><IoIosArrowDown /></span> </summary>
                <ul className="p-2   menu dropdown-content z-[1] bg-base-100 text-white rounded-box w-40">
                    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>
           </div>

            <ul>
                {
                    // appliedJobs.map(job => <li key={job.id}>{job.job_title} {job.company_name}</li>)
                    // displayJobs.map(job =>  <li key={job.id}><span>{job.job_title}</span> <br /><span>{job.company_name}</span> <br /> <span>{job.remote_or_onsite}</span> <br /><br /></li>)
                    displayJobs.map(job =>  <JobsApplied appliedJob={job} key={job.id}></JobsApplied>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;