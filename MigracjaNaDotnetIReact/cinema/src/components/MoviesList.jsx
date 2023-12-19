import React, { useState, useEffect } from 'react';

import MovieBox from './MovieBox';
import APIHandler from '../API/APIHandler';

const MoviesList = () => {
    const [moviesData, setMoviesData] = useState(null);
    const [APIDataStatus, setAPIDataStatus] = useState("loading");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setAPIDataStatus('loading');
        const result = await APIHandler.getMovies();
        if (result.status === 'success') {
            setMoviesData(result.data);
            setAPIDataStatus('success');
        }
        else { //HANDLE ERROR
            console.error(result.error);
            setAPIDataStatus('error');
        }
    }

    return (
        <div style={{width: '100%', padding: '0px', display: 'flex', justifyContent: 'center', color: 'white'}}>
            <div style={{width: '100%',maxWidth: '1000px', height: '100%', display: 'flex', flexDirection: 'column'}}>
                {APIDataStatus === 'loading' ? (<p style={{color: 'black'}}>Loading...</p>) 
                : APIDataStatus === 'success' ?
                    moviesData.map(movie => (
                        <MovieBox key={movie.ID} title={movie.title} director={movie.director} length={movie.length} screenings={movie.screenings}/>
                    ))
                : null}
            </div>
        </div>
    )
}

export default MoviesList