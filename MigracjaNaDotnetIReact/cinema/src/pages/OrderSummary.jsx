import React, {useEffect, useState} from "react";
import { useLocation, NavLink } from "react-router-dom";
import Header from "../components/Header";

const OrderSummary = () => {
    const location = useLocation()
    const reservationDetails = location.state.reservationDetails;
    const [sum, setSum] = useState(0);

    useEffect(() => {
        let priceSum = 0;
        reservationDetails.seats.forEach(seat => {
            priceSum += Number(seat.price);
        })
        setSum(priceSum);
    }, []);
    
    return(
        <>
            <Header />
            <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div style={{width: "100%", maxWidth: "1000px", marginTop: "40px", display: "flex", flexDirection: "column"}}>
                    <div style={{width: "100%", display: "flex", justifyContent: "space-between"}}>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <h2>Dane użytkownika</h2>
                            <p style={{margin: "5px 0px"}}><b>Imie:</b> Jakub</p>
                            <p style={{margin: "5px 0px"}}><b>Nazwisko:</b> Latawiec</p>
                            <p style={{margin: "5px 0px"}}><b>Email:</b> latawiec@student.agh.edu.pl</p>
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
                        <table style={{textAlign: "center", width: "60%", borderCollapse: "collapse"}}>
                            <tr>
                                <th style={{border: "1px solid black", padding: "10px 0px"}}>Rząd</th>
                                <th style={{border: "1px solid black", padding: "10px 0px"}}>Miejsce</th>
                                <th style={{border: "1px solid black", padding: "10px 0px"}}>Typ</th>
                                <th style={{border: "1px solid black", padding: "10px 0px"}}>Cena</th>
                            </tr>
                            {reservationDetails.seats.map(seat => (
                                <tr>
                                    <td style={{border: "1px solid black", padding: "10px 0px"}}>{seat.seatRow}</td>
                                    <td style={{border: "1px solid black", padding: "10px 0px"}}>{seat.seatNumber}</td>
                                    <td style={{border: "1px solid black", padding: "10px 0px"}}>{seat.ticketTypeName}</td>
                                    <td style={{border: "1px solid black", padding: "10px 0px"}}>{seat.price}zł</td>
                                </tr>
                            ))}
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td style={{border: "1px solid black", padding: "10px 0px"}}><b>Razem: {sum.toFixed(2)}zł</b></td>
                            </tr>
                        </table>
                    </div>
                    <div style={{width: "1000px", marginTop: "40px", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                        <NavLink to={`/ScreeningDetails/${reservationDetails.screeningID}`}>
                            <button style={{backgroundColor: "white", color: "orange", border: "1px solid orange", borderRadius: "15px", padding: '10px 30px', fontWeight: "600"}}>Wróć</button>
                        </NavLink>
                        <NavLink to={`/Final`}>
                            <button style={{backgroundColor: "orange", color: "white", border: "1px solid orange", borderRadius: "15px", padding: '10px 30px', fontWeight: "600"}}>Zapłać</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderSummary