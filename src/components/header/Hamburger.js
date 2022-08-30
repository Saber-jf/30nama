import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Hamburger({ hambur }) {
  const [isShown, setIsShown] = useState(false);
  const genres = useSelector((state) => state.genres.genres);
  console.log(hambur);
  return (
    <>
      <div
        className={`absolute top-20 ${
          hambur ? "w-5/6" : "w-0"
        }  h-[800px] bg-[#032541f2] z-30 transition-all duration-300 overflow-hidden `}
      >
        <div className="px-8 mt-20">
          <h1 className="text-white text-[1.5rem] font-bold pb-4 ">Movies</h1>
          <h1 className="text-white text-[1.5rem] font-bold pb-4 ">TV Shows</h1>
          <h1 className="text-white text-[1.5rem] font-bold pb-4 ">People</h1>
          <div className="text-white text-[1.5rem] font-bold pb-4 flex items-end ">
            <h1 className="pr-4">Genres</h1>
            <MdKeyboardArrowRight onClick={() => setIsShown(!isShown)} />
          </div>
        </div>
        <div
          className={`absolute top-20 right-[16.66666666%] ${
            isShown ? "w-5/6" : "w-0"
          }  h-auto bg-[#032541] z-40 transition-all duration-300 overflow-hidden `}
        >
          <div className="text-white text-[1.5rem] font-bold pb-4 px-8 mt-20 ">
            <MdKeyboardArrowRight
              style={{ fontSize: "50px" }}
              onClick={() => setIsShown(!isShown)}
            />

            {genres.map((genre) => (
              <Link to={`/genre/${genre.name}/${genre.id}`}>
                <h1 className="pr-4">{genre.name}</h1>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hamburger;
