import { useState } from "react";
import React from "react";

const SeatBox = props => {
    const [userSelected, setUserSelected] = useState(false)
    const [showPopUp, setShowPopUp] = useState(false)
    const [seatDetails, setSeatDetails] = useState({
        seatID: props.ID,
        seatNumber: props.number,
        seatRow: props.row,
        ticketType: null,
        ticketTypeName: null,
        price: null
    })

    const userSelect = () => {
        if (userSelected === false) {
            setShowPopUp(true);
        }
        else {
            props.deleteSeat(props.ID)
        }
        setUserSelected(!userSelected)
    }

    const selectTicketType = e => {
        setSeatDetails({
            seatID: props.ID,
            seatNumber: props.number,
            seatRow: props.row,
            ticketType: e.target.value,
            ticketTypeName: e.currentTarget.getAttribute('ticketName'),
            price: e.currentTarget.getAttribute('price')
        })
    }

    const submitTicketType = () => {
        if (seatDetails.ticketType != null) {
            setShowPopUp(false);
            props.addSeat(seatDetails);
        }
    }

    return (
        <>
            {props.isTaken ?
            <div style={{width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "gray"}}>
                <p>{props.number}</p>
            </div>
            :
            <div onClick={!showPopUp ? userSelect : null} style={{width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: "pointer", backgroundColor: `${userSelected ? "orange" : "green"}`}}>
                <p>{props.number}</p>
                <div style={{width: "100%", height: "100vh", position: "absolute", top: "0px", left: "0px", backgroundColor: "rgba(0,0,0,0.3)", display: `${showPopUp ? "flex" : "none"}`, justifyContent: "center", alignItems: "center"}}>
                    <div style={{width: "300px", padding: "30px", backgroundColor: "white", border: "1px solid black", borderRadius: "30px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                        <h2 style={{margin: "0px 0px 25px 0px"}}>Wybierz bilet:</h2>
                        {props.ticketTypes !== null ?
                        props.ticketTypes.map(ticketType => (
                            <label style={{width: "55%", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                <input onChange={selectTicketType} type="radio" name="ticketType" value={ticketType.id} price={`${ticketType.price.toFixed(2)}`} ticketName={`${ticketType.name}`} />{`${ticketType.name} (${ticketType.price.toFixed(2)}zł)`}
                            </label>
                        ))
                        : null}
                        <button onClick={submitTicketType} style={{marginTop: "25px", padding: "10px 20px", backgroundColor: "orange", border: "1px solid black", borderRadius: "15px", fontWeight: "500"}}>Zatwierdź</button>
                    </div>
                </div>
            </div>
            }
        </> 
    )
}

export default SeatBox