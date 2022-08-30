import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import {
  BsFillBackspaceReverseFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Hamburger({ hambur }) {
  const [isShown, setIsShown] = useState(false);
  const genres = useSelector((state) => state.genres.genres);

  return (
    <>
      <div
        className={`absolute top-20 ${
          hambur ? "w-5/6" : "w-0"
        }  h-[800px] bg-[#032541f2] z-30 transition-all duration-300 overflow-hidden `}
      >
        <div className="px-8 mt-10 text-white text-[1.2rem] font-semibold pb-4 space-y-7  ">
          <h1 className=" ">Movies</h1>
          <h1 className="">TV Shows</h1>
          <h1 className="">People</h1>
          <div className=" flex items-center ">
            <h1 className="pr-2">Genres</h1>
            <div className="pt-2 font-bold">
              <BsFillArrowRightSquareFill
                style={{ fontSize: "30px" }}
                onClick={() => setIsShown(!isShown)}
              />
            </div>
          </div>
          <div className="space-y-7 text-[1.1rem] text-gray-300">
            <h1 className="">Apps</h1>
            <h1 className="">Discussions</h1>
            <h1 className="">Contribute</h1>
            <h1 className="">API</h1>
            <h1 className="">Login</h1>
          </div>
        </div>
        <div
          className={`absolute top-0 right-0 bottom-0  ${
            isShown ? "w-full" : "w-0"
          }  h-auto bg-[#032541] z-40 transition-all duration-300 overflow-hidden `}
        >
          <div className="text-[1 rem] font-semibold pb-4 px-8 mt-10 ">
            <div className="ml-4 mt-4">
              <BsFillBackspaceReverseFill
                style={{ fontSize: "30px", color: "white" }}
                onClick={() => setIsShown(!isShown)}
              />
            </div>

            <div className="space-y-6 mt-4 ">
              {genres.map((genre) => (
                <Link to={`/genre/${genre.name}/${genre.id}`}>
                  <h1 className="pr-4 py-[2px] text-gray-400">{genre.name}</h1>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hamburger;
