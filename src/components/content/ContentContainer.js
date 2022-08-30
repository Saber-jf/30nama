import React from "react";
import MovieCardSlider from "./MovieCardSlider";
import Select from "./Select";

function ContentContainer({ value, filmData, func }) {
  return (
    <div className="">
      <div className="w-full ml-5 mt-10 z-10  ">
        <div className=" relative z-10  ">
          <Select slectionInfo={value} func={func} />
        </div>
        <div className="mt-10">
          <MovieCardSlider filmData={filmData} slectionInfo={value} />
        </div>
      </div>
    </div>
  );
}

export default ContentContainer;
