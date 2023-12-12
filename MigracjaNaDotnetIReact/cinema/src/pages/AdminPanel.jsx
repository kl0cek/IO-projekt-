import React, {useState, useEffect} from "react";

import Header from "../components/Header";
import NavBar from "../components/NavBar";
import AdminMovieBox from "../components/AdminMovieBox";

import APIHandler from "../API/APIHandler";

const AdminPanel = () => {
    const [moviesData, setMoviesData] = useState(null);
    const [APIDataStatus, setAPIDataStatus] = useState('loading');

    useEffect(() => {
        fetchMoviesData();
    }, []);

    const fetchMoviesData = async () => {
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

    return(
        <>
        <Header />
        <NavBar />
        <div style={{width: '100%', padding: '0px', display: 'flex', alignItems: 'center', flexDirection: "column", color: 'black'}}>
                <div style={{width: '100%',maxWidth: '1000px', height: '100%', display: 'flex', flexDirection: "column", alignItems: "center", marginTop: '40px'}}>
                {APIDataStatus === 'loading' ? (<p style={{color: 'black'}}>Loading...</p>) 
                : APIDataStatus === 'success' ?
                    moviesData.map(movie => (
                        <AdminMovieBox key={movie.id} title={movie.title} director={movie.director} length={movie.length} screenings={movie.screenings}/>
                    ))
                : null}
                </div>
            </div>
        </>
    )
}

export default AdminPanel