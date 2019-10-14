import React, { useEffect, useState } from "react";
import realityhigh from "../assets/realityhigh.jpg";
import rucker50 from "../assets/rucker50.jpg";
import selfie from "../assets/selfie.jpg";
import roxy from "../assets/roxy.jpg";
import { Icon, Tabs, Tab } from "react-materialize";
import { elastic } from "../elastic";
import Button from "react-materialize/lib/Button";
import oblivion from "../assets/oblivion.jpg";
function Movies() {
  useEffect(() => {
    // Update the document title using the browser API
    document.title = "Netflix";
  }, []);

  const movies = [
    {
      id: 1,
      title: "Reality High",
      img: realityhigh,
      progress: 70,
      rating: 5,
      genre: "Thriller | Discovery"
    },
    {
      id: 2,
      title: "Rucker 50",
      img: rucker50,
      progress: null,
      rating: 4,
      genre: "Thriller | Discovery"
    },
    {
      id: 3,
      title: "Selfie",
      img: selfie,
      progress: 25,
      rating: 2,
      genre: "Thriller | Discovery"
    },
    {
      id: 4,
      title: "Roxy",
      img: roxy,
      progress: null,
      rating: 1,
      genre: "Thriller | Discovery"
    },
    {
      id: 5,
      title: "Reality High",
      img: realityhigh,
      progress: 70,
      rating: 5,
      genre: "Thriller | Discovery"
    },
    {
      id: 6,
      title: "Rucker 50",
      img: rucker50,
      progress: null,
      rating: 4,
      genre: "Thriller | Discovery"
    },
    {
      id: 7,
      title: "Selfie",
      img: selfie,
      progress: 25,
      rating: 2,
      genre: "Thriller | Discovery"
    },
    {
      id: 8,
      title: "Roxy",
      img: roxy,
      progress: null,
      rating: 1,
      genre: "Thriller | Discovery"
    }
  ];
  const [focus, setFocus] = useState(null);
  const [filtered, setFiltered] = useState(movies);
  const handleSearch = e => {
    setFiltered(elastic(e.target.value, movies, ["title", "genre"]));
  };
  return (
    <div>
      <div className="header-cover">
        <img src={oblivion} className="poster" />
        {/* <div className="poster-info-container">
          <div className="poster-title">OBLIVION</div>
          <div className="poster-description">Tom Cruise is confused.</div>
          <div className='row'>
            <Button className="col s4 grey poster-button">Play</Button>
            <Button className="col s4 grey poster-button">Add to my List</Button>
            <Button className="col s4 grey poster-button">More Info</Button>
          </div>
        </div> */}
      </div>
      <div className="section">
        {/* <div className="row">
          <div className="col s12 m6"></div>
          <div className="col s12 m6">
            <div className="card">
              <div className="card-content">
                <div className="input-field">
                  <i className="material-icons prefix">search</i>
                  <input
                    id="icon_prefix"
                    type="text"
                    className="validate"
                    onChange={e => handleSearch(e)}
                  />
                  <label for="icon_prefix">Search</label>
                </div>
                <div>
                  <Button>Filter</Button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="row">
          {filtered.map(movie => (
            <div className="col s6 m3 l2 position-relative">
              <div
                className="movie-container"
                onMouseEnter={() => setFocus(movie.id)}
                onMouseLeave={() => setFocus(null)}
              >
                {focus === movie.id ? (
                  <div className="image-cover">
                    <img src={movie.img} className="responsive-img" />
                  </div>
                ) : (
                  <img src={movie.img} className="responsive-img" />
                )}
                {focus === movie.id && (
                  <div className="movie-details-container absolute-bottom">
                    <div className="movie-details">
                      <div className="movie-title blue-text">{movie.title}</div>
                      <div className="movie-genre white-text">
                        {movie.genre}
                      </div>
                      <div className="movie-rating green-text">
                        <Icon className="tiny">star</Icon>
                        <Icon className="tiny">star</Icon>
                        <Icon className="tiny">star</Icon>
                        <Icon className="tiny">star</Icon>
                        <Icon className="tiny">star</Icon>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="progress grey"
                style={{
                  visibility:
                    (!movie.progress || focus === movie.id) && "hidden"
                }}
              >
                <div
                  className="determinate red"
                  style={{ width: movie.progress + "%" }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Movies;
