import React, { useEffect } from "react";
import Header from "../components/header/Header";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "../redux/Slices/searchSlice";
import SubContent from "../components/content/SubContent";
import Footer from "../components/Footer";

function Search() {
  const { searchKey } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearch(searchKey));
  }, []);

  const results = useSelector((state) => state.searchResults.searchContents);

  return (
    <div>
      <div className="fixed z-40 w-full mx-auto">
        <Header />
      </div>

      <div className="bg-gray-100 py-28">
        <SubContent typeName={results} />
      </div>
      <Footer />
    </div>
  );
}

export default Search;
