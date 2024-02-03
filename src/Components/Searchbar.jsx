import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Searchbar({ styles, placeholder, btn = false }) {
  const navigate = useNavigate();

  const [search, setsearch] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${search.replace("  ", " ").trim()}/page/1`);
    setsearch("");
  };

  return (
    <form onSubmit={handlesubmit} className={styles}>
      <input
        name="movie-search"
        required
        value={search}
        onChange={(e) => setsearch(e.target.value)}
        placeholder={placeholder}
        type="text"
      />
      {btn && <input value={"Search"} type="submit" />}
    </form>
  );
}

export default Searchbar;
