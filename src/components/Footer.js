import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-[#032541] w-full pb-4 mt-8 px-8 ">
        <div className=" pt-8 text-white space-y-7 max-w-[1500px] mx-auto md:space-y-0 md:flex md:justify-between md:content-start ">
          <div>
            <h1 className="font-bold text-[20px]   ">THE BASICS</h1>
            <h3 className="cursor-pointer">About TMBD</h3>
            <h3 className="cursor-pointer">Contact Us</h3>
            <h3 className="cursor-pointer">Support Fourms</h3>
            <h3 className="cursor-pointer">API</h3>
          </div>
          <div>
            <h1 className="font-bold text-[20px] ">GET INVOLVED</h1>
            <h3 className="cursor-pointer">Add New Movie</h3>
            <h3 className="cursor-pointer">Add New Tv Show</h3>
            <h3 className="cursor-pointer">Support Fourms</h3>
          </div>
          <div>
            <h1 className="font-bold text-[20px] ">COMMUNITY</h1>
            <h3 className="cursor-pointer">Guidelines</h3>
            <h3 className="cursor-pointer">Discussions</h3>
            <h3 className="cursor-pointer">Leaderboard</h3>
          </div>
          <div>
            <h1 className="font-bold text-[20px] ">Legal</h1>
            <h3 className="cursor-pointer">Terms of Use</h3>
            <h3 className="cursor-pointer">API Terms of Use</h3>
            <h3 className="cursor-pointer">Privacy Policy</h3>
          </div>
        </div>
        <div className="flex justify-center text-white mt-4">
          <h1> 2021 Build by Saber</h1>
        </div>
      </div>
    </>
  );
}
