import React, {useState, useEffect} from "react";
import Header from "../components/Header"
import NavBar from "../components/NavBar";
import TicketList from "../components/TicketList";

const UserTickets = () => {
    return(
        <>
            <Header />
            <NavBar />
            <TicketList />
        </>
    )
}

export default UserTickets