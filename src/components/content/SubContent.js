import React from "react";
import Header from "../header/Header";
import MovieCard from "./MovieCard";

function SubContent({ typeName }) {
  return (
    <div>
      <div className="grid grid-cols-2 max-w-[1600px] mx-auto lg:grid-cols-4 gap-4 lg:gap-8 px-2 ">
        {typeName?.map((film) => (
          <MovieCard film={film} />
        ))}
      </div>
    </div>
  );
}

export default SubContent;
