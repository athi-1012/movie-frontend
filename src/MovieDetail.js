import { ArrowBack } from '@mui/icons-material';
import { Button } from '@mui/material';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';


export default function MovieDetail() {
    const{id}= useParams();
    const [movie,setMovie]=useState([]);
    const navigate = useNavigate();

     useEffect(()=>{
        fetch(`https://65f16d7e034bdbecc76288e7.mockapi.io/movie/${id}`,{
            method:"GET"
        })
        .then((data)=>data.json())
        .then((mv)=>setMovie(mv));
     },[]);
     console.log(movie);

     const ratingStyles={
        color:movie.rating>=8.5?"green":"red",
     }
  return (
    <div><iframe width="999" height="418" src={movie.trailer} 
    title={movie.name} frameborder="0"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
     allowfullscreen></iframe>
     <div className='movie-detail-container'>
        <div className='movie-spec'>
            <h2 className='movie-name'>{movie.name}</h2>
            <h3 style={ratingStyles} className='movie-rating'>⭐{movie.rating}</h3>
        </div>
        <p className='movie-summary'>{movie.summary}</p>
     </div>
     <Button variant="contained" startIcon={<ArrowBackIcon/>} onClick={()=> navigate(-1)}>
Back

     </Button>
     </div>
     
  )
}
