// import React from 'react';

import { FaLocationDot } from "react-icons/fa6";
import { HiCurrencyDollar } from "react-icons/hi";
import { Link } from "react-router-dom";

const JobsApplied = ({appliedJob}) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary }= appliedJob;
    return (
        <div className="bg-white">
            <div className="card card-side border my-5">
                <figure className=" bg-amber-100 w-1/5 p-5 m-3 rounded-lg"><img className="image-full" src={logo} alt="Movie" /></figure>
                <div className="card-body ">
                   <div className="flex flex-row justify-between items-center ">
                   <div>
                    <div>
                    <h2 className="card-title text-black font-semibold">{job_title}</h2>
                    <p className="text-gray-400 ">{company_name}</p>
                    </div>
                    <div className="flex items-center my-3">
                        <div>
                        <button className="px-5 py-2 font-extrabold border rounded hover:bg-slate-200  border-[#7E90FE] text-[#7E90FE] mr-4">{remote_or_onsite}</button>
                        
                        </div>
                        <div>
                        <button className="px-5 py-2 font-extrabold border rounded hover:bg-slate-200 border-[#7E90FE] text-[#7E90FE] mr-4">{job_type}</button>
                        </div>
                    </div>

                    <div className="flex items-center text-slate-500 gap-8">
                        <h2 className="flex items-center"><FaLocationDot className="text-2xl mr-2" />{location}</h2>
                        <h2 className="flex items-center"><HiCurrencyDollar className="text-2xl mr" />{salary}</h2>
                    </div>
                    
                    </div>
                    <div className="card-actions justify-end  ">
                    
                        <Link to={`/job/${id}`}>
                            <button className="btn text-white font-semibold border-0 bg-gradient-to-r from-purple-500 to-[#7E90FE]">View Details</button>
                        </Link>
                    
                    </div>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default JobsApplied;