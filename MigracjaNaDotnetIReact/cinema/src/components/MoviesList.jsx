import React, { useState, useEffect } from 'react';

import MovieBox from './MovieBox';

const MoviesList = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/api/movie')
        .then(response => response.json())
        .then(data => {
            setData(data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            setLoading(false);
        });
      }, []);

    return (
        <div style={{width: '100%', padding: '0px', display: 'flex', justifyContent: 'center', color: 'white'}}>
        <div style={{width: '100%',maxWidth: '1000px', height: '100%', display: 'flex', flexDirection: 'column'}}>
            {loading ? (<p style={{color: 'black'}}>Loading...</p>) : 
                data.map(movie => (
                    <MovieBox key={movie.ID} title={movie.title} director={movie.director} length={movie.length} screenings={movie.screenings}/>
                ))
            }
        </div>
    </div>
    )
}

export default MoviesList