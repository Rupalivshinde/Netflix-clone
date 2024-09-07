import React, { useEffect, useRef, useState } from 'react'
import './TitleCard.css';
import { Link } from 'react-router-dom';
import cards_data from '../../assets/cards/Cards_data'


function TitleCard({ title, category }) {
    const [apiData, setApiData] = useState([])
    const cardRef = useRef();
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOWIxNzEwY2E3NzQ1ODU4NzJhZjQ0NmFlNjg1MDYzYSIsIm5iZiI6MTcyNTcwNDU1MC4zMzM5NTcsInN1YiI6IjY2ZGFiNGI1Zjc5ZWRmNWRmMDE2MGFjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gEUfYWcbNqnLElfKJ2otI2Pq8pH3WMr_B4Y1W-KxSTU'
        }
    };


    const handlewheel = (event) => {
        event.preventDefault();
        cardRef.current.scrollLeft += event.deltaY;
    }
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
            .then(response => response.json())
            .then(response => setApiData(response.results))
            .catch(err => console.error(err));


        cardRef.current.addEventListener("wheel", handlewheel);

    }, [])
    return (
        <>
            <div className='title_card'>
                <h2>{title ? title : "Popular On Netflix"}</h2>
                <div className="card_list" ref={cardRef}>
                    {apiData.map((card, index) => {
                        return <Link to={`/player/${card.id}`} className='card' key={index}>
                            <img src={`https://image.tmdb.org/t/p/w500/` + card.backdrop_path} alt="" />
                            <p>{card.original_title}</p>
                        </Link>
                    })}
                </div>

            </div>

        </>

    )
}

export default TitleCard