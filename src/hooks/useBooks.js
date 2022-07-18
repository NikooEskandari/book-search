import { useState, useEffect } from "react";

export function useBooks() {
  const [query, setQuery] = useState("");
  const [queryString, setQueryString] = useState("");
  const [docs, setDocs] = useState([]);

  const updateQueryString = (input) => {
    setQueryString(
      input.toLowerCase().replace(/\s+/g, " ").trim().replaceAll(" ", "+")
    );
  };

  const updateDocs = (newDocs) => {
    setDocs(newDocs);
  };

  const sortDocs = (e, type) => {
    e.preventDefault();

    const copy = [...docs];

    let sortedResults = copy.sort((a, b) => {
      if (type === "title") {
        const aTitle = a.title.toUpperCase();
        const bTitle = b.title.toUpperCase();

        if (aTitle < bTitle) return 1;
        if (aTitle > bTitle) return -1;
        return 0;
      } else if (type === "date") {
        return b.publish_date - a.publish_date;
      } else {
        return 0;
      }
    });

    updateDocs(sortedResults);
  };

  const searchBooks = async () => {
    if (!queryString) {
      return;
    }

    fetch(`http://openlibrary.org/search.json?q=${queryString}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((actualData) => updateDocs(actualData.docs));
  };

  useEffect(() => {
    updateDocs(docs);
  }, [docs]);

  return { query, setQuery, updateQueryString, searchBooks, docs, sortDocs };
}
