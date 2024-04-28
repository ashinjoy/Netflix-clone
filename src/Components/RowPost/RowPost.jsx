import React, { useState, useEffect } from "react";
import axios from "../../axios";
import YouTube from "react-youtube";
import "./RowPost.css";
import { Image_BaseUrl } from "../Constants/Constant";

function RowPost({ title, url, small }) {
  const [movies, setMovies] = useState([]);
  const [key, setKey] = useState("");
  const handleClick = (id) => {
    axios.get(`movie/${id}/videos`).then((response) => {
      console.log(response.data);
      if (response.data.results.length != 0) {
        setKey(response.data.results[0].key)
      } else {
        console.log("Empty data");
      }
    });
  };
  useEffect(() => {
    axios.get(url).then((response) => {
      // console.log(response.data);
      setMovies(response.data.results);
    });
  }, [url]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="posters">
        {movies.map((movie, index) => {
          return (
            <img
              className={small ? "smallPoster" : "poster"}
              onClick={() => {
                handleClick(movie.id);
              }}
              key={index}
              alt="poster"
              src={`${Image_BaseUrl.concat(movie.poster_path)}`}
            />
          );
        })}
      </div>
      {key && <YouTube videoId={key} opts={opts} />}
    </div>
  );
}

export default RowPost;
