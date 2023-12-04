import React from "react";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";

const FinalPage = () => {
    return(
        <>
            <Header/>
            <div style={{width: '100%', padding: '0px', display: 'flex', alignItems: 'center', flexDirection: "column", color: 'black'}}>
                <div style={{width: '100%',maxWidth: '1000px', height: '100%', display: 'flex', flexDirection: "column", alignItems: "center", marginTop: '40px'}}>
                    <h1>Wszystko poszło pomyślnie!</h1>
                    <NavLink to={`/UserTickets`}>
                        <button style={{padding: "15px 25px", fontWeight: "600", color: "white", backgroundColor: "orange", border: "none", borderRadius: "15px"}}>Zobacz bilety</button>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default FinalPage