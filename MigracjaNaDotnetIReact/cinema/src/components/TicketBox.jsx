import React from "react";

import TicketSeatBox from "./TicketSeatBox";

const TicketBox = props => {
    return(
        <div style={{width: "80%", display: "flex", flexDirection: "column", alignItems: "center", marginTop: "30px", border: "1px solid black", padding: "20px"}}>
            <div style={{width: "100%", display: "flex", justifyContent: "space-between"}}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                    <p style={{margin: "5px 0px"}}><b>Tytuł:</b> {props.title}</p>
                    <p style={{margin: "5px 0px"}}><b>Data:</b> {props.date.replace("T"," ").slice(0, 16)}</p>
                    <p style={{margin: "5px 0px"}}><b>Sala:</b> {props.room}</p>
                    <p style={{margin: "5px 0px"}}><b>Zapłacone:</b> {props.paid ? "Tak" : "Nie"}</p>
                </div>
                <div>
                    <button onClick={() => props.delete(props.id)} style={{backgroundColor: "red", padding: "10px 15px", border: "none", color: "white", borderRadius: "5px", fontWeight: "600"}}>Zwróć</button>
                </div>
            </div>
            <TicketSeatBox seats={props.seats}/>
        </div>
    )
}

export default TicketBox