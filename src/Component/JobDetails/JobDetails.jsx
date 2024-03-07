// import React from 'react';

import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { saveJobApplication } from "../Utilities/localStorage";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { MdOutlineSubtitles } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";





const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);
    const handleAppliedJob = () => {
        saveJobApplication(idInt)
        toast('You have appiled successfully');

    }
    return (
        <div className="mb-10" >
            <div className="p-20">
                <h2 className="text-center font-bold text-3xl text-black">Job Details</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-4">
                <div className=" rounded-lg px-5 md:col-span-3">

                    <div className="space-y-5 leading-loose">
                        <p><strong className="font-semibold  text-black ">Job Description : </strong> <span className="text-slate-400 ">{job.job_description}</span> </p>
                        <p><strong className="font-semibold  text-black ">Job Responsibility : </strong>
                            <span className="text-slate-400" >{job.job_responsibility}</span></p>
                        <p><strong className="font-semibold  text-black ">Educational Requirements :</strong> <br /> <span className="text-slate-400">{job.educational_requirements}</span></p>
                        <p><strong className="font-semibold  text-black ">Experiences : </strong> <br /> <span className="text-slate-400">{job.experiences}</span> </p>
                    </div>
                </div>
                <div className=" flex flex-col gap-y-4">
                    <div className="grow rounded-md p-3 space-y-6 bg-[#e7eafd]">
                        <div>
                            <h2 className=" text-black border-b-2 border-gray-300 pb-3 font-semibold">Job Details</h2>
                        </div>
                        <div className="my-4">

                            <div className="flex items-start text-sm my-2">
                                <p className="flex items-center  "><span className="font-semibold mr-2 text-[#7E90FE]"><MdOutlineCurrencyExchange /> </span><span className="font-semibold text-black text-nowrap">Salary :  </span> </p>
                                <p className="text-slate-400  "> &nbsp; {job.salary} (Per Month) </p>
                            </div>

                            <div className="flex items-start text-sm my-2">
                                <p className="flex items-center  "><span className="font-semibold mr-2 text-[#7E90FE]"><MdOutlineSubtitles /> </span><span className="font-semibold text-black text-nowrap">Job Title : </span> </p>
                                <p className="text-slate-400  "> &nbsp; {job.job_title} </p>
                            </div>

                        </div>
                        <div className="mt-8">
                            <h2 className=" text-black border-b-2 border-gray-300 pb-3 font-semibold">Contact Information</h2>
                        </div>

                        <div className="my-4">

                            <div className="flex items-start text-sm my-2">
                                <p className="flex items-center  "><span className="font-semibold mr-2 text-[#7E90FE]"><FaPhoneAlt /> </span><span className="font-semibold text-black text-nowrap">Phone : </span> </p>
                                <p className="text-slate-400  ">  &nbsp; {job.contact_information.phone}  </p>
                            </div>



                            <div className="flex items-start text-sm my-2">
                                <p className="flex items-center  "><span className="font-semibold mr-2 text-[#7E90FE]"><IoMailOutline /> </span><span className="font-semibold text-black text-nowrap">Email : </span> </p>
                                <p className="text-slate-400  ">  &nbsp; {job.contact_information.email}  </p>
                            </div>



                            <div className="flex items-start text-sm my-2">
                                <p className="flex items-center  "><span className="font-semibold mr-2 text-[#7E90FE]"><IoLocationOutline /></span><span className="font-semibold text-black text-nowrap">Address : </span> </p>
                                <p className="text-slate-400  ">  &nbsp; {job.contact_information.address}  </p>
                            </div>


                        </div>

                    </div>
                    <div className="">
                        <button onClick={handleAppliedJob} className="btn btn-primary hover:bg-blue-700 text-white w-full">Apply Now</button>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default JobDetails;