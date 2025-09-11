import React, { useState } from 'react';
import Counter from './Counter';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { API } from './global';



export default function Movie({ movieTake, getMovies }) {
  

  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const deleteMovie = (id) => {
    // fetch(`https://65f16d7e034bdbecc76288e7.mockapi.io/movie/${id}`, {
    fetch(`${API}/delete/${id}`, {
      method: "DELETE",
    })
      .then(() => getMovies())
      .then(() => alert("this card gets deleted now."));
  };

  return (
    <Card className="movie-container">
      <br />
      <img className="movie-poster" src={movieTake.poster} alt='Loading' />
      <CardContent>
        <div className="movie-spec">
          <h2>
            {movieTake.name}
            <IconButton
              color="secondary"
              aria-label="Toggle-Description"
              onClick={() => setShow(!show)}
            >
              {show ? (
                <ExpandMoreIcon fontSize="small" color="secondary" />
              ) : (
                <ExpandLessIcon fontSize="small" color="secondary" />
              )}
            </IconButton>
          </h2>

          <IconButton
            color="secondary"
            aria-label="Movie-info"
            onClick={() => navigate(`/portal/view/${movieTake._id}`)}
          >
            <InfoIcon fontSize="medium" />
          </IconButton>

          <h3 className="movie-rating">⭐{movieTake.rating}</h3>
        </div>
      </CardContent>

      {!show ? <p className="movie-summary">{movieTake.summary}</p> : null}

      <CardActions>
        <Counter />
        <IconButton
          sx={{ marginLeft: "auto" }}
          aria-label="editMovie"
          onClick={() => navigate(`/portal/edit/${movieTake._id}`)}
        >
          <EditIcon color="primary" />
        </IconButton>
        <IconButton
          sx={{ marginLeft: "auto" }}
          aria-label="deleteMovie"
          onClick={() => deleteMovie(movieTake._id)}
        >
          <DeleteIcon color="primary" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
