/* eslint-disable react/no-unescaped-entities */
"use client";
import Lottie from "lottie-react";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Heroani from "../../../public/heroani.json";
import { TypeAnimation } from "react-type-animation";
// import brain from "../assets/brain.json";
// import { FiArrowRightCircle } from "react-icons/fi";

const Herosection = () => {
  return (
    <div className="flex flex-col h-max text-dark">
      <div className="flex ml-4 md:ml-28 text-gradient space-y-4 pt-64 justify-start text-left">
        <div>
          {" "}
          <h2 className="text-lg md:text-lg">
            Digital Voyage is a global web design and development agency based
            in Türkiye
          </h2>
          <h1 className="text-6xl md:text-8xl font-bold">WE ARE SIMPLY</h1>
          <span className=" text-6xl md:text-8xl font-bold">
            <span>DO {""}</span>
            <TypeAnimation
              sequence={["BETTER", 1500, "FASTER", 1500,]}
              speed={50}
              className=""
              wrapper="span"
              repeat={Infinity}
            />
          </span>
        </div>
        {/* <div className="absolute right-0 md:right-24 top-52  opacity-20 md:opacity-75 w-1/3">
          <Lottie animationData={Heroani} />
        </div> */}
      </div>
      <div className="hidden md:flex mt-72 justify-between ">
        <div className="flex text-2xl w-1/3 mx-12 md:mx-0 md:ml-28">
          We build transformative digital experiences for the world's leading
          brands by blending AI, design, and technology.
        </div>
        <div className=" w-1/3 text-left text-xl mr-44">
          <Accordion variant="light" className=""  >
            <AccordionItem key="1" aria-label="Accordion 1" title="Websites">
              <p>
                A modern brand is defined by its digital presence, starting with
                the website. We focus on creating websites that effectively
                convey the brand's identity and perspective for an enhanced user
                experience.
              </p>
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Development">
              <p>
                Our web and mobile app developers are committed to achieving
                visual and performance excellence. From the backend to the
                frontend, we prioritize delivering a seamless and enjoyable user
                experience on all devices.
              </p>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Accordion 3"
              title="Digital Products">
              <p>
                Digital Voyage concentrates on designing authentic connections through the
                use of both aesthetics and behavioral science. Our team of
                senior UI/UX designers delivers engaging digital products that
                help brands thrive in the modern economy.
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
