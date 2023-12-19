import React, { useState, useEffect } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import LoginBox from '../components/LoginBox';
import SeatBox from '../components/SeatBox';
import { useUser } from '../context/UserContext';
import APIHandler from '../API/APIHandler';
import NavBar from '../components/NavBar';

const ScreeningDetails = () =>
{
    const navigation = useNavigate();

    const {getUser} = useUser();
    const { id } = useParams();

    const [screeningData, setScreeningData] = useState(null);
    const [ticketTypesData, setTicketTypesData] = useState(null);
    const [APIDataStatus, setAPIDataStatus] = useState('loading');

    const [showLoginBox, setShowLoginBox] = useState(false);
    const [reservationDetails, setReservationDetails] = useState(null)
    const [errorMessage, setErrorMessage] = useState("Przynajmniej jedno miejsce musi być wybrane")
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        fetchData();
    }, [id]);

    const fetchData = async () => {
        setAPIDataStatus('loading');
        const result = await APIHandler.getScreeningDetails(id)
        if (result.status === 'success') {
            setScreeningData(result.data)
            setReservationDetails({
                movieTitle: result.data.movieTitle,
                date: result.data.screeningDate,
                roomName: result.data.roomName,
                paid: false,
                active: true,
                screeningID: id,
                seats: []
            })
            const result2 = await APIHandler.getTicketTypes();
            if (result2.status === 'success') {
                setTicketTypesData(result2.data);
                setAPIDataStatus('success')
            }
            else {
                //HANDLE ERROR
                setAPIDataStatus('error');
            }
        }
        else {
            //HANDLE ERROR
            setAPIDataStatus('error');
        }
    }

    const addSeatDetails = (seatDetails) => {
        setReservationDetails(prevState => ({
            ...prevState,
            seats: [
                ...prevState.seats,
                seatDetails
            ]
        }))
    }

    const deleteSeatDetails = (seatID) => {
        let newArray = reservationDetails.seats.filter(seat => seat.seatID !== seatID);
        setReservationDetails(prevState => ({
            ...prevState,
            seats: newArray
        }))
    }

    const submit = () => {
        //User does not choose seats
        if (reservationDetails.seats.length <= 0) {
            setShowError(true);
            return;
        }
        //User not logged in
        else if (getUser() === null) {
            setShowError(false);
            setShowLoginBox(true);
            return;
        }
        //navigation("/Summary", {state: {reservationDetails}});
        routeToSummary();
    }

    const routeToSummary = () => {
        navigation("/Summary", {state: {reservationDetails}});
    }

    const routeToRepertoire = () => {
        navigation("/")
    }
    
    return (
        <>
            <Header />
            <NavBar />
            <div style={{width: '100%', padding: '0px', display: 'flex', alignItems: 'center', flexDirection: "column", color: 'black'}}>
                {showError ? 
                <div style={{width: "60%", maxWidth: "1000px", backgroundColor: "#E57373", border: "1px solid red", borderRadius: "5px", color: "white", textAlign: "center", padding: "10px 0px", marginTop: "40px"}}>
                    {errorMessage}
                </div>
                : null}
                <div style={{width: '100%',maxWidth: '1000px', height: '100%', display: 'flex', justifyContent: 'space-between', marginTop: '40px'}}>
                    {APIDataStatus === 'loading' ? (<p>loading...</p>) : 
                    <>
                        <div style={{width: '30%', height: '100%', display: 'flex', flexDirection: 'column'}}>
                            <h2 style={{margin: '8px 0px'}}>{screeningData.movieTitle}</h2>
                            <p style={{margin: '6px 0px'}}>Data: {screeningData.screeningDate.replace("T"," ").slice(0, 16)}</p>
                            <p style={{margin: '6px 0px'}}>Sala: {screeningData.roomName}</p>
                        </div>
                        <div style={{width: '70%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', borderLeft: '1px solid lightgray', padding: '8px'}}>
                            <div style={{display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '15px'}}>
                                {
                                    screeningData.seats.map(seat => (
                                        <SeatBox key={seat.id} row={seat.row} number={seat.number} ID={seat.id} isTaken={seat.isTaken} addSeat={addSeatDetails} deleteSeat={deleteSeatDetails} ticketTypes={ticketTypesData}/>
                                    ))
                                }
                            </div>
                        </div>
                    </>
                    }
                </div>
                <div style={{width: "1000px", marginTop: "30px", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                <button onClick={routeToRepertoire} style={{backgroundColor: "white", color: "orange", border: "1px solid orange", borderRadius: "15px", padding: '10px 30px', fontWeight: "600"}}>Wróć</button>
                <button onClick={submit} style={{backgroundColor: "orange", color: "white", border: "1px solid orange", borderRadius: "15px", padding: '10px 30px', fontWeight: "600"}}>Dalej</button>
                </div>
            </div>
            {showLoginBox ? <LoginBox /> : null}
        </>
    );
}

export default ScreeningDetails