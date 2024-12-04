import "./App.css";
import { useState } from "react";
import Picture from "./components/Picture";
function App() {
  const [word, setWord] = useState("");
  const [picture, setPicture] = useState([]);
  function searchImage(e) {
    e.preventDefault();
    if (!word) {
      alert("Please fill input");
    } else {
      // console.log(word);
      fetchImageFromAPI();
      // console.log(import.meta.env);
    }
  }
  async function fetchImageFromAPI() {
    const url = `${
      import.meta.env.VITE_API_URL
    }?page=1&query=${word}&client_id=${
      import.meta.env.VITE_API_KEY
    }&per_page=12`;
    // console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.results);
    const result = data.results;
    if (result.length == 0) {
      alert("No Picture");
      setWord("");
    } else {
      // console.log(result);
      setPicture(result);
    }
  }
  return (
    <div className="app">
      <h1>Search Picture with API</h1>
      <form onSubmit={searchImage}>
        <div className="box-search">
          <input
            type="text"
            name=""
            id=""
            placeholder="fill name picture"
            className="box-input"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <button type="submit" className="btn-search">
            Search
          </button>
        </div>
      </form>
      <div className="search-show">
        {picture.map((data, index) => {
          return <Picture {...data} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
