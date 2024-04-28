import React from "react";
import { useEffect, useState } from "react";
import axios from "../../axios";
import { Image_BaseUrl } from "../Constants/Constant";
import "./Banner.css";
function Banner() {
  // const [banner,setBanner] = useState('')
  const [movie, setMovie] = useState(null);
//   const [description, setDescription] = useState("");

  useEffect(() => {
    axios
      .get("/movie/popular?language=en-US&page=1")
      .then((res) => {
        // console.log(res.data.results[0])
        setMovie(res.data.results[0]);
        // setDescription(res.data.results[0].overview);
      })
      .catch((error) => console.error(error));
  }, []);
const style ={
    backgroundImage:`url(${movie ? Image_BaseUrl.concat(movie.backdrop_path) : ""})`
}
  return (
    <div className="banner" style={style}>
      <div className="content">
        <h1 className="title">{movie ? movie.title : ''}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">{movie ? movie.overview  : ""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
