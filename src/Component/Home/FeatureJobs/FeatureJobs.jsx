// import React from 'react';

import { useEffect, useState } from "react";
import Job from "./Job";

const FeatureJobs = () => {
    const [jobs, setJobs] = useState([]);
    // this is not the best way to load show all data 
    const [dataLength, setDataLength] = useState(4); 
    useEffect(()=>{
        fetch('featured_jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    },[])

   
    return (
        <div className="my-10 text-black">
                    <div>
                    <h2 className='text-5xl font-bold text-center'>Featured Jobs</h2>
            <p className="text-center text-sm text-slate-600 mt-3">Explore thousands of job opportunities with all the information you need. Its your future</p>
                    </div>
                    <div className="grid grid-cols-2 gap-5 my-8">
                       {
                        jobs.slice(0, dataLength).map(job => <Job job={job} key={job.id}></Job>)
                       }

                    </div>
                    <div className={ dataLength === jobs.length && 'hidden' || 'text-center' }>
                        <button
                        onClick={()=> setDataLength(jobs.length)}
                        className="btn py-2 px-20 text-white font-bold tracking-widest  bg-purple-600">Show All  Jobs</button>
                    </div>
        </div>
    );
};

export default FeatureJobs;