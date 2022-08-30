import Rating from "../Rating";
import { Link } from "react-router-dom";
import { addToMyList } from "../../redux/Slices/mylist";
import { useDispatch } from "react-redux";
function MovieCard({ film, slectionInfo }) {
  const dispatch = useDispatch();
  return (
    <>
      <Link to={`/${film.id}`}>
        <div className=" h-full flex flex-col content-end bg-white rounded-2xl overflow-hidden  mb-6  ">
          <div className=" relative w-full rounded-2xl">
            <img
              className=" rounded-2xl  w-full"
              src={`http://image.tmdb.org/t/p/w1280${film.poster_path}`}
            />

            <div className="absolute -bottom-5 left-4  ">
              <Rating rate={film.vote_average} />
            </div>
          </div>

          <div className="mt-6 mb-2 pl-2 ">
            <h1 className="text-[1rem]  md:text-[1.2rem] font-extrabold ">
              {film.original_title}
            </h1>

            <h1 className="text-gray-500 text-[0.9rem]">{film.release_date}</h1>
          </div>
        </div>
      </Link>
    </>
  );
}

export default MovieCard;
