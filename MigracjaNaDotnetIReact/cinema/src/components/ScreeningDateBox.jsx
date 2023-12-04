import React from "react";
import { NavLink } from "react-router-dom";

const ScreeningDateBox = (props) => {
    return (
        <NavLink to={`ScreeningDetails/${props.screeningID}`} style={{textDecoration: 'none', color: 'black'}}>
        <div style={{display: 'flex',flexDirection: "column", alignItems: 'center', justifyContent: 'center', padding: '10px 15px', borderRadius: '10px', marginRight: '15px', backgroundColor: 'orange', fontWeight: '600'}}>
            {props.date.slice(11, 16)}<span style={{fontSize: "13px"}}>({props.roomName})</span>
        </div>
        </NavLink>
    )
}

export default ScreeningDateBox