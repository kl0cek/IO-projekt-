import React from 'react';

import Header from '../components/Header';
import MoviesList from '../components/MoviesList';
import NavBar from '../components/NavBar';

const Repertoire = () =>
{
    return (
        <>
            <Header />
            <NavBar />
            <MoviesList />
        </>
    );
}

export default Repertoire