import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import SeatBox from '../components/SeatBox';

const ScreeningDetails = () =>
{
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/api/screening/${id}`)
        .then(response => response.json())
        .then(data => {
            setData(data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            setLoading(false);
        });
    }, [id]);
    
    return (
        <>
            <Header />
            <div style={{width: '100%', padding: '0px', display: 'flex', justifyContent: 'center', color: 'black'}}>
                <div style={{width: '100%',maxWidth: '1000px', height: '100%', display: 'flex', justifyContent: 'space-between', marginTop: '40px'}}>
                    {loading ? (<p>loading...</p>) : 
                    <>
                        <div style={{width: '30%', height: '100%', display: 'flex', flexDirection: 'column'}}>
                            <h2 style={{margin: '8px 0px'}}>{data.movieTitle}</h2>
                            <p style={{margin: '6px 0px'}}>Data: {data.screeningDate.replace("T"," ").slice(0, 16)}</p>
                            <p style={{margin: '6px 0px'}}>Sala: {data.roomName}</p>
                        </div>
                        <div style={{width: '70%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', borderLeft: '1px solid lightgray', padding: '8px'}}>
                            <div style={{display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '15px'}}>
                                {
                                    data.seats.map(seat => (
                                        <SeatBox number={seat.number} />
                                    ))
                                }
                            </div>
                        </div>
                    </>
                    }
                </div>
            </div>
        </>
    );
}

export default ScreeningDetails