// import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { HiCurrencyDollar } from "react-icons/hi";
import { Link } from "react-router-dom";


import 'react-toastify/dist/ReactToastify.css';


const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility } = job;
    return (
        <div >
            <div className="card card-compact p-5 border">


                <div className="card-body h-72 gap-y-4">
                    <div>
                        <img className="image-full" src={logo} alt="Company Logo" />
                    </div>
                    <div>
                        <h2 className="card-title ">{job_title}</h2>
                        <p className="text-xl">{company_name}</p>
                    </div>


                    <div>
                        <button className="px-5 py-2 font-extrabold border rounded hover:bg-slate-200  border-[#7E90FE] text-[#7E90FE] mr-4">{remote_or_onsite}</button>
                        <button className="px-5 py-2 font-extrabold border rounded hover:bg-slate-200 border-[#7E90FE] text-[#7E90FE] mr-4">{job_type}</button>
                    </div>


                    <div className="flex items-center text-slate-500 gap-8">
                        <h2 className="flex items-center"><FaLocationDot className="text-2xl mr-2" />{location}</h2>
                        <h2 className="flex items-center"><HiCurrencyDollar className="text-2xl mr" />{salary}</h2>
                    </div>


                    <div className="card-actions  ">
                        <Link to={`/job/${id}`}>
                            <button className="btn text-white font-semibold border-0 bg-gradient-to-r from-purple-500 to-[#7E90FE]">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Job;