import React from 'react';
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content ps-28">
                <div className=' font-semibold text-base'>
                    <img src="https://i.ibb.co/JkzGZqm/Toy-Island-logo.png?fbclid=IwAR1ZdPpBH4N2LtY2TwZ5fvOi6e0a0gQchJx4jRFNxLlssRxmUz_Z4ZsTB5s" alt="" className='w-20' />
                    <a className="link link-hover"><span className='text-orange-400'>Address: </span>Uttara Dhaka</a>
                    <a className="link link-hover"><span className='text-orange-400'>Phone: </span> 01975791347</a>
                    <a className="link link-hover"><span className='text-orange-400'>Email: </span> toy@island.com</a>
                    <div className="grid grid-flow-col gap-4">
                        <a className="link link-hover"><FaFacebook /></a>
                        <a className="link link-hover"><FaGoogle /></a>
                        <a className="link link-hover"><FaTwitter /></a>
                        <a className="link link-hover"><FaInstagram /></a>
                        <a className="link link-hover"><FaGithub /></a>
                    </div>
                </div>
                <div>
                    <span className="footer-title">Information</span>
                    <a className="link link-hover">Delivery</a>
                    <a className="link link-hover">Legal Notice</a>
                    <a className="link link-hover">Prices Drop</a>
                    <a className="link link-hover">New Products</a>
                    <a className="link link-hover">Best Sales</a>
                </div>
                <div>
                    <span className="footer-title">MY ACCOUNT</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Secure Payment</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Sitemap</a>
                    <a className="link link-hover">Stores</a>
                </div>
                <div>
                    <span className="footer-title">INSTAGRAM POST</span>
                    <div className='grid lg:grid-cols-3 gap-4'>
                        <img src="https://www.mahardhi.com/prestashop/MT03/kiddle/modules/mt_customhtml3/img/insta-1.jpg" alt="" />
                        <img src="https://www.mahardhi.com/prestashop/MT03/kiddle/modules/mt_customhtml3/img/insta-2.jpg" alt="" />
                        <img src="https://www.mahardhi.com/prestashop/MT03/kiddle/modules/mt_customhtml3/img/insta-3.jpg" alt="" />
                        <img src="https://www.mahardhi.com/prestashop/MT03/kiddle/modules/mt_customhtml3/img/insta-4.jpg" alt="" />
                        <img src="https://www.mahardhi.com/prestashop/MT03/kiddle/modules/mt_customhtml3/img/insta-5.jpg" alt="" />
                        <img src="https://www.mahardhi.com/prestashop/MT03/kiddle/modules/mt_customhtml3/img/insta-6.jpg" alt="" />
                    </div>
                </div>

            </footer>
            <div  className="p-6 bg-base-300 text-base-content ">
                <p className="text-center">Copyright © 2023 - All right reserved Toy island</p>
            </div>
        </div>
    );
};

export default Footer;