import { Home, Search } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Headers = ({ page, value, searchChange }) => {
  const navigate = useNavigate();

  return (
    <div className="col-12">
      <div className="d-flex justify-content-between py-2 ps-3 pe-5 border-bottom shadow-sm">
        {page === "home" ? (
          <form>
            <div
              className=" px-3 py-2 rounded-2"
              style={{ backgroundColor: "#C2C7C9" }}
            >
              <Search />
              <input
                type="search"
                placeholder="Search"
                className="border-0 search-input ps-2"
                style={{ backgroundColor: "#C2C7C9", width: "370px" }}
                value={value}
                onChange={searchChange}
              ></input>
            </div>
          </form>
        ) : (
          <p className="fs-4 fw-semibold m-0">Movie Details</p>
        )}

        <div
          style={{ cursor: "pointer" }}
          onClick={page !== "home" ? () => navigate("/") : null}
        >
          <Home fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Headers;
