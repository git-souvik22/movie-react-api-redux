import React, { useState } from "react";
import Headers from "../layouts/Headers";
import Cards from "../components/Cards";
import { useSelector } from "react-redux";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const state = useSelector((state) => state);
  let { movie } = state;
  let { data } = movie;
  let { results } = data;

  const filteredMovies = results.filter((item) =>
    item.original_title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="container-fluid p-0">
      <Headers
        page={"home"}
        value={searchQuery}
        searchChange={handleSearchChange}
      />
      <section
        className="d-flex justify-content-around flex-wrap px-2 pt-5"
        style={{ backgroundColor: "#808087" }}
      >
        <Cards query={searchQuery} filterCard={filteredMovies} />
      </section>
    </div>
  );
};

export default Home;
