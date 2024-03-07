// import React from 'react';

const Banner = () => {
    return (
        <div className="text-black mb-8">
               <div className="grid grid-cols-2 items-center">
                <div><h2 className="text-7xl font-bold leading-tight">One Step <br /> Closer To Your <br /> <span className="text-indigo-500">
                    Dream Job</span></h2>
                    <p className="text-sm text-slate-500 my-4">
                    Explore thousands of job opportunities with all the <br /> information  you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.
                    </p>
                    <button className="btn text-white font-bold bg-gradient-to-r from-purple-500 border-0 to-[#7E90FE]">Get Started</button>
                    </div>
                <div><img src="https://i.postimg.cc/kGLQShmn/user.png" className="image-full" alt="" /></div>
               </div>
        </div>
    );
};

export default Banner;