import React from "react";
import MovieCardSlider from "./MovieCardSlider";
import Select from "./Select";

function ContentContainer({ value, filmData, func }) {
  return (
    <div className="w-full md:w-full mx-auto">
      <div className="w-full mt-10 z-10">
        <div className=" w-[90%] relative z-10">
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
