import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Herofaq = () => {
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    return (
    <div>
      <div className="flex mt-60 justify-between ">
        <div className="flex text-2xl w-1/3 ml-32">
          We build transformative digital experiences for the world's leading
          brands by blending AI, design, and technology.
        </div>
          <div className=" w-1/3 text-left text-xl mr-44">
            <Accordion variant="light">
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
                  Clay concentrates on designing authentic connections through the
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

export default Herofaq;
