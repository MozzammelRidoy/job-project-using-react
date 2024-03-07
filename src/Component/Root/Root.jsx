// import React from 'react';

import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div className="bg-white">
            <div className="lg:hidden visible">
                <div className="w-full py-32 text-center">
                <h2 className=" text-3xl font-bold">Only PC Version Available</h2>
                <p className="">Swicth to PC Mode</p>
                <p>Show on you PC and Enjoy our Service</p>
                <p>Develop by | Mozzammel Ridoy</p>
                </div>
            </div>
           <div className="invisible lg:visible">
           <div  className="max-w-6xl mx-auto ">
           <Header></Header>
            <Outlet></Outlet>
           </div>

            <Footer></Footer>
           </div>
            
        </div>
    );
};

export default Root;