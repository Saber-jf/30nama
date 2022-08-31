import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import SubContent from "../components/content/SubContent";
import { useDispatch, useSelector } from "react-redux";
import { getAllGenres } from "../redux/Slices/genreSlice";
import { getTheGenre } from "../redux/Slices/genreSlice";
import Header from "../components/header/Header";
import PaginatedItems from "../components/PaginatedItems";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function ContentsPage() {
  const { genre, id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTheGenre({ page: 1, id: id }));
  }, [id]);

  function nextPage(page) {
    console.log(page);
    dispatch(getTheGenre({ page: page, id: id }));
  }
  const Genre = useSelector((state) => state.genres.theGenre);
  console.log(Genre);

  console.log();
  return (
    <>
      <div className="fixed z-40 w-full mx-auto">
        <Header />
      </div>

      <div className="bg-gray-100 py-28">
        <SubContent typeName={Genre.results} />
      </div>
      <div className="flex justify-center pb-10 w-full ">
        <PaginatedItems NumberOfPage={Genre.total_pages} func={nextPage} />
      </div>
      <Footer />
    </>
  );
}

export default ContentsPage;
