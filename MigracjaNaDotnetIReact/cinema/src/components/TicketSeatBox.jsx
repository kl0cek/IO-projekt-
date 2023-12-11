import React, {useState, useEffect} from "react";

const TicketSeatBox = props => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        calcSum();
    }, []);

    const calcSum = () => {
        let sum = 0;
        props.seats.forEach(seat => {
            sum += Number(seat.price);
        })
        setTotal(sum);
    }
    return(
        <table style={{textAlign: "center", width: "60%", borderCollapse: "collapse"}}>
            <thead>
            <tr>
                <th style={{border: "1px solid black", padding: "10px 0px"}}>Rząd</th>
                <th style={{border: "1px solid black", padding: "10px 0px"}}>Miejsce</th>
                <th style={{border: "1px solid black", padding: "10px 0px"}}>Typ</th>
                <th style={{border: "1px solid black", padding: "10px 0px"}}>Cena</th>
            </tr>
            </thead>
            <tbody>
            {props.seats.map(seat => (
                <tr key={seat.id}>
                    <td style={{border: "1px solid black", padding: "10px 0px"}}>{seat.seatRow}</td>
                    <td style={{border: "1px solid black", padding: "10px 0px"}}>{seat.seatNumber}</td>
                    <td style={{border: "1px solid black", padding: "10px 0px"}}>{seat.ticketType}</td>
                    <td style={{border: "1px solid black", padding: "10px 0px"}}>{Number(seat.price).toFixed(2)}zł</td>
                </tr>
            ))}
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td style={{border: "1px solid black", padding: "10px 0px"}}><b>Razem: {total.toFixed(2)}zł</b></td>
            </tr>
            </tbody>
        </table>
    )
}

export default TicketSeatBox