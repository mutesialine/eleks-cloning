import React from "react";
import Image from "next/image";
import Wrapper from "../components/layouts/Wrapper";
import Link from "next/link";
import { data } from "../components/data/Navbar";
export default function home() {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        className="object-cover w-full relative"
        src="https://eleks.com/wp-content/themes/eleks/video/homepage_video.webm?v=321"
      />

      <div className="absolute top-0  left-0 right-0 px-25 max-w-8xl m-auto   flex justify-between items-center text-white pt-6  ">
        <img src="/svg/logo-white.svg" />
        <div className=" flex gap-6  text-lg  font-semibold">
          {data.map((el, index) => (
            <Link href={el.link} key={index}>
              {el.value}
            </Link>
          ))}
        </div>
        <button className="bg-red py-4 px-14 rounded-[50px] ">
          Contact us
        </button>
        <Image src="/svg/search.svg" width={24} height={24} alt="search" />
      </div>
      <div className="w-full">
        <div className=" text-white  absolute top-40  left-0 right-0 px-25 max-w-[900px] ">
          <p className="leading-[56.25px] font-semibold text-[46px] ">
            Delivering a healthcare application to market four times faster{" "}
          </p>

          <p className="pt-28 text-lg">View case study</p>
        </div>
      </div>
      <div className=" box-border border-r  flex justify-between m-auto  border absolute bottom-0 left-0 right-0 ">
        <img
          className=" box-border border-r  py-7.5 px-25  ease-in duration-300  "
          src="	https://eleks.com/wp-content/uploads/aramex-logo-small-white.svg"
        />
        <img
          className=" box-border border-r  py-7.5 px-25"
          src="	https://eleks.com/wp-content/uploads/aramex-logo-small-white.svg"
        />
        <img
          className="box-border border-r  py-7.5 px-25 "
          src="https://eleks.com/wp-content/uploads/fleming-logo-small-white.svg"
        />
        <img
          className="box-border border-r  py-7.5 px-25"
          src="https://eleks.com/wp-content/uploads/tait-logo_white.svg"
        />
        <img
          className="box-border border-r  py-7.5 px-25"
          src="https://eleks.com/wp-content/uploads/pace-logo-small-white.svg"
        />
      </div>
    </>
  );
}
