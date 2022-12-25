import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyword}...`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <div className="row">
          <div className="col-lg-6 col-md-12 mt-4">
            <span className="Enter-word">
              Please enter the word which you are interested in (example: book,
              sunset, wine etc.)
            </span>
          </div>
          <div className="col-lg-6 col-md-12 p-0">
            <form onSubmit={search}>
              <input
                type="search"
                onChange={handleKeywordChange}
                autoFocus={true}
              />
            </form>
          </div>
        </div>
      </section>
      <Results results={results} />
    </div>
  );
}
