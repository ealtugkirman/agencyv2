"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Logo from "../../../../public/voyage.png";
import Link from "next/link";
import ButtonFirst from "../elements/ButtonFirst";
const Header = () => {
  const btnRef = useRef(null);
  const menuRef = useRef(null);

  function navToggle() {
    btnRef.current.classList.toggle("open");
    menuRef.current.classList.toggle("hidden");
    menuRef.current.classList.toggle("flex");
  }

  function closeMenu() {
    btnRef.current.classList.remove("open");
    menuRef.current.classList.add("hidden");
    menuRef.current.classList.remove("flex");
  }

  useEffect(() => {
    const btn = btnRef.current;
    btn.addEventListener("click", navToggle);

    return () => {
      btn.removeEventListener("click", navToggle);
    };
  }, []);

  useEffect(() => {
    const menuLinks = menuRef.current.querySelectorAll("a");
    menuLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    return () => {
      menuLinks.forEach((link) => {
        link.removeEventListener("click", closeMenu);
      });
    };
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const sticky = navbar.offsetTop;

    const handleScroll = () => {
      if (window.pageYOffset >= sticky) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed no-underline z-40 top-0 w-full">
      <div
        id="navbar"
        className={`flex   bg-light bg-opacity-20	 flex-col py-4`}>
        <div className="text-light mx-24 items-center justify-between hidden lg:flex flex-row ">
          <div className="items-center space-x-4  text-2xl flex">
            <Link href="/" >
              <Image
                src={Logo}
                width={200}
                height={80}
                alt="altcoinvoyage.com"
              />
            </Link>
          </div>
          <div className=" space-x-6  text-md text-dark  ml-80 flex">
            {/* <span className="hover:scale-110 duration-500">
              <Link href="/">Home</Link>
            </span>
            <span className="hover:scale-110 duration-500">
              <Link href="/categories/all">Categories</Link>
            </span>
            <span className="hover:scale-110 duration-500">
              <Link href="/latestnews">Latest News</Link>
            </span>  
            <span className="hover:scale-110 duration-500">
              <Link href="/faq">FAQ</Link>{" "}
            </span> */}
            <span className="hover:scale-110  duration-500">
              {" "}
              <Link  className="no-underline" href="/web-design-process">Web Design Process</Link>{" "}
            </span>
          </div>

          <div className="flex flex-row text-blue-500 text-2xl items-center space-x-4  ">
            <ButtonFirst />
          </div>
        </div>
      </div>
      {/* Hamburger Menu */}
      <div className="flex md:flex-row items-center justify-evenly">
        <div className="flex z-50 fixed justify-between px-8 bg-lightitems-center min-w-full  lg:hidden pt-20 ">
          <div className="mt-2 flex py-2 items-center text-dark dark:text-light ">
            <div href="/">
              <Image src={Logo} width={140} height={70} alt="cognitive.com" />
            </div>
          </div>
          <div className="lg:hidden flex items-center  space-x-6">
            <button
              id="menu-btn"
              ref={btnRef}
              type="button"
              className="z-50 mt-2 block hamburger lg:hidden focus:outline-none"
              aria-label="Toggle Menu">
              <span className="hamburger-top" />
              <span className="hamburger-middle" />
              <span className="hamburger-bottom" />
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          id="menu"
          ref={menuRef}
          className="fixed  font-ws bg-light z-30 top-0 bottom-0 left-0 flex-col text-center hidden lg:hidden w-2/3 min-h-screen py-1 pt-40 space-y-4 text-xl text-dark">
          <div className="absolute" />
          <div className="relative space-y-6 justify-center mx-auto flex-col flex">
            {/* <span>
              <Link href="/">Home</Link>
            </span>
            <span>
              <Link href="/categories/all">Categories</Link>
            </span>
            <span>
              <Link href="/about">About Us</Link>{" "}
            </span> */}
            <span>
              <Link className="no-underline" href="/web-design-process">Web Desing Process</Link>{" "}
            </span> 
            <ButtonFirst />
          </div>
          <p className="text-dark leading-6 text-left text-sm mx-8 pt-10"></p>
          <div className="flex text-dark dark:text-light text-2xl flex-row space-x-6 pt-6 justify-center"></div>
        </div>
      </div>
      
    </div>
  );
};

export default Header;
