import React from "react";
import Headers from "../layouts/Headers";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Details = () => {
  const { id } = useParams();
  const location = useLocation();
  const history = useNavigate();

  const queryParams = new URLSearchParams(location.search);

  const queryValue = queryParams.get("title");
  const queryPoster = queryParams.get("poster");
  const queryRate = queryParams.get("rate");
  const queryDesc = queryParams.get("desc");

  return (
    <div className="container-fluid p-0">
      <Headers />
      <div
        className="ms-4 mt-2"
        style={{ cursor: "pointer" }}
        onClick={() => history(-1)}
      >
        <ArrowBackIcon fontSize={"large"} />
      </div>
      <div
        className="container mt-3 d-flex p-2"
        style={{ backgroundColor: "#C9CCDC" }}
      >
        <div
          className="image-div"
          style={{
            width: "18rem",
          }}
          key={id}
        >
          <img
            src={"https://image.tmdb.org/t/p/w185" + queryPoster}
            className="card-img-top"
            style={{
              width: "18rem",
              height: "22rem",
              backgroundColor: "#02030A",
            }}
            alt="..."
          />
        </div>

        <div className="details-div d-flex flex-column ms-3">
          <div className="d-flex justify-content-between w-25">
            <h5 className="card-title mx-0">{queryValue}</h5> {/**/}(
            <h5>{queryRate}</h5>)
          </div>
          <h4> Year | Length | Director</h4>
          <h4>Cast: Actor1, Actor2, ...</h4>
          <p className="fs-5">{queryDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
