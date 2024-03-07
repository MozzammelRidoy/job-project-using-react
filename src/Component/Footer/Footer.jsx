// import React from 'react';

const Footer = () => {
    return (
        <footer className="bottom-0 p-10 bg-base-200 text-base-content">
           <div className="footer max-w-6xl mx-auto">
           <aside>
                <h2 className="text-3xl font-semibold text-white">CareerHub</h2>
                <p className="text-xl my-3">Develop by | Mozzammel Ridoy</p>

                <img src="https://i.postimg.cc/8cTxH3YM/social.png" alt="" />

            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
           </div>
        </footer>
    );
};

export default Footer;