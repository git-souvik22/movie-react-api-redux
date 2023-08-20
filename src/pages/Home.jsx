import React, { useState } from "react";
import Headers from "../layouts/Headers";
import Cards from "../components/Cards";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

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
        <Cards query={searchQuery} />
      </section>
    </div>
  );
};

export default Home;
