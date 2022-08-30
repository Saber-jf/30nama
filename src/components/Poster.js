import React, { useState } from "react";
import { Link } from "react-router-dom";
import got from "../image/got.jpg";

function Poster() {
  const [searchkey, setSearchKey] = useState("");
  console.log(searchkey);
  return (
    <div>
      <div className="relative mx-auto ">
        <div className="w-full">
          <img
            src={got}
            className="h-[450px] md:h-[700px] w-full object-cover"
          />
        </div>
        <div className=" top-0 bottom-0 right-0 absolute poster w-full  ">
          <div className="flex flex-col items-start justify-end px-5 w-full h-full max-w-[1000px] ">
            <h1 className="text-[3rem] font-bold text-white">WelCome.</h1>
            <p className="text-[2em] font-semibold text-white  ">
              Millions of movies, TV shows and people to discover. Explore now.
            </p>
            <div className=" relative  w-full text-[20px] mt-8  ">
              <input
                value={searchkey}
                onChange={(e) => setSearchKey(e.target.value)}
                placeholder="Search..."
                className=" p-4  mb-8 w-full h-14 rounded-full focus:outline-none"
              />
              <Link to={`search/${searchkey}`}>
                <div className=" absolute top-0 right-0 w-28 search h-14 rounded-full flex items-center justify-center ">
                  <h1 className="text-white font-semibold text-[20px]">
                    Search
                  </h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Poster;
