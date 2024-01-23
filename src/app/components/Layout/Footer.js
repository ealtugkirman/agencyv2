 "use client";
import React from "react";
import { Link } from "react-scroll";
import Logo from "../../../../public/voyage.png";
import Image from "next/image";
import voyage from "../../../../public/digitalvoyageanimated.gif"

const Footer = () => {
    return (
        <footer className="pt-24 md:pt-72 justify-between font-mr px-6 md:px-24 py-4 pb-8  bg-light  flex flex-col items-center text-dark">
            <div className="border-b flex flex-row min-w-full justify-between pb-4">
                <div className="flex md:space-x-12 space-x-4 items-center">
                    <Image
                        src={ Logo }
                        alt="altcoinvyage.com logo"
                        sizes="10vw"
                        width={ 240 }
                        height={ 240 }
                        priority
                    />
                </div>
                <div className="hidden md:flex" >
                    <Image
                        src={ voyage }
                        alt="altcoinvyage.com logo"
                        sizes="10vw"
                        width={ 240 }
                        height={ 240 }
                        priority
                    />
                </div>
                <rightfooter className="flex text-sm md:text-lg flex-row space-x-6 md:space-x-20">
                    <div className="relative space-y-4 justify-center    flex-col flex">
                        {/* <span>
                            <Link to="navbar" smooth  className="cursor-pointer">Home</Link>
                        </span> */}
                       
                    </div>
                    <div className="relative space-y-4 justify-center  flex-col flex">
                        
                        <span>
                            <Link to="contact" smooth offset={ -150 } className="cursor-pointer">Contact Us</Link>
                        </span>
                    </div>
                </rightfooter>
            </div>
            <div className="text-dark mt-4 flex">
                <p> &copy;2024 digitalvoyage.agency All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;