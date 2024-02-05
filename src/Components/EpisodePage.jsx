import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import useMovieData from "../Hooks/useMovieData";

function EpisodePage() {
  const { movieid, season, episode, seriesname, totalepisodes } = useParams();
  const [movieData, setmovieData] = useState(null);

  useEffect(() => { 
    const top = document.getElementById("top");
    //
    if (top) {
      top.scrollIntoView({ behavior: "smooth" });
      console.log(top);
    }
  }, [episode]);

  const navigate = useNavigate();

  const data = useMovieData({ movieid, season, episode });

  if (data == null)
    return (
      <div className="movie-results">
        {" "}
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      </div>
    );

  return (
    <div
      style={{ backgroundImage: `url(${data?.Poster})` }}
      className="movie-results"
    >
      <div className="moviepage">
        <div id="top"></div>

        {data?.Response == "True" && (
          <div className="episode-card">
            <h1 id="top">{seriesname + ` S0${season}-E0${episode}`}</h1>
            <img
              src={
                data.Poster !== "N/A"
                  ? data.Poster
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png"
              }
              alt=""
            />

            <div className="episode-detail">
              <h1>{data.Title}</h1>
              {Object.keys(data).map(
                (key, i) =>
                  data[key] !== "N/A" &&
                  key !== "Ratings" &&
                  key !== "Response" &&
                  key !== "Poster" &&
                  key !== "imdbID" && 
                  key !== "Title" &&
                  key !== "Title" &&
                  key !== "seriesID" && (
                    <p key={key}>
                      <b>{key} : </b>
                      {`${data[key]}`}
                      {key == "imdbRating" && "⭐"}
                    </p>
                  )
              )}
            </div>
          </div>
        )}

        {data?.Response == "False" && (
          <div className="loader-container">No Data Found</div>
        )}

        {data?.Response == "True" && (
          <div className="pagesnavigation">
            <button
              disabled={episode == 1 && true}
              onClick={() => {
                navigate(
                  `/series/${seriesname}/${movieid}/season/${season}/episode/${
                    Number(episode) - 1
                  }/total/${totalepisodes}`
                );
              }}
            >
              {episode != 1 ? (
                "PrevEpisode"
              ) : (
                <Link to={`/movie/${movieid}/season/${season}`}>Go Back</Link>
              )}
            </button>
            <p>
              {episode}/{totalepisodes}
            </p>
            <button
              disabled={episode == totalepisodes}
              onClick={() => {
                navigate(
                  `/series/${seriesname}/${movieid}/season/${season}/episode/${
                    Number(episode) + 1
                  }/total/${totalepisodes}`
                );
              }}
            >
              NextEpisode
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default EpisodePage;
