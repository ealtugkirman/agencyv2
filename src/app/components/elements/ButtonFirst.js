"use client";
import {Link} from "react-scroll";

const ButtonFirst = () => {
  return (
    <div
      className="bg-newcolor font-semibold animation-pulse hover:scale-110 duration-500 text-lg text-light rounded-2xl px-5 py-2"
      aria-label="Toggle Menu">
      <Link to="contact" smooth offset={-150} className="cursor-pointer no-underline">
        Let's Talk
      </Link>
    </div>
  );
};

export default ButtonFirst;
