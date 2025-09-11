import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { API } from "./global";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/getone/${id}`, { method: "GET" })
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  }, [id]);

  if (!movie) {
    return (
      <h2 style={{ textAlign: "center", color: "red" }}>
        Loading movie...
      </h2>
    );
  }

  return (
    <div className="movie-detail-page">
      <div className="movie-detail-container">

        <div className="trailer-container">
          <iframe
            src={movie.trailer}
            title={movie.name}
            allowFullScreen
          />
        </div>

        <div className="movie-detail-spec">
          <h2 className="movie-detail-name">{movie.name}</h2>
          <span className="movie-detail-rating">⭐ {movie.rating}</span>
        </div>

        
        <p className="movie-detail-summary">{movie.summary}</p>

        
        <Button
          variant="contained"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          style={{ marginTop: "20px" }}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
