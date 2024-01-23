"use client";

import Slider from "react-infinite-logo-slider";
import tecvity from "../../../public/tecvity-logo.png";
import hakemportal from "../../../public/hakemportalLogo.png";
import cognizer from "../../../public/cognizerlogo.png";
import voyage from "../../../public/altcoinvoyage.png";
import atilogo from "../../../public/atilogo.png";
import psykri from "../../../public/psykri.png";

import Image from "next/image";

const Clients = () => {
  return (
    <div className=" h-80 items-center">
      <h1 className="text-dark  text-2xl font-bold opacity-50 text-center mb-3 md:mb-6">
        Our Clients
      </h1>
          <Slider
              className="shadow-xl"
        width="400px"
        duration={20}
        pauseOnHover={true}
        blurBorders={false}
        blurBoderColor={"#fff"}>
        <Slider.Slide  >
          <Image src={tecvity} alt="any" className="w-48" />
        </Slider.Slide>
        <Slider.Slide>
          <Image src={psykri} alt="any3" className="w-48" />
        </Slider.Slide>
        <Slider.Slide>
          <Image src={hakemportal} alt="any2" className="w-48" />
        </Slider.Slide>
        <Slider.Slide>
          <Image src={cognizer} alt="any3" className="w-48" />
        </Slider.Slide>
        <Slider.Slide>
          <Image src={voyage} alt="any3" className="w-48" />
        </Slider.Slide>
        <Slider.Slide>
          <Image src={atilogo} alt="any3" className="w-48" />
        </Slider.Slide>

        {/* <Slider.Slide>
          <div>Other component...</div>
        </Slider.Slide> */}
      </Slider>
    </div>
  );
};

export default Clients;
