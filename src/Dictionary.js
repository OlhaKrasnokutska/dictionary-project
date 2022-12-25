import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f917000010000010395026e42774b538afa9f2d2ec542eb";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
      <Photos photos={photos} />
    </div>
  );
}
