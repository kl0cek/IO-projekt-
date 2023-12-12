import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigation = useNavigate();

    const routeToRepertoire = () => {
        navigation("/")
    }

    const routeToUserTickets = () => {
        navigation("/UserTickets")
    }

    const routeToAdminPanel = () => {
        navigation("/AdminPanel")
    }

    return(
        <div style={{width: '100%', padding: '0px', display: 'flex', justifyContent: 'center'}}>
            <div style={{width: '100%',maxWidth: '600px', height: '100%', display: 'flex', justifyContent: "space-between", alignItems: "center", backgroundColor: "orange", padding: "15px 30px", border: "1px solid black", borderRadius: "0 0 10px 10px", fontWeight: "600"}}>
                <p onClick={routeToRepertoire} style={{margin: "0px"}}>Repertuar</p>
                <p onClick={routeToUserTickets} style={{margin: "0px"}}>Moje bilety</p>
                <p onClick={routeToAdminPanel} style={{margin: "0px"}}>Admin Panel</p>
            </div>
        </div>
    )
}

export default NavBar