import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import { Link } from 'react-router-dom';

const TitleCardsSimilar = ({title}) => {
  const [apiData, setApiData] = useState([]);

  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyY2UzNGUyZWY1M2RhNjVjZmJhNTUyY2U1ODA4M2Q3MyIsIm5iZiI6MTc0MTc0Mzc5Ni41Nywic3ViIjoiNjdkMGU2YjQzNjAyMDI2OTA2ODE0OTVlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.tsygZwkh__To2InGKSkRN_TMUehxKGJMsyNhpY0AJtw'
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  const lastWatchedId = localStorage.getItem('lastWatchedId') || '34067';

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${lastWatchedId}/similar?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel)
  },[])
  return (
    <div className='title_cards'>
      <h2>{title?title:"Filmes Pokémon"}</h2>
      <div className="card_list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt=''/>
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCardsSimilar
