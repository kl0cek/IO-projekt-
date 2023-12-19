import React, {useState, useEffect} from "react";
import { useUser } from "../context/UserContext";

import TicketBox from "./TicketBox";

import APIHandler from "../API/APIHandler";

const TicketList = () => {
    const {getUser} = useUser();
    const [ticketsData, setTicketsData] = useState(null);
    const [APIDataStatus, setAPIDataStatus] = useState('loading');
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (getUser() === null) {
            setAPIDataStatus('error');
            setErrorMessage("Musisz się zalogować żeby zobaczyć swoje bilety");
        }
        else {
            fetchData();
        }
    }, [getUser()]);

    const fetchData = async () => {
        setAPIDataStatus('loading');
        const result = await APIHandler.getTickets(getUser().id);
        if (result.status === 'success') {
            setTicketsData(result.data)
            setAPIDataStatus('success');
        }
        else {
            setErrorMessage(result.error)
            setAPIDataStatus('error');
        }
    }

    const deleteTicket = async (ticketID) => {
        const result = await APIHandler.deleteTicket(ticketID);
        if (result.status === 'success') {
            const newTicketsData = ticketsData.filter(ticket => ticket.id != ticketID);
            setTicketsData(newTicketsData);
        }
        else {
            //HANDLE ERROR
            return;
        }
    }  

    return(
        <div style={{width: '100%', padding: '0px', display: 'flex', justifyContent: 'center'}}>
            <div style={{width: '100%',maxWidth: '1000px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: "center"}}>
                {APIDataStatus === 'loading' ? (
                    <p style={{color: 'black'}}>Loading...</p>)
                : APIDataStatus === 'success' ? 
                    ticketsData.map(ticket => (
                        <TicketBox key={ticket.id} id={ticket.id} title={ticket.movieName} date={ticket.date} room={ticket.roomName} paid={ticket.paid} seats={ticket.reservedSeatsHistory} delete={deleteTicket}/>
                    ))
                : APIDataStatus === 'error' ? (
                    <h2 style={{width: "300px", textAlign: "center", marginTop: "40px"}}>{errorMessage}</h2>
                ): null}
            </div>
        </div>
    )
}

export default TicketList