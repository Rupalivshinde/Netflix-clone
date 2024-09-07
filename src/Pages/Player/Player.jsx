import React, { useEffect, useState } from 'react';
import './Player.css';
import back_arrow_icon from '/src/assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

function Player() {
    const { id } = useParams();
    const navigate = useNavigate()

    const [apiData, setApiData] = useState({
        name: "",
        key: "",
        published_at: "",
        typeof: ""

    })
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOWIxNzEwY2E3NzQ1ODU4NzJhZjQ0NmFlNjg1MDYzYSIsIm5iZiI6MTcyNTYxNDQ1MS43ODI2ODQsInN1YiI6IjY2ZGFiNGI1Zjc5ZWRmNWRmMDE2MGFjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tUjYYrpU9IRRO7m3f5neHdmdHkHCmAJue0bC-QrmwCc'
        }
    };
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then(response => response.json())
            .then(response => setApiData(response.results[0]))
            .catch(err => console.error(err));
    }, [])

    return (
        <>
            <div className="player">
                <img src={back_arrow_icon} alt="Back" className="back-arrow-icon" onClick={() => navigate(-2)} />
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${apiData.key}`}
                    title="trailer"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
                <div className="player-info">
                    <p>{apiData.published_at.slice(0, 10)}</p>
                    <p>{apiData.name}</p>
                    <p>{apiData.type}</p>



                </div>
            </div>
        </>
    );
}

export default Player;
