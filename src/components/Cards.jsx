import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchMovies } from "../redux/slice/movieSlice";

const Cards = ({ query }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleMovieClick = (movieId, title, poster, rate, desc) => {
    navigate(
      `/movie/${movieId}?title=${title}&poster=${poster}&rate=${rate}&desc=${desc}`
    );
  };

  const state = useSelector((state) => state);
  let { movie } = state;
  let { data } = movie;

  // const filteredMovies = results.filter((item) =>
  //   item.original_title.toLowerCase().includes(query.toLowerCase())
  // );

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch, query]);

  if (state.movie.isLoading) {
    return <h1 className="fs-1 fw-bold text-center text-white">Loading...</h1>;
  }
  if (state.movie.error) {
    return <h1>Error!</h1>;
  }

  return (
    <>
      {query === "" ? (
        state.movie.data &&
        data.results.map((e) => (
          <div
            className="card border-2"
            style={{
              width: "16.7rem",
              marginBottom: "20px",
              borderRadius: "12px",
              cursor: "pointer",
            }}
            onClick={() =>
              handleMovieClick(
                e.id,
                e.original_title,
                e.poster_path,
                e.vote_average,
                e.overview
              )
            }
            key={e.id}
          >
            <img
              src={"https://image.tmdb.org/t/p/w185" + e.poster_path}
              className="card-img-top"
              style={{
                width: "16.5rem",
                height: "15rem",
                backgroundColor: "#02030A",
                borderTopLeftRadius: "12px",
                borderTopRightRadius: "12px",
              }}
              alt="..."
            />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">{e.original_title}</h5>
                <p>{e.vote_average}</p>
              </div>
              <p className="card-text">{e.overview}</p>
            </div>
          </div>
        ))
      ) : (
        <>
          {/* {filteredMovies.map((ele) => (
            <div
              className="card border-2"
              style={{
                width: "16.7rem",
                marginBottom: "20px",
                borderRadius: "12px",
                cursor: "pointer",
              }}
              onClick={() =>
                handleMovieClick(
                  ele.id,
                  ele.original_title,
                  ele.poster_path,
                  ele.vote_average,
                  ele.overview
                )
              }
              key={ele.id}
            >
              <img
                src={"https://image.tmdb.org/t/p/w185" + ele.poster_path}
                className="card-img-top"
                style={{
                  width: "16.5rem",
                  height: "15rem",
                  backgroundColor: "#02030A",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                }}
                alt="..."
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title">{ele.original_title}</h5>
                  <p>{ele.vote_average}</p>
                </div>
                <p className="card-text">{ele.overview}</p>
              </div>
            </div>
          ))} */}
        </>
      )}
    </>
  );
};

export default Cards;
