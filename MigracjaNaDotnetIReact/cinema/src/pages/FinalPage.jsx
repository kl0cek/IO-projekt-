import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import NavBar from "../components/NavBar";

const FinalPage = () => {
    const navigation = useNavigate();
    
    const routeToUserTickets = () => {
        navigation("/UserTickets")
    }

    return(
        <>
            <Header/>
            <NavBar />
            <div style={{width: '100%', padding: '0px', display: 'flex', alignItems: 'center', flexDirection: "column", color: 'black'}}>
                <div style={{width: '100%',maxWidth: '1000px', height: '100%', display: 'flex', flexDirection: "column", alignItems: "center", marginTop: '40px'}}>
                    <h1>Wszystko poszło pomyślnie!</h1>
                    <button onClick={routeToUserTickets} style={{padding: "15px 25px", fontWeight: "600", color: "white", backgroundColor: "orange", border: "none", borderRadius: "15px"}}>Zobacz bilety</button>
                </div>
            </div>
        </>
    )
}

export default FinalPage