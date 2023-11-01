import React from "react";
import logi from "../assets/images/logo-agri.png";
import "../tailwind.css";
const Welcome = () => {
  return (
    <div className="bg-[#d8e6ed] h-full w-auto flex-wrap ">
      <div className="bg-[#045930] w-full h-auto py-2 flex flex-row items-end justify-between">
        <h1 className="text-white font-bold ml-4 text-2xl justify-items-start">
          AgriGo
        </h1>
        <div className="flex flex-row mr-4 justify-between text-white font-bold text-xl">
          <a className="mr-2" href="/">
            Login
          </a>
          <a className="mr-2" href="/">
            Sign Up
          </a>
          <a href="/">About Us</a>
        </div>
      </div>
      <div className="flex flex-row mx-6 h-auto my-12">
        <div className="flex flex-col w-auto flex-wrap h-auto">
          <div className="">
            <img className="h-64 w-64" src={logi} alt="t" />
          </div>
          <div className="font-bold text-6xl  text-green-800">
            A one Stop solution to all post farming problems
          </div>

          <p className="my-4">
            Welcome to the Future of Agri-food Transportation! At AgriGo, we're
            driving a revolution in supply chain logistics. Our Advanced
            Transportation Management System (ATMS) is the key to unlocking
            efficiency, reducing costs, and ensuring the freshest produce
            reaches your customers.
          </p>
        </div>
        <div className="flex flex-col h-full w-[40%] flex-wrap  items-center  ">
          <div className="flex flex-row flex-wrap">
            <div className="h-40 w-40 rounded-full bg-green-500 items-center justify-center flex mr-2">
              <h1 className="font-bold text-white text-xl">FARMER</h1>
            </div>
            <div className="h-40 w-40 rounded-full bg-green-500 items-center justify-center flex">
              <h1 className="font-bold text-white text-xl">PURCHASER</h1>
            </div>
          </div>
          <div className="h-40 w-40 rounded-full bg-green-500 items-center justify-center flex">
            <h1 className="font-bold text-white text-xl">TRANSPORTER</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;