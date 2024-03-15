import React from 'react'
import Movie from './Movie'
import { useState } from 'react';
import { useEffect } from 'react';

export default function MovieList() {
    const[movie,setMovie]=useState([]);
    const getMovies=()=>{
        fetch("https://65f16d7e034bdbecc76288e7.mockapi.io/movie",{
            method:"GET",
        })
        .then((data)=>data.json())
        .then((mvs)=>setMovie(mvs));
    };

    useEffect(()=>{
        getMovies()
    },[]);
    console.log(movie);
//     const data = [
//         {
//             id: "99",
//             name: "Vikram",
//             poster: "https://th.bing.com/th?id=OIP.8AoKpvQuWMpSPfngRM-ZCQHaLP&w=202&h=308&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
//             rating: 8.4,
//             summary: "Members of a black ops team must track and eliminate a gang of masked murderers.",
//             trailer: "https://www.youtube.com/embed/OKBMCL-frPU"
//         },
//         {
//             id: "100",
//             name: "La La Land",
//             poster: "https://th.bing.com/th/id/OIP.T2UARPgmpiJS96P511N6SgHaLH?rs=1&pid=ImgDetMain",
//             rating: 8.8,
//             summary: "Aspiring actress serves lattes to movie stars in between auditions and jazz musician Sebastian scrapes by playing cocktail-party gigs in dingy bars. But as success mounts, they are faced with decisions that fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",  
//             trailer: "https://www.youtube.com/embed/f_vbAtFSEc0"
//         },
//         {
//             id: "101",
//             name: "Iron man",
//             poster: "https://image.tmdb.org/t/p/original/205zGVXs8fraqPgirjkCIx4J55h.jpg",
//             rating: 7,
//             summary: "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//             trailer: "https://www.youtube.com/embed/wKtcmiifycU"
//         },
//         {
//             id: "102",
//             name: "Cars",
//             poster: "https://resized-image.uwufufu.com/worldCupSelection/1689585371014250/original/Cars.jpg",
//             rating: 8.1,
//             summary: "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//             trailer: "https://www.youtube.com/embed/38A__WT3-o0"
//         },
//         {
//             id: "103",
//             name: "Jai Bhim",
//             poster: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5.V1_FMjpg_UX1000.jpg",
//             summary: "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//             rating: 8.8,
//             trailer: "https://www.youtube.com/embed/nnXpbTFrqXA"
//         },
//         {
//             id: "104",
//             name: "Coco",
//             rating: 8,
//             summary: "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//             poster: "https://nondisneyinternationaldubbings.weebly.com/uploads/5/5/8/3/55831083/coco-portuguese-2_orig.jpg",
//             trailer: "https://www.youtube.com/embed/eOrNdBpGMv8"
//         },
//         {
//             id: "105",
//             name: "Interstellar",
//             poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL.SL1500.jpg",
//             rating: 8.6,
//             summary: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//       trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
//         },
//         {
//             id: "106",
//             name: "Batman",
//             poster: "https://www.themoviedb.org/t/p/original/gmU7P3FzGFsl2wiSDhx9znZCNub.jpg",
//             rating: 8,
//             summary: "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//             trailer: "https://www.youtube.com/embed/sOEg_YZQsTI"
//         },
//         {
//             id: "107",
//             name: "Ratatouille",
//             poster: "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//             rating: 8,
//             summary: "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//             trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w"
//         },
//         {
//             name: "ok kanmani",
//             poster: "https://image.tmdb.org/t/p/original/rtoHZpdZ98F2WVFSIUNGTzneD0a.jpg",
//             summary: "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
//             rating: 8,
//             trailer: "https://www.youtube.com/embed/KsH2LA8pCjo",
//             id: "108"
//         },
//         {
//             name: "Spiderman",
//             poster: "https://image.tmdb.org/t/p/original/vSsOo0GwXP2zDZP4EyXmHejJ3H8.jpg",
//             summary: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans",
//             rating: 8.8,
//             trailer: "https://youtu.be/NgsQ8mVkN8w",
//             id: "109"
//         }
//     ]

  return (
    <div className='movie-list'>
        {
        movie.map((list,index)=>(
            <div key={index}>
            <Movie movieTake={list} getMovies={getMovies}/>
            </div>
        ))
    }
    </div>
  )
}
