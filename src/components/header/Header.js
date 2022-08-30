import React, { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { GiFilmProjector } from "react-icons/gi";
import { Link } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import { getAllGenres } from "../../redux/Slices/genreSlice";

import Search from "./Search";
import Hamburger from "./Hamburger";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const [isShown, setIsShown] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [piValue, setApiValue] = useState("");
  const [hambur, setHambur] = useState(false);
  const [genresShow, setGenresShow] = useState("false");
  const dispatch = useDispatch();

  const genres = useSelector((state) => state.genres.genres);
  useEffect(() => {
    dispatch(getAllGenres());
  }, []);

  useEffect(() => {
    setSearchValue("");
  }, [isShown]);
  const searchHandler = (event) => {
    setSearchValue(event.target.value);
  };

  console.log(hambur);
  return (
    <div className=" relative  w-full h-[80px] flex items-center justify-between bg-[#032541]">
      <div className="grid grid-cols-3 md:grid-cols-2  content-center items-center w-full px-4 md:px-10 max-w-[1500px] mx-auto">
        <div onClick={() => setHambur(!hambur)} className="space-y-1 md:hidden">
          <div className="w-5 border-b-2 border-[#d8a3f1]"></div>
          <div className="w-5 border-b-2 border-[#d8a3f1]"></div>
          <div className="w-5 border-b-2 border-[#d8a3f1]"></div>
        </div>
        <Link className="md:hidden" to="/">
          <div className="text-center text-[#d8a3f1]  italic text-2xl font-semibold font-serif md:hidden ">
            Lens
          </div>
        </Link>
        <div className=" text-[#d8a3f1]   flex flex-row items-center justify-end font-serif text-2xl md:hidden">
          <span>
            <MdSearch />
          </span>
        </div>
        <div className=" items-center space-x-4 hidden md:flex">
          <Link to="/">
            <div className="text-center text-[#d8a3f1]  italic text-2xl font-semibold font-serif">
              Lens
            </div>
          </Link>
          <div className="flex text-white font-semibold space-x-6 relative">
            <h1 className="cursor-pointer hover:font-extrabold transition-all ">
              Movie
            </h1>
            <h1 className="cursor-pointer hover:font-extrabold transition-all ">
              Tv Shows
            </h1>
            <h1
              onClick={() => setGenresShow(!genresShow)}
              className="cursor-pointer  transition-all "
            >
              Genres
              <div
                className={` ${
                  genresShow ? "w-0" : "w-[300px]"
                }   bg-gray-200 overflow-hidden absolute z-20  rounded-xl box-content mt-4 transition-all `}
              >
                <div className="my-6 px-5  ">
                  {genres.map((genre) => (
                    <Link to={`/genre/${genre.name}/${genre.id}`}>
                      <h1
                        onClick={() => setGenresShow(!genresShow)}
                        className="pr-4 py-[3px] text-black cursor-pointer hover:font-extrabold  hover:text-gray-800  "
                      >
                        {genre.name}
                      </h1>
                    </Link>
                  ))}
                </div>
              </div>
            </h1>
            <h1 className="cursor-pointer hover:font-extrabold transition-all ">
              More
            </h1>
          </div>
        </div>

        <div className="items-center text-white justify-end space-x-10 hidden md:flex ">
          <h1 className="font-extrabold text-4xl text-center pb-2 cursor-pointer ">
            +
          </h1>
          <span className="border-2 px-1 rounded-sm cursor-pointer ">EN</span>
          <div className="text-xl cursor-pointer">
            <IoIosNotifications />
          </div>
          <span className="w-10 h-10 text-center leading-[40px] bg-blue-500 rounded-full cursor-pointer">
            S
          </span>
          <div className=" cursor-pointer text-[#d8a3f1]   flex flex-row items-center justify-end font-serif text-2xl">
            <span>
              <MdSearch onClick={() => setIsShown(!isShown)} />
            </span>
          </div>
        </div>
      </div>
      <div
        className={` flex items-baseline  absolute top-0 transition-all overflow-hidden z-10 w-full bg-indigo-500   ${
          isShown ? "h-[60px]" : "h-0"
        }  `}
      >
        <div className="flex items-center h-full w-full  ">
          <input
            value={searchValue}
            onChange={searchHandler}
            placeholder="Search"
            className="border-2 border-[#9375af] w-2/3 h-full px-3 bg-[#5d4e77]   "
          />

          <div className="  mr-10 text-3xl   ">
            <GiFilmProjector />
          </div>
          <div className="pr-5 text-3xl   ">
            <MdKeyboardArrowUp onClick={() => setIsShown(!isShown)} />
          </div>
        </div>
      </div>

      <Hamburger hambur={hambur} />
    </div>
  );
}

export default Header;
