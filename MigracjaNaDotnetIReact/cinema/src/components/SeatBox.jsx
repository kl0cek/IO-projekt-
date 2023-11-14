import { useState } from "react";
import React from "react";

const SeatBox = props => {
    const [userSelected, setUserSelected] = useState(false)

    const userSelect = () => {
        setUserSelected(!userSelected)
    }

    return (
        <div onClick={userSelect} style={{width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: `${userSelected ? "orange" : "green"}`}}>
            <p>{props.number}</p>
        </div>
    )
}

export default SeatBox