import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const ScreeningDateBox = (props) => {
    const navigation = useNavigate()
    const routeToScreeningDetails = () => {
        navigation(`ScreeningDetails/${props.screeningID}`)
    }

    return (
        <div onClick={routeToScreeningDetails} style={{display: 'flex',flexDirection: "column", alignItems: 'center', justifyContent: 'center', padding: '10px 15px', borderRadius: '10px', marginRight: '15px', backgroundColor: 'orange', fontWeight: '600'}}>
            {props.date.slice(11, 16)}<span style={{fontSize: "13px"}}>({props.roomName})</span>
        </div>
    )
}

export default ScreeningDateBox