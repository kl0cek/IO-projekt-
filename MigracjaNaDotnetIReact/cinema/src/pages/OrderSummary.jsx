import React, {useEffect, useState} from "react";
import { useLocation, NavLink, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { useUser } from "../context/UserContext";
import TicketSeatBox from "../components/TicketSeatBox";

import APIHandler from "../API/APIHandler";

const OrderSummary = () => {
    const {getUser} = useUser();
    const navigation = useNavigate();
    const location = useLocation()
    const reservationDetails = location.state.reservationDetails;

    const createReservationBody = () => {
        let reservedSeats = [];
        reservationDetails.seats.forEach(seat => {
            reservedSeats.push({
                    SeatID: seat.seatID, 
                    ScreeningID: Number(reservationDetails.screeningID), 
                    TicketTypeID: Number(seat.ticketType)
                })
        })

        return {
            UserID: getUser().id,
            Paid: reservationDetails.paid,
            Active: reservationDetails.active,
            ReservedSeats: reservedSeats
        }
    }

    const createHistoryBody = () => {
        let reservedSeats = [];
        reservationDetails.seats.forEach(seat => {
            reservedSeats.push({
                SeatID: seat.seatID, 
                SeatNumber: seat.seatNumber, 
                SeatRow: seat.seatRow, 
                TicketType: seat.ticketTypeName, 
                Price: Number(seat.price)
            })
        })

        return {
            UserID: getUser().id,
            MovieName: reservationDetails.movieTitle,
            RoomName: reservationDetails.roomName,
            Paid: reservationDetails.paid,
            Date: reservationDetails.date,
            ReservedSeatsHistory: reservedSeats
        }
    }

    const submit = () => {
        postData();
    }

    const routeToFinal = () => {
        navigation("Final")
    }

    const postData = async () => {
        let result = await APIHandler.postReservation(createReservationBody());
        if (result.status === 'success') {
            result = await APIHandler.postHistory(createHistoryBody());
            if (result.status === 'success') {
                routeToFinal()
            }
            else {
                //HANDLE ERROR
            }
        }
        else {
            //HANDLE ERROR
        }
    }

    const routeToReservationDetails = () => {
        navigation(`/ScreeningDetails/${reservationDetails.screeningID}`);
    }
    
    return(
        <>
            <Header />
            <NavBar />
            <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div style={{width: "100%", maxWidth: "1000px", marginTop: "40px", display: "flex", flexDirection: "column"}}>
                    <div style={{width: "100%", display: "flex", justifyContent: "space-between"}}>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <h2>Dane użytkownika</h2>
                            <p style={{margin: "5px 0px"}}><b>Imie:</b> {getUser().firstName}</p>
                            <p style={{margin: "5px 0px"}}><b>Nazwisko:</b> {getUser().lastName}</p>
                            <p style={{margin: "5px 0px"}}><b>Email:</b> {getUser().email}</p>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", textAlign: "right"}}>
                            <h2>Dane filmu</h2>
                            <p style={{margin: "5px 0px"}}><b>Tytuł:</b> {reservationDetails.movieTitle}</p>
                            <p style={{margin: "5px 0px"}}><b>Data:</b> {reservationDetails.date.replace("T"," ").slice(0, 16)}</p>
                            <p style={{margin: "5px 0px"}}><b>Sala:</b> {reservationDetails.roomName}</p>
                        </div>
                    </div>
                    <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", marginTop: "30px"}}>
                        <h2>Miejsca</h2>
                        <TicketSeatBox seats={reservationDetails.seats}/>
                    </div>
                    <div style={{width: "1000px", marginTop: "40px", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                        <button onClick={routeToReservationDetails} style={{backgroundColor: "white", color: "orange", border: "1px solid orange", borderRadius: "15px", padding: '10px 30px', fontWeight: "600"}}>Wróć</button>
                        <button onClick={submit} style={{backgroundColor: "orange", color: "white", border: "1px solid orange", borderRadius: "15px", padding: '10px 30px', fontWeight: "600"}}>Zapłać</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderSummary