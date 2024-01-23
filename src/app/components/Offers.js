"use client"
import { CgSearchFound } from "react-icons/cg";
import { BiUniversalAccess } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
import { BsPersonFillGear } from "react-icons/bs";
import { GiTelepathy } from "react-icons/gi";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
// import Lottie from 'lottie-react'
// import wave from '../assets/wave2.json'

function Offers() {
  return (
    <div id="offers" className="py-40 flex flex-col ">
          <motion.h3 variants={ fadeIn("right", 1) }
              initial="hidden"
              whileInView={ "show" }
              viewport={ { once: false, amount: 0.3 } } className="text-dark font-semibold text-4xl ml-24">
        Why Our Voyage is Different?
      </motion.h3>
      <div className="container  mt-12 mx-auto  font-second  max-w-7xl p-2 md:p-2">
        {/* <!-- Grid Container --> */}
        <div className="text-white grid gap-6 grid-cols-1 md:grid-cols-4 md:grid-row-2">
          {/* <!-- box-1 --> */}
                  <motion.div variants={ fadeIn("right", 0.3) }
                      initial="hidden"
                      whileInView={ "show" }
                      viewport={ { once: false, amount: 0.3 } } className="relative p-10 rounded-xl md:rounded-none md:col-span-2 bg-purple-800">
            <div className="icon">
              <CgSearchFound />
            </div>
            <p className="relative z-10 mt-6 text-xl font-semibold ">
              Clear Communication, No Tech Jargon
            </p>
            <p className="mt-6 ">
              We pride ourselves on clear communication. At Digital Voyage, we
              break down complex technical concepts into straightforward terms,
              ensuring that you're always in the loop. We want you to understand
              every step of the process without feeling overwhelmed by
              unnecessary tech jargon.
            </p>
          </motion.div>

          {/* <!-- box-2 --> */}
                  <motion.div variants={ fadeIn("down", 0.3) }
                      initial="hidden"
                      whileInView={ "show" }
                      viewport={ { once: false, amount: 0.3 } } className="p-10 rounded-xl md:rounded-none bg-blue-700">
            {/* <!-- img -->
          <!-- Box Header --> */}
            <div className="icon">
              <BiUniversalAccess />
            </div>
            <p className="mt-6 text-xl font-semibold ">Top-Tier Quality, Budget-Friendly</p>
            <p className="mt-6 ">
              Quality should never be compromised by budget constraints. Digital
              Voyage thrives on delivering top-tier solutions that align with
              your financial plan.
            </p>
          </motion.div>

          {/* <!-- box-3 --> */}
                  <motion.div variants={ fadeIn("left", 0.3) }
                      initial="hidden"
                      whileInView={ "show" }
                      viewport={ { once: false, amount: 0.3 } } className="hidden md:row-span-2 md:block p-10 rounded-xl md:rounded-none bg-red-600">
            {/* <!-- img -->
          <!-- Box Header --> */}
            <div className="icon">
              <AiFillEye />
            </div>
            <p className="mt-6 text-xl font-semibold ">Dedication to Your Project</p>
            <p className="mt-6 ">
              Despite being a close-knit team, our commitment to your project is
              colossal. With Digital Voyage, you're not just another client;
              you're a priority. Your project gets the focus and expertise it
              deserves, ensuring a personalized and attentive approach from
              conception to completion.
            </p>
          </motion.div>

          {/* <!-- box-4 --> */}
                  <motion.div variants={ fadeIn("right", 0.3) }
                      initial="hidden"
                      whileInView={ "show" }
                      viewport={ { once: false, amount: 0.3 } } className="p-10 rounded-xl md:rounded-none bg-orange-500">
            {/* <!-- img -->
          <!-- Box Header --> */}
            <div className="icon">
              <BsPersonFillGear />
            </div>

            <p className="mt-6 text-xl font-semibold ">Empowering Through Education</p>
            <p className="mt-6 ">
              At Digital Voyage, we believe in more than just building websites;
              we believe in empowering our clients.
            </p>
          </motion.div>

          {/* <!-- box-5 --> */}
                  <motion.div variants={ fadeIn("up", 0.3) }
                      initial="hidden"
                      whileInView={ "show" }
                      viewport={ { once: false, amount: 0.3 } } className="p-10 rounded-xl md:rounded-none bg-black md:col-span-2">
            {/* <!-- img --> */}
            <div className="icon">
              <GiTelepathy />
            </div>

            <p className="mt-6 text-xl font-semibold ">Data-Driven Real Results</p>
            <p className="mt-6 ">
              Our promises aren't based on wishful thinking; they're rooted in
              real data. Digital Voyage employs a data-driven approach, ensuring
              that every decision, from coding to design, contributes tangibly
              to your business growth. We're not about empty talk; we're about
              delivering measurable and sustainable results.
            </p>
          </motion.div>

          <div className="p-10 rounded-xl md:rounded-none hidden text-light bg-red-600">
            {/* <!-- img -->
          <!-- Box Header --> */}
            <div className="icon">
              <AiFillEye />
            </div>
            <p className="mt-6 hidden text-xl font-semibold ">SYMPTOM TRACKING</p>
            <p className="mt-6 ">
              Track and record your symptoms in the app to help monitor your
              mental health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
