import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useBooks } from "../hooks/useBooks";
import BookWidget from "./BookWidget";

export default function BookSearch() {
  const { query, setQuery, updateQueryString, searchBooks, docs, sortDocs } = useBooks();

  const handleChange = (e) => {
    setQuery(e.target.value);
    updateQueryString(e.target.value);
  };

  const handleClick = () => {
    searchBooks();
  };

  return (
    <div className="book-container">
      <div className="search-container">
        <input
          className="book-title-input"
          placeholder="Search book"
          name="query"
          value={query}
          onChange={(e) => handleChange(e)}
        />
        <FontAwesomeIcon
          icon={faSearch}
          width="20px"
          onClick={(e) => handleClick()}
        />
      </div>
      <div className="sort-options">
        <button onClick={(e) => sortDocs(e, "title")}>Sort Alphabetically</button>
        <button onClick={(e) => sortDocs(e, "date")}>Sort by Recently Published</button>
      </div>
      <div className="search-result">
        {docs?.map((doc, index) => {
          return <BookWidget key={index} doc={doc} />;
        })}
      </div>
    </div>
  );
}
