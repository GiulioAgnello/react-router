import axios from "axios";
import { useState, useEffect } from "react";

let baseurlApi = "https://lanciweb.github.io/demo/api/actresses/";

export default function Male() {
  // presa dei dati
  const [actors, setActors] = useState([]);

  function fetchactor() {
    axios.get(`${baseurlApi}`).then((res) => {
      setActors(res.data);
    });
  }
  useEffect(fetchactor, []);
  return (
    <>
      <div className="container-sm  mt-5">
        <div className="row g-2">
          {actors.map((actor) => (
            <div key={actor.id} className="col-3  ">
              <div className="card vh-100">
                <img
                  src={actor.image}
                  className="card-img-top "
                  alt={actor.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{actor.name}</h5>
                  <hr />
                  <small>Anno di nascita: {actor.birth_year}</small>
                  <small> Nazionalità: {actor.nationality}</small>
                  <hr />
                  <p className="card-text fs-6">{actor.biography}</p>
                  <hr />
                  <small>Awards: {actor.awards}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
