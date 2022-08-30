import React, { useEffect } from "react";
import Header from "../components/header/Header";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "../redux/Slices/searchSlice";
import SubContent from "../components/content/SubContent";

function Search() {
  const { searchKey } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearch(searchKey));
  }, []);

  const results = useSelector((state) => state.searchResults.searchContents);
  console.log(results);

  return (
    <div>
      <Header />
      <div className="bg-gray-100 py-10  ">
        <SubContent typeName={results} />
      </div>
    </div>
  );
}

export default Search;
