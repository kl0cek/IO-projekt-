const url = "http://localhost:5000/api";

const getMovies = async () => {
    try {
        const response = await fetch(`${url}/movie`, {method: "GET"})
        if (!response.ok) {
            throw new Error("Movies not found")
        }
        const data = await response.json();
        return {data: data, status: 'success'};
    }
    catch (err) {
        return {data: null, status: 'error', error: err.message};
    }

}

const getTickets = async (userID) => {
    try {
        const response = await fetch(`${url}/history/${userID}`, {method: "GET"})
        if (!response.ok) {
            throw new Error("Could not get user tickets from server. Try again later.")
        }
        const data = await response.json();
        return {data: data, status: 'success'};
    }
    catch (err) {
        return {data: null, status: 'error', error: err.message};
    }
}

const deleteTicket = async (ticketID) => {
    try {
        const response = await fetch(`${url}/history/${ticketID}`, {method: "DELETE"})
        if (!response.ok) {
            throw new Error("Could not delete ticket")
        }
        return {status: 'success'};
    }
    catch (err) {
        return {status: 'error', error: err.message};
    }
}

const getUser = async (userEmail) => {
    const response = await fetch(`${url}/user/${userEmail}`, {method: "GET"})
    if (response.status === 404) {
        return {data: null, status: 'error', error: "Użytkownik nie istnieje"}
    }
    else if (response.status === 200) {
        const data = await response.json();
        return {data: data, status: 'success'};
    }
    else {
        return {data: null, status: "error", error: "Could not get user data"}
    }
    
}

const postReservation = async (bodyData) => {
    try {
        const response = await fetch(`${url}/reservation`, {method: "POST", body: JSON.stringify(bodyData), headers: {"Content-Type": "application/json"}})
        if (response.status !== 201) {
            return {status: 'error', error: "Coś poszło nie tak, spróbuj ponownie później."}
        }
        return {status: 'success'};
    }
    catch (err) {
        return {status: 'error', error: err.message};
    }
}

const postHistory = async (bodyData) => {
    try {
        const response = await fetch(`${url}/history`, {method: "POST", body: JSON.stringify(bodyData), headers: {"Content-Type": "application/json"}})
        if (response.status !== 201) {
            return {status: 'error', error: "Coś poszło nie tak, spróbuj ponownie później."}
        }
        return {status: 'success'};
    }
    catch (err) {
        return {status: 'error', error: err.message};
    }
}

const postUser = async (bodyData) => {
    try {
        const response = await fetch(`${url}/user`, {method: "POST", body: JSON.stringify(bodyData), headers: {"Content-Type": "application/json"}})
        if (response.status !== 201) {
            return {status: 'error', error: "Coś poszło nie tak, spróbuj ponownie później."}
        }
        const data = await response.json();
        return {data: data, status: 'success'};
    }
    catch (err) {
        return {status: 'error', error: err.message};
    }
}

const getScreeningDetails = async (screeningID) => {
    try {
        const response = await fetch(`${url}/screening/${screeningID}`, {method: "GET"})
        if (!response.ok) {
            return {data: null, status: "error", error: "Screening details not found"}
        }
        const data = await response.json();
        return {data: data, status: 'success'};
    }
    catch (err) {
        return {data: null, status: 'error', error: err.message};
    }
}

const getTicketTypes = async () => {
    try {
        const response = await fetch(`${url}/tickettype`, {method: "GET"})
        if (!response.ok) {
            return {data: null, status: "error", error: "Could not get ticket types"}
        }
        const data = await response.json();
        return {data: data, status: 'success'};
    }
    catch (err) {
        return {data: null, status: 'error', error: err.message};
    }
}

export default {getMovies, getTickets, deleteTicket, getUser, postReservation, postHistory, getScreeningDetails, getTicketTypes, postUser};