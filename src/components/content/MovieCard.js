import Rating from "../Rating";
import { Link } from "react-router-dom";
import { addToMyList } from "../../redux/Slices/mylist";
import { useDispatch } from "react-redux";
function MovieCard({ film, slectionInfo }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className=" h-full flex flex-col content-end bg-white rounded-2xl overflow-hidden ">
        <div className=" relative w-full rounded-2xl">
          <img
            className="   w-full"
            src={`http://image.tmdb.org/t/p/w1280${film.poster_path}`}
          />

          <div className="absolute -bottom-5 left-4  ">
            <Rating rate={film.vote_average} />
          </div>
          <h1
            onClick={() => dispatch(addToMyList(film.id))}
            className="absolute -bottom-5 right-4 z-10  "
          >
            Add
          </h1>
        </div>
        <Link to={`/${film.id}`}>
          <div className="my-10 pl-6 ">
            <h1 className="text-[1.2rem] font-extrabold ">
              {film.original_title}
            </h1>

            <h1 className="text-gray-500 text-[1.2rem]">{film.release_date}</h1>
          </div>
        </Link>
      </div>
    </>
  );
}

export default MovieCard;
